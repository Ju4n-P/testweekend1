import { Component, OnInit } from '@angular/core';
import { UserService } from '../@services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public users: User[];

  constructor(private userService: UserService) { 

  }


  ngOnInit(): void {

    this.users = this.userService.getAll();
    console.log(this.users);
    
  }

  public removeUser(user: User): void{
    this.userService.deleteUser(user)
  }



}
