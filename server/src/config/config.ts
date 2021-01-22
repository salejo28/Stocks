import dotenv from "dotenv";

dotenv.config();

export default {
    db: {
        host: process.env.HOST_DB,
        user: process.env.USER_DB,
        database: process.env.DB
    },
    token: {
        secret_key: process.env.SECRET_JWT
    }
}