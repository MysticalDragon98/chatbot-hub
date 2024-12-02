import { Component, Input } from '@angular/core';
import { Message } from 'src/types/Message.type';

@Component({
  selector: 'message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.sass']
})
export class MessageBubbleComponent {
  @Input() message!: Message;
}
