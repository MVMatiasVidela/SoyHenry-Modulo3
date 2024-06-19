import { Request, Response, NextFunction } from "express";
import { AppointmentDto } from "../types/appointment";

async function checkAppointmentDto(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId, date, time, description }: AppointmentDto = req.body;
    console.log(Number(userId));
    const appointment: { [key: string]: string | number | Date } = {
      userId: Number(userId),
      date,
      time,
      description,
    };
    
    const missingKeys: string[] = [];
    for (const key in appointment) {
      if (appointment[key] === undefined) {
        missingKeys.push(key);
      }
    }

    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }
next();

    }catch (error: any) {
    res.status(500).json({message: error.message});
    }
}
export { checkAppointmentDto };
