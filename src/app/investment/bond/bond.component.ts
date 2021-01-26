import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.scss']
})
export class BondComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Bond Taxes")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
