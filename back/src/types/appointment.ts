
import { IUser } from "./user"

export enum Status{
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
}

export interface IAppointment {
    id?: number;
    date: Date;
    time: string;
    description: string;
    status: Status;
    userId: IUser ["id"];
}

export class AppointmentDto {
    date: Date;
    time: string;
    description: string;
    userId: number;
} 