import { Component, Input } from '@angular/core';
import { Message } from 'src/types/Message.type';

@Component({
  selector: 'location-message',
  templateUrl: './location-message.component.html',
  styleUrls: ['./location-message.component.sass']
})
export class LocationMessageComponent {
  @Input() message!: Message;
}
