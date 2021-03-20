import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {


  @Input('appMovement') color:string;


  constructor(private el:ElementRef) {  // el. est un argument
  }

  @HostListener('mouseenter') 
    onMouseEnter(){
    this.changeColor(this.color);
  }

  private changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color; 

  }

 @HostListener('mouseleave')
    onMouseLeave(){
    this.changeColor('white');
  }

//  @HostListener('click')
//   private onClick(){
//    this.elementSelected = !this.elementSelected;
//    if(this.elementSelected){
//      this.elementSelected.classList.add('toggle')
//    }else {
//      this.elementSelected.classList.remove('toggle')
//    }
//  }


}
