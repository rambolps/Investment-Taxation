import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tfsa',
  templateUrl: './tfsa.component.html',
  styleUrls: ['./tfsa.component.scss']
})
export class TfsaComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Tax-Free Savings Account (TFSA)")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
