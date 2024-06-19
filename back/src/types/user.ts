import{IAppointment} from "./appointment"
import{ICredential} from "./credential"

export interface IUser {
    id?: number;
    name: string;
    email: string;
    birthdate: string;
    dni: number;
    appointments: IAppointment[];
    credentialsId: ICredential ["id"];
} 


export class UserDto {
    name: string;
    email: string;
    birthdate: string;
    dni: number;
    username: string;
    password: string;
} 