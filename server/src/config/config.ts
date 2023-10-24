import dotenv from 'dotenv';

dotenv.config();


export const config  = {
    secret: process.env.SECRET,
    port: process.env.PORT,
    email: process.env.EMAIL,
    pass: process.env.PASS,
    api_toolkit_key: process.env.APITOOLKIT_KEY as string,
}