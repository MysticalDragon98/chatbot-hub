import { ConversationState } from "src/enum/ConversationState.enum";
import { Message } from "./Message.type";
import { PhoneNumber } from "./PhoneNumber.type";

export type Conversation = {
    accountId: PhoneNumber;
    state: ConversationState;
    context: any;
    lastMessageReceivedAt: Date;
    lastMessageSentAt: Date;
    lastConversationMessage: Date;
}