import { MessageDirection } from "src/enum/MessageDirection.enum";
import { PhoneNumber } from "./PhoneNumber.type";
import { MessageWhappId } from "./MessageWhappId.type";
import { WhatsappMessageType } from "src/enum/WhatsappMessageType.enum";
import { WhatsappMessageImagePayload } from "./WhatsappMessageImagePayload.type";
import { MessageButton } from "./MessageButton.type";
import { MessageStatus } from "src/enum/MessageStatus.enum";
import { WhatsappMessageInteractivePayload } from "./WhatsappMessageInteractivePayload";
import { WhatsappMessageDocumentPayload } from "./WhatsappMessageDocumentPayload.type";
import { WhatsappMessageLocationPayload } from "./WhatsappMessageLocationPayload.type";
import { WhatsappMessageButtonPayload } from "./WhatsappMessageButtonPayload.type";
import { WhatsappMessageTextPayload } from "./WhatsappMessageTextPayload.type";

export type Message = {
    conversationId: PhoneNumber;   
    direction: MessageDirection;
    messageWhappId?: MessageWhappId;
    messageType?: WhatsappMessageType;
    image?: WhatsappMessageImagePayload['image'];
    interactive?: WhatsappMessageInteractivePayload['interactive'];
    document?: WhatsappMessageDocumentPayload['document'];
    location?: WhatsappMessageLocationPayload['location'];
    button?: WhatsappMessageButtonPayload['button'];
    text?: WhatsappMessageTextPayload['text'];
    status: MessageStatus;
    error?: string;
    buttons?: MessageButton[];
    createdAt: Date;
    receivedAt?: Date;
    sentAt?: Date;
    deliveredAt?: Date;
    failedAt?: Date;
}