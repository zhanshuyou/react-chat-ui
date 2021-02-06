import { BasicMessage } from '../basic-message'
import { SystemMessage } from '../system-message'
import { ImageMessage } from '../image-message'
import { UnsupportMessage } from '../unsupport-message'

import { MessageType } from '../../types'
import type { MessageSchema } from '../../types'

export function getMessageRenderer(messageType: MessageType) {
  return {
    [MessageType.Basic]: renderBasicMessage,
    [MessageType.Image]: renderImageMessage,
    [MessageType.System]: renderSystemMessage,
  }[messageType] ?? renderUnsupportMessage
}

function renderBasicMessage(message: MessageSchema) {
  return <BasicMessage message={ message } />
}

function renderSystemMessage(message: MessageSchema) {
  return <SystemMessage message={ message } />
}

function renderImageMessage(message: MessageSchema) {
  return <ImageMessage message={ message } />
}

function renderUnsupportMessage(message: MessageSchema) {
  return <UnsupportMessage message={ message } />
}
