import { Request, Response, NextFunction } from "express";
import { UserDto } from "../types/user";
import { credentialRepository } from "../repositories/credentials";


async function checkUserRegisterDto(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, email, birthdate, dni, username, password }: UserDto  = req.body;
    const user: { [key: string]: string | number | Date } = {
      name,
      email,
      birthdate,
      dni,
      username,
      password,
    };
    const missingKeys: string[] = [];
    for (const key in user) {
      if (user[key] === undefined) {
        missingKeys.push(key);
      }
    }
    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }
    next();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function checkUserLoginDto(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password }: UserDto = req.body;
    const loginInfo: { [key: string]: string } = {
      username,
      password,
    };
    const missingKeys: string[] = [];
    for (const key in loginInfo) {
      if (loginInfo[key] === undefined) {
        missingKeys.push(key);
      }
    }
    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }

    const isRegistered = await credentialRepository.validateUser(username)
    if (isRegistered) {
      throw new Error(`el usuario ${username}ya existe`)
    }


    next();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
