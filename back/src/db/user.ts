import { IUser } from "../types/user";

export const users: IUser[] = [
    {
    id: 1,
    name: "Matias Videla",
    email: "matias@gmail.com",
    birthdate: new Date ("1999-05-08"),
    dni: 12345678,
    appointments: [],
    credentialsId: 1,
    },
    
    {
    id: 2,
    name: "Ro Sevilla",
    email: "rosi@gmail.com",
    birthdate: new Date ("1995-11-10"),
    dni: 12345679,
    appointments: [],
    credentialsId: 2,
    },

]
