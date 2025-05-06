import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken'

const jW_SECRET = <string>process.env.jW_SECRET;

const generateToken = (id: string) => {
    const jwt = sign({ id }, jW_SECRET, {
        expiresIn: '2h',
    });
    return jwt;
}

const verifyToken = (token: string) => {
    const isOk = verify(token, jW_SECRET);
    return isOk;
}

export { generateToken, verifyToken };