import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rrsp',
  templateUrl: './rrsp.component.html',
  styleUrls: ['./rrsp.component.scss']
})
export class RrspComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Registered Retirement Savings Plan (RRSP)")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
