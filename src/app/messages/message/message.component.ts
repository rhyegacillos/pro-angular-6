import { Component } from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';
import {NavigationCancel, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService, router: Router) {
    messageService.messages.subscribe(m => this.lastMessage = m);
    router.events
      .pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
      .subscribe(e => {this.lastMessage = null;});
  }
}
