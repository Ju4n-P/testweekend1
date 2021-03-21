import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/classes/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {

  @Output() JokeCreated: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit(): void {
  }


  public createJoke(setup:string, punchline:string){

    this.JokeCreated.emit(new Joke(setup, punchline))
    console.log("this.JokeCreated.emit",this.JokeCreated.emit);
    
  }

}
