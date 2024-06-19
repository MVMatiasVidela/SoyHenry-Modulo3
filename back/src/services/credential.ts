import { ICredential } from "../types/credential";
import { encryptPassword, comparePassword } from "../utils";
import { credentials } from "../db/credential";
import { AppDataSource } from "../config";
import { Credential } from "../entities/Credential";

//usuario en el registro
async function generateCredential({ username, password }: any) {
  try {
    const hash: string = encryptPassword(password);
    //* sin repositorio
    const cred = await AppDataSource.manager.save(Credential, {
      username,
      password: hash,
    });

    //*con repositorio
    /*const cred = await AppDataSource.getRepository(Credential).save ({
    username, 
    password: hash,
    });*/

    return cred.id;
  } catch (error: any) {
    throw new Error(error);
  }
}

//usuario en el login
async function checkCredential({
  username,
  password,
}: ICredential): Promise<Partial<Credential>> {
  try {
    //* sin repositorio
    //const credentioalRepository = AppDataSource.getRepository(Credential);
    //const credential = await credentioalRepository.findOne( {
    //where: {username},
    // select: { id: true , password: true }
    //});
    //*con repositorio
    const credential = await AppDataSource.getRepository(Credential).findOne({
      where: { username },
      select: ["id", "password"],
    });
    console.log(credential);
    if (!credential) {
      throw new Error("User not found");
    }
    const isValid = comparePassword(password, credential.password);
    console.log(isValid);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    return { id: credential.id, username: credential.username };
  } catch (error: any) {
    throw new Error(error);
  }
}

export { generateCredential, checkCredential };
