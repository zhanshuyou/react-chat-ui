import { useEffect, useState } from 'react'
import type { MessageRenderSchema } from '../types'
import { getMessages } from '../mock'
import { getMessageRenderer } from '../components/message-renderer'

export const useMessages = () => {
  const [messages, setMessages] = useState<MessageRenderSchema[]>([])

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getMessages()
        const messages = (res ?? []).map((item) => {
          return {
            rawData: item,
            render: getMessageRenderer(item.messageType)
          }
        })
        setMessages(messages)
      } catch(err) {
        console.error(err)
      }
    }
    init()
  }, [])

  return messages
}