import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({ name: "users" })
export class User{
    @PrimaryGeneratedColumn ()
    id: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 200 })
    email: string;

    /*@Column({ type: "date", default: new Date() })
    birthdate: Date;*/

    @Column()
    birthdate: string;

    @Column({ unique: true, type: "int" })
    dni: number;

    @OneToOne(() => Credential)
    @JoinColumn({name: "credentialsId"})
    credentials: Credential | Credential["id"] ;

    @OneToMany (() => Appointment, appointment => appointment.user) 
    @JoinColumn()
    appointments: Appointment[];


} 