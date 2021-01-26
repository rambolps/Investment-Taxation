import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bpa',
  templateUrl: './bpa.component.html',
  styleUrls: ['./bpa.component.scss']
})
export class BpaComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Basic Personal Amount")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
