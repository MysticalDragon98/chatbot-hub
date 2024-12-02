import { WhatsappMessageType } from "../enum/WhatsappMessageType.enum"

export type WhatsappMessageInteractivePayload = {
    from: string,
    id: string,
    timestamp: string,
    type: WhatsappMessageType.Interactive,
    interactive: {
        type: string,
        button_reply: any
    },
    context: {
        from: string,
        id: string
    }
}