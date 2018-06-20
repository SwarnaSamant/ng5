import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Smile in the mirror','Do that every morning and you ll start to see a big difference in your life']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGola(goal) {
    this.goals.next(goal);
  }

}
