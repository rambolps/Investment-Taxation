import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ways',
  templateUrl: './ways.component.html',
  styleUrls: ['./ways.component.scss']
})
export class WaysComponent implements OnInit, OnDestroy {
 
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Ways To File")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
