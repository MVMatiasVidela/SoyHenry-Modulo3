import { AppDataSource } from "../config"
import { Appointment } from "../entities/Appointment"
import { User } from "../entities/User"
import { AppointmentDto, Status } from "../types/appointment"

export const appointmentRepository= AppDataSource.getRepository(Appointment).extend({
    async getAllAppointments() {
        const appointments = await this.find ({
            relations: ["userId"],
        });
        if (appointments.length === 0){
            throw new Error(" No appointments found");
        }
return appointments;
    },
    async getAppointmentById(id: number) {
        const appointment = await this.findOne({
            where: { id },
            relations: ["user"],
        });
        if (!appointment) {
            throw new Error("Appointment not found")
        }
        return appointment;
    },
    async createAppointment (appointment: AppointmentDto) {
        const user = await AppDataSource.getRepository(User).findOne({
            where: {id: appointment.userId},
        })
        if (!user){
            throw new Error("user for this appointment not found");
}
return this.save({
    ... appointment, user,
});
    },
    async cancelAppointment(id: number) {
        const appointment = await this.findOne({
            where: {id},
            relations: ["user"],
        });
        if (!appointment) {
            throw new Error("Appointment not found");
    }
    return this.save({ ... appointment, status: Status.CANCELLED});
},
});