import { Credentials } from "../types/Credentials";

export const adminCredentials: Credentials = {
    username: "Administrator",
    password: "admin"
};


export const invalidPasswordCredentials: Credentials = {
    username: 'Administrator',
    password: 'WrongPassword123'
};


export const invalidUsernameCredentials: Credentials = {
    username: 'Cadmin',
    password: 'admin'
};


export const emptyUsernameCredentials: Credentials = {
    username: "",
    password: "admin"
};


export const emptyPasswordCredentials: Credentials = {
    username: "Administrator",
    password: ""
};


export const emptyCredentials: Credentials = {
    username: "",
    password: ""
};

