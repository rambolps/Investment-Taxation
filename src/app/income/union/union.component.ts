import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.scss']
})
export class UnionComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Annual Union, Professional, or Like Dues")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
