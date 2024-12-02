import { Component, Input, SimpleChanges } from '@angular/core';
import { ConversationsService } from '../conversations.service';
import { Message } from 'src/types/Message.type';

@Component({
  selector: 'conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.sass']
})
export class ConversationPanelComponent {
  @Input() conversationId!: string;
  
  messages: Message[] = [];
  skip = 0;

  constructor (
    private conversations: ConversationsService
  ) {}

  async ngOnInit () {
    
  }

  async ngOnChanges (changes: SimpleChanges) {
    if (changes['conversationId']) {
      this.messages = [];
      this.skip = 0;
      await this.loadMore();
    }
  }

  async loadMore () {
    const conversations = await this.conversations.getConversationMessages(
      this.conversationId,
      10,
      this.skip
    );

    this.skip += 10;
    this.messages.push(...conversations);

    console.log(this.messages);

    if (conversations.length > 0) {
      let conversationId = this.conversationId;
      setTimeout(() => {
        if (conversationId !== this.conversationId) return;

        this.loadMore()
      }, 1000);
    }
  }
}
