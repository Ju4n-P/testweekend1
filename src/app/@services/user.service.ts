import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = new Array<User>();


  constructor() { 

    this.users.push({"num":10,"firstname":"Jimmy", "lastname":"Hendrix"})
    this.users.push({"num":20,"firstname":"Trump", "lastname":"Tower"})
    this.users.push({"num":30,"firstname":"Beethoven", "lastname":"Ludwig van"})

  }
  

  public getAll():User[]{
    return this.users;
  }

  public creatUser(user:User): void{
    this.users.push(user);
  }

  public deleteUser(user:User){
    let index = this.users.findIndex(el => el.num === user.num);
    if(index !== -1){
      this.users.splice(index, 1);
    }
  }

  

}
