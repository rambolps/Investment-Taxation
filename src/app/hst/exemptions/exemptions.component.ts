import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.scss']
})
export class ExemptionsComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("HST Exemptions")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
