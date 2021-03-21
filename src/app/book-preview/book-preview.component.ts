import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Book } from '../classes/book';


@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;
  @Output() rate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 



  }

  public likeIt(value:number){
    this.rate.emit(value);
    console.log(this.rate);
    
  }



  ngOnInit(): void {

    console.log('book', this.book);


  }

}
