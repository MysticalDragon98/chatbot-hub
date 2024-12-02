import { ConversationState } from "src/enum/ConversationState.enum";
import { Message } from "./Message.type"

export type ChatPreview = {
    // avatar: string,
    state: ConversationState,
    icon: string,
    name: string,
    lastMessage: Message;
}