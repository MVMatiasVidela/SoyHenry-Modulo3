import { users } from "../db";
import { ICredential } from "../types/credential";
import { checkCredential, generateCredential } from "./credential";
import { AppDataSource } from "../config";
import { User } from "../entities/User";
import { UserDto } from "../types/user";
import { InsertResult } from "typeorm";
import { userRepository } from "../repositories/user";

const userRepositoryLocal = AppDataSource.getRepository(User);

async function getAllUsersService(): Promise<User[]> {
  try {
    // return users;
    //*SIN REPOSITORIO
    //const users = await AppDataSource.manager.find(User);

    //*CON REPOSITORIO
    console.log("hola");
    const users = await userRepositoryLocal.find({
      relations: ["credentials", "appointments"],
    });
    console.log("chau");
    //*CON REPOSITORIO PERSONALIZADO
    //const users = await userRepository.getAllUsers();

    return users;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function getUserByIdService(id: number): Promise<User | null> {
  try {
    //*SIN REPOSITORIO
    //const user = await AppDataSource.manager.findOneBy(User, { id } );

    //*CON REPOSITORIO
    const user = await userRepositoryLocal.findOne({
      where: { id },
      relations: { credentials: true, appointments: true },
    });

    //*CON REPOSITORIO PERSONALIZADO
    //const user= await userRepository.getUserById(id);

    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function postUserRegisterService(
  user: UserDto
): Promise<User | InsertResult> {
  try {
    //*SIN REPOSITORIO
    /*const credentialId = await generateCredential({
        username: user.username, 
        password: user.password
    });
    const newUser = AppDataSource.manager.save(User, {  
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni: user.dni,
        credentialsId: credentialId,
    });*/

    //*CON REPOSITORIO
    const credentialId = await generateCredential({
      username: user.username,
      password: user.password,
    });
    console.log(credentialId);

    let newUser = await AppDataSource.getRepository(User).findOneBy({
      credentials: { id: credentialId },
    });
    if (!newUser) {
      newUser = AppDataSource.getRepository(User).create({
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni: user.dni,
        credentials: credentialId,
      });
      await AppDataSource.getRepository(User).save(newUser);
      console.log(newUser);
    }

    //*CON REPOSITORY Y QUERY BUILDER
    /*const credentialId = await generateCredential({
        username: user.username, 
        password: user.password
    });
    const newUser = await userRepositoryLocal
    .createQueryBuilder("user")
    .insert()
    .into(User)
    .values({
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni: user.dni,
        credentials: credentialId,
    })
    .execute(); */

    //*CON REPOSITORIO personalizado
    //const newUser = userRepository.createUser(user)
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function postUserLoginService(credentials: ICredential) {
  try {
    const credential = await checkCredential(credentials);
    const user = await userRepositoryLocal.findOne({
      where: { credentials: { id: credential.id } },
      relations: ["appointments"],
    });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}

export {
  getAllUsersService,
  getUserByIdService,
  postUserRegisterService,
  postUserLoginService,
};
