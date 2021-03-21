import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from './@interface/enum/role';
import { IUser } from './@interface/user';
import { Book } from './classes/book';
import { User } from './classes/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public usersWithInterface: IUser = {
    "num":200,
    "firstname": 'Polo',
    "lastname": "Hendrix",
    "role": Role.ADMIN
  };

  public title: string = 'My First Week ';
  public user: User = new User(20, 'lol', 'sda');

  public users: User[] = [
    new User(23, 'lola', 'Smith'),
    new User(54, 'hector', 'Pator'),
    new User(78, 'Waren', 'Amlet')
  ];


  public tab: number[] = [1, 2, 3, 4, 5]

  public tab2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  public isAvailable: Boolean = false

  public bookName: string = "ALL ES6 Programming";
  public PictureUrl: string = 'https://picsum.photos/200'

  public books: Book[] = [
    new Book('Book1'),
    new Book('Book2'),
    new Book('Book3'),
    new Book('Book4'),
  ]

  public bookRate: number;

  public fontSizePx: number = 16;

  public today: number = Date.now();

  constructor() {
    this.isAvailable = true;

  }


  public helloWorld(): string {
    return 'hello world from the function helloWorld()'
  }


  public name: string = "Robin";
  public color: string = 'red';

  public onRate(rateValue: number) {
    console.log(rateValue);
    this.bookRate = rateValue;
  }

  // public displayBlue(): boolean {
  //   return this.color === "blue" ? true : false;
  // }






}
2.21