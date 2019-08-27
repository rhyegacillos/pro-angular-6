import { Component } from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe(m => this.lastMessage = m);
  }

}
