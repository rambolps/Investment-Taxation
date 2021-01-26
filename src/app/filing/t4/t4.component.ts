import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.scss']
})
export class T4Component implements OnInit, OnDestroy {

  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("T4 | T4E | T4A")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
