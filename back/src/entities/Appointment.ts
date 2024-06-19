import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../types/appointment";
import { User } from "./User";

@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    date: Date;

    @Column ({ type: "time" })
    time: string;

    @Column({ type: "text"})
    description: string

    @Column ({ type: "enum", enum: Status, default: Status.ACTIVE})
    status: Status;

    @ManyToOne (() => User, user => user.appointments)
    @JoinColumn ({name: "userId" })
    user: User;
}