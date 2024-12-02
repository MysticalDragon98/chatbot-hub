import { Component } from '@angular/core';
import { ChatPreview } from 'src/types/ChatPreview.type';
import { ConversationsService } from '../conversations.service';
import formatMessagePreview from 'src/modules/utils/formatMessagePreview';
import formatPhoneNumberToReadable from 'src/modules/utils/formatPhoneNumberToReadable';
import getStringChecksumEmoji from 'src/modules/utils/getStringChecksumEmoji';
import { StateService } from '../state.service';

@Component({
  selector: 'sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.sass']
})
export class SidebarContentComponent {
  public chats: ChatPreview[] = [
    // {
    //   avatar: "/assets/img/avatar.jpg",
    //   name: "John Doe",
    //   lastMessage: "Hello, how are you?"
    // },
    // {
    //   avatar: "/assets/img/avatar.jpg",
    //   name: "John Ditch",
    //   lastMessage: "Hi man!"
    // }
  ];

  constructor (
    private conversations: ConversationsService,
    private state: StateService
  ) {}
  

  async ngOnInit () {
    const conversations = await this.conversations.getRecentConversations();
    
    this.chats = conversations
    .filter((conversation) => conversation.lastMessage)
    .map((conversation) => {
      return {
        icon: getStringChecksumEmoji(conversation.accountId),
        name: formatPhoneNumberToReadable(conversation.accountId),
        lastMessage: conversation.lastMessage!,
        state: conversation.state
      }
    });

    if (this.chats.length > 0) {
      this.onChatPreviewClick(this.chats[0]);
    }
  }

  async onChatPreviewClick (chatPreview: ChatPreview) {
    this.state.currentConversation.next(chatPreview.lastMessage.conversationId); 
  }
}
