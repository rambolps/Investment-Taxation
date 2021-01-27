import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Your Tuition, Education, and Textbook Amounts")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
