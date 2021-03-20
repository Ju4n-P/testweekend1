import { Component, Input, OnInit, } from '@angular/core';
import { Book } from '../classes/book';


@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;

  constructor() { 



  }

  ngOnInit(): void {

    console.log('book', this.book);


  }

}
