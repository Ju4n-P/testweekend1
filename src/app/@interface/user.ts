import { Role } from "./enum/role";

export interface IUser {

    num:number;
    firstname?: string;
    lastname: string;
    role: Role;

}
