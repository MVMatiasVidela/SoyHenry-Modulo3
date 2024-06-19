import bcrypt from 'bcrypt';


function encryptPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
}

async function comparePassword(password: string, hash: string): Promise <boolean> {
    return await bcrypt.compare(password, hash);
}

export { encryptPassword, comparePassword };