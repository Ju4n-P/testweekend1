import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer, merge as mergeStatic } from 'rxjs';
import { from, interval, Observable, Observer, of } from 'rxjs';
import { take, map, filter, } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  public status:string = "";
  public tab:number[] = [];
   
  public subscription: Subscription;


  constructor() { }

  ngOnInit(): void {

    const array = [1,2,3,4]

    // const observable:Observable<number> = interval(1000);
    // const observable:Observable<number> = timer(3000, 1000);

    // const observable: Observable<number> = of(1,2,3);
    
    // const observable2: Observable<number> = from(array);

    // const observer: Observer<number> = {
    //   next:(value) => {
    //     this.tab.push(value); 
    //   },
    //   error:(error) => {
    //     this.status  = error; 
    //   },
    //   complete:() => {
    //     this.status = "finished"; 
    //   }
    // }

    // observable.subscribe(observer);


    const observable : Observable<number> = timer(3000,1000).pipe(
      take(100),
      map(el => el + 3),
      filter(el => el % 2 === 0)
      );
    this.subscription = observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'finished';
      }
    )
    
    const observable1 : Observable<number> = of(1,2,3);
    const observable2 : Observable<number> = of(4,5,6);

    const merged = mergeStatic(observable1, observable2);
    merged.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'finished de lobservable 2'
      }
    )


  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
