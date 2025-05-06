import { hash, compare } from 'bcryptjs'

const encrypt = async (text: string) => {
    const textHash = await hash(text, 8);
    return textHash;
}

const verified = async (text: string, textHash: string) => {
    const isCorrect = await compare(text, textHash);
    return isCorrect;
}

export { encrypt, verified };