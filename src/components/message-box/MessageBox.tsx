import type { FC } from 'react'
import type { MessageRenderSchema } from '../../types'

import styles from './MessageBox.module.css'

type Props = {
  messages: MessageRenderSchema[]
}

export const MessageBox: FC<Props> = (props) => {
  function renderMessages() {
    return (props.messages ?? []).map((message) => {
      return message.render(message.rawData)
    })
  }
  return (
    <div className={ styles['message-box'] }>
      { renderMessages() }
    </div>
  )
}