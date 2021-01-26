import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-resp',
  templateUrl: './resp.component.html',
  styleUrls: ['./resp.component.scss']
})
export class RespComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Registered Education Savings Plans (RESP)")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
