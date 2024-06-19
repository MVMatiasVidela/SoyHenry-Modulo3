import { Appointment } from "../entities/Appointment";
import { AppDataSource } from "../config";
import { appointmentRepository } from "../repositories/appointment";
import { AppointmentDto, Status} from "../types/appointment";
import { User } from "../entities/User";
const appointmentRepositoryLocal = AppDataSource.getRepository(Appointment);

async function getAllAppointmentsService(): Promise <Appointment[]> {
    //*con repositorio
    try{
    const appointments = await appointmentRepositoryLocal.find({
        relations: {user: true}
    });
    if ( appointments.length === 0) {
        throw new Error("No appointments found");
    }
    return appointments;
    //*con repositorio personalizado
    // return await appointmentRepository.getAllAppointments(userId);
} catch (error: any) {
    throw new Error (error);
    }
}

async function getAppointmentByIdService(id: number): Promise <Appointment>{
    try {
        //*con repositorio
        const appointment = await AppDataSource.getRepository(Appointment).findOne({
            where: { id },
            relations: ["user"],
        });
        if (!appointment) {
            throw new Error ("Appintment not found");
        }
        return appointment;
        
        //*con repositorio personlaizado
        //return await appointmentRepository.getAppointmentById(id);
    } catch (error: any) {
        throw new Error(error);
    }
}

    async function postAppointmentService (appointment: AppointmentDto){
    try {
        //*con repo
        const user = await AppDataSource.getRepository(User).findOne({
            where: { id: appointment.userId },
            relations: ["appointments"]
        });
    if (!user) {
        throw new Error("User for this appointment not found");
    }
    const app = {   
        date: appointment.date,
        time: appointment.time,
        description: appointment.description,
    }
 
    const newAppointment = await AppDataSource.getRepository(Appointment).save({...app, user});
    if (!newAppointment){
        throw new Error ("Appointment not created");
    }
    return newAppointment; 

    //* con repositorio personalizado
    //return await AppointmentRepository.createAppointment(appointment);
    } catch (error: any) {
        throw new Error (error);
    }
}

async function putAppointmentService (id: number) : Promise <Appointment>{
    try {
        //*con repositorio
        const appointment = await AppDataSource.getRepository(Appointment).findOne({
            where: { id },
            relations: ["user"],
        });
        if (!appointment) {
            throw new Error("Appointment not found");
        }
        const updatedAppointment= await AppDataSource.getRepository(
            Appointment
        ).save ({ ... appointment, status: Status.CANCELLED });
        if (!updatedAppointment){
            throw new Error ("Appointment not cancelled");
        }
        return updatedAppointment; 
    
    //*con repo personalizado
    //return await appointmentRepository.cancelAppointment (id);
    } catch (error: any ) {
        throw new Error(error);
    }
}



export {
    getAllAppointmentsService,
    getAppointmentByIdService,
    postAppointmentService,
    putAppointmentService,
}