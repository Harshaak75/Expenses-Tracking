// Quries related user

const userinfo = "SELECT * FROM dummy"

const createUserInfo = "INSERT INTO users (id, email, password) VALUES ($1,$2,$3)";

export const Quries = {
    userinfo,
    createUserInfo,
}