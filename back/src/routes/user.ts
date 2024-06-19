import { Router } from "express"
import {
getAllUsersController,
getUserByIdController,
postUserRegisterController,
postUserLoginController,
} from "../controllers/user"


const routerUser: Router = Router()


routerUser.get("/", getAllUsersController);
routerUser.get("/:id", getUserByIdController);
routerUser.post("/register", postUserRegisterController);
routerUser.post("/login", postUserLoginController);


export default routerUser;