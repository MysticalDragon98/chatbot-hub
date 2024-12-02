import { Conversation } from "src/types/Conversation.type";

export default function normalizeConversation (conversation: Conversation) {
    return {
        ...conversation,
        lastMessageReceivedAt: new Date(conversation.lastMessageReceivedAt),
        lastMessageSentAt: new Date(conversation.lastMessageSentAt),
        lastConversationMessage: new Date(conversation.lastConversationMessage)
    }
}