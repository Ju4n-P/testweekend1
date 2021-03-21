import { Joke } from 'src/app/classes/joke';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  public jokes:Joke[];

  constructor() { 

    this.jokes = [
      new Joke("tu connais la dif entre les politiciens et les autres?", "c que les autres sont forcement meilleure"),
      new Joke("tu connais la dif entre les politiciens et les autres?", "c que les autres sont forcement meilleure"),
      new Joke("tu connais la dif entre les politiciens et les autres?", "c que les autres sont forcement meilleure"),
    ]

  }

  ngOnInit(): void {
  }


  public addJoke(joke: Joke):void{

    this.jokes.unshift(joke);

  }



}
