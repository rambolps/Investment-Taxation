import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Child Care Expenses")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
