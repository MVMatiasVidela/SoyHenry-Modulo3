export const users = [
  {
    id: 1,
    name: "Matias",
    email: "matiasVidela@gmail.com",
    birthdate: "08/05/1999",
    dni: 12345678,
    credential: {
        id: 1,
        username: "matu"
    },
  },
  {
    id: 2,
    name: "ro",
    email: "rosi@gmail.com",
    birthdate: "11/10/1995",
    dni: 12345679,
    credential: {
        id: 2,
        username: "rosi"
    },
  },
];

export const appointments = [
  {
    id: 1,
    date: "2024-05-13",
    time: "09:20:00",
    description: "vacuna desparasitacion",
    status: "ACTIVE",
    user: {
      id: 1,
      name: "Matias",
      email: "matiasVidela@gmail.com",
      birthdate: "08/05/1999",
      dni: 12345678,
    },
  },

  {
    id: 2,
    date: "2024-05-15",
    time: "10:00:00",
    description: "Consulta revision",
    status: "ACTIVE",
    user: {
      id: 2,
      name: "ro",
      email: "rosi@gmail.com",
      birthdate: "11/10/1995",
      dni: 12345679,
    },
  },
];

