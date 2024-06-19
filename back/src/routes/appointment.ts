import {Router, Request, Response} from "express"
import {
    getAllAppointmentsController,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,
} from "../controllers/appointment"

import {checkAppointmentDto} from "../middlewares/appointments"



const routerAppointment: Router = Router()

routerAppointment.get("/", getAllAppointmentsController)
routerAppointment.get("/:id", getAppointmentByIdController)
routerAppointment.post("/schedule", checkAppointmentDto, postAppointmentController)
routerAppointment.put("/cancel/:id", putAppointmentController)

export default routerAppointment;