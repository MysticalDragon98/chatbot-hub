import { Component, Input } from '@angular/core';
import { Message } from 'src/types/Message.type';

@Component({
  selector: 'interactive-message',
  templateUrl: './interactive-message.component.html',
  styleUrls: ['./interactive-message.component.sass']
})
export class InteractiveMessageComponent {
  @Input() message!: Message; 
}
