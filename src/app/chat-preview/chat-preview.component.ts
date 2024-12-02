import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatPreview } from 'src/types/ChatPreview.type';

@Component({
  selector: 'chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent {
  @Input() chatPreview!: ChatPreview;
  @Output() onClick = new EventEmitter<ChatPreview>();

  onClickHandler (chatPreview: ChatPreview) {
    this.onClick.emit(chatPreview);
  }
}
