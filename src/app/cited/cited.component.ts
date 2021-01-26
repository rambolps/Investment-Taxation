import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cited',
  templateUrl: './cited.component.html',
  styleUrls: ['./cited.component.scss']
})
export class CitedComponent implements OnInit, OnDestroy {

  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Works Cited")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
