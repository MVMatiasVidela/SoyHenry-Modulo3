import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  postAppointmentService,
  putAppointmentService,
} from "../services/appointment";
import { AppointmentDto } from "../types/appointment";

async function getAllAppointmentsController(req: Request, res: Response) {
  try {
    const appointment = await getAllAppointmentsService();
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}

async function getAppointmentByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}

async function postAppointmentController(req: Request, res: Response) {
  try {
    const appointment: AppointmentDto = req.body;
    const newAppointment = await postAppointmentService(appointment);
    res
      .status(201)
      .json({ message: " Appointment created", data: newAppointment });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

async function putAppointmentController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const appointment = await putAppointmentService(Number(id));
    res.status(201).json({ message: "Appointment updated", data: appointment });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}

export {
  getAllAppointmentsController,
  getAppointmentByIdController,
  postAppointmentController,
  putAppointmentController,
};
