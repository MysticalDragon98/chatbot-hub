import { Injectable } from '@angular/core';
import { MSChatbotHub } from 'src/services';
import { AuthService } from './auth.service';
import { Conversation } from 'src/types/Conversation.type';
import { Message } from 'src/types/Message.type';
import normalizeConversation from 'src/modules/utils/normalizeConversation';
import normalizeMessage from 'src/modules/utils/normalizeMessage';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor (
    private auth: AuthService
  ) { }

  async getRecentConversations (): Promise<(Conversation & { lastMessage?: Message })[]> {
    const conversations = await MSChatbotHub.conversations.getRecentConversations({
      token: await this.auth.token()
    });

    return conversations
      .map((conversation: Conversation & { lastMessage?: Message }) => ({
        ...normalizeConversation(conversation),
        lastMessage: conversation.lastMessage && normalizeMessage(conversation.lastMessage)
      }));
  }

  async getConversationMessages (conversationId: string, limit: number = 10, skip: number = 0): Promise<Message[]> {
    const messages = await MSChatbotHub.conversations.getConversationMessages({
      conversationId,
      limit,
      skip,
      token: await this.auth.token()
    });

    return messages.map(normalizeMessage);
  }
}
