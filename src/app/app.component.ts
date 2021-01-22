import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
 
  title = 'Investment-Taxation';

  message!: string;
  subscription!: Subscription;

  constructor(private data: DataService, private sidebarService: NbSidebarService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
