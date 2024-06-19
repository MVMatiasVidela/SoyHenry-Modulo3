import { AppDataSource } from "../config";
import {Credential} from "../entities/Credential";

export const credentialRepository = AppDataSource.getRepository(Credential).extend({
    async validateUser(username: string) {

        const user = await this.findOneBy({ username})
        if (user) {
            return true
        }
    }
})