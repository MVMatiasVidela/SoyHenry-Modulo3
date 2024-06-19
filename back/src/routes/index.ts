import { Router, Request, Response } from "express";
import routerUser from "./user";
import routerAppointment from "./appointment";


const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Todo OK");
})

router.use("/users", routerUser)
router.use("/appointments", routerAppointment)


export default router;