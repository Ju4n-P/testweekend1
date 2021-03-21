import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {



  @Input() size:number | string;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();




  constructor() { }

  ngOnInit(): void {
  }


  public resize(delta:number){
    this.size = Math.min(40, Math.max(8, +this.size + delta))
    this.sizeChange.emit(this.size);
  }

  public dec(){
    this.resize(-1);
  }

  public inc(){
    this.resize(+1);
  }

}
