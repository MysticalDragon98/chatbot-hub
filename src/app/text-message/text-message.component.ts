import { Component, Input } from '@angular/core';
import { Message } from 'src/types/Message.type';

@Component({
  selector: 'text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.sass']
})
export class TextMessageComponent {
  @Input() message!: Message;
  
  constructor () {}
}
