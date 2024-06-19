import { Request, Response} from "express"
import {
    getAllUsersService, 
    getUserByIdService, 
    postUserRegisterService, 
    postUserLoginService,
} from "../services/user"
//import { token } from "morgan";
import { CredentialDto,  } from "../types/credential";
import { UserDto } from "../types/user"


async function getAllUsersController(req: Request, res: Response) {
    try {
        const users = await getAllUsersService();
    res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({ message: error.message});
    }
}


async function getUserByIdController(req: Request, res: Response) {
    try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));
    if (user) res.status(200).json(user);
    else res.status(404).json ({message: "User not found"})
    } catch (error: any) {
    res.status(404).json({ message: error.message });
    }
}


async function postUserRegisterController(req: Request, res: Response) {
    try {
    const user: UserDto = req.body;
const newUser = await postUserRegisterService(user);
    res.status(201).json({message: "User registered", newUser});
    } catch (error: any) {
    res.status(400).json({ message: error.message });
    }
}


async function postUserLoginController(req: Request, res: Response) {
try {
    const credentials: CredentialDto = req.body;
    const user = await postUserLoginService (credentials);
    res.status(201).json({ message: "User logged", user, token: true });
} catch (error: any) {
    res.status(400).json({ message: error.message });
    }
}                    

export {
    getAllUsersController,
    getUserByIdController,
    postUserRegisterController,
    postUserLoginController,
}