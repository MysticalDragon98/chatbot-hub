import { Message } from "src/types/Message.type";

export default function normalizeMessage (message: Message) {
    return {
        ...message,
        createdAt: new Date(message.createdAt),
        receivedAt: message.receivedAt ? new Date(message.receivedAt) : undefined,
        sentAt: message.sentAt ? new Date(message.sentAt) : undefined,
        deliveredAt: message.deliveredAt ? new Date(message.deliveredAt) : undefined,
        failedAt: message.failedAt ? new Date(message.failedAt) : undefined
    }
}