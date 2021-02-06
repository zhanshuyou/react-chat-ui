import { FC } from 'react'
import { Bubble } from '../bubble'
import { Time } from '../time'
import { MessageLayout } from '../message-layout'
import { MessageSchema } from '../../types'

type Props = {
  message: MessageSchema
}

export const UnsupportMessage: FC<Props> = (props) => {
  function renderBubble() {
    return (
      <Bubble>
        暂不支持的消息类型
      </Bubble>
    )
  }

  function renderDate() {
    return <Time value={ props.message.createdDate } />
  }


  return (
    <MessageLayout renderBubble={ renderBubble } renderDate={ renderDate } />
  )
}
