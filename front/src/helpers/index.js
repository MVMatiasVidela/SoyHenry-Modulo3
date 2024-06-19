import axios from "axios";

export async function getAppointmets() {
  const response = await axios("http://localhost:3000/appointments");
  return response.data;
}

export async function getApointment(id) {
  const response = await axios(`http://localhost:3000/appointments/${id}`);
  return response.data;
}

export async function postAppointment(appointment, id) {
  //const id = localStorage.getItem("userId")
  const response = await axios.post(
    `http://localhost:3000/appointments/schedule`,{ ...appointment, userId:id} );
  return response.data;
}

export async function cancelAppointment(id) {
  const response = await axios.put(
    `http://localhost:3000/appointments/cancel/${id}`
  );
  return response.data;
}

export async function getUsers() {
  const response = await axios("http://localhost:3000/users");
  return response.data;
}

export async function getUser(id) {
  const response = await axios(`http://localhost:3000/users/${id}`);
  return response.data;
}

export async function postUserRegister(user) {
  const response = await axios.post(
    "http://localhost:3000/users/register",user);
  return response.data;
}

export async function postUserLogin(user) {
  const response = await axios.post("http://localhost:3000/users/login", user);
  return response.data;
}
