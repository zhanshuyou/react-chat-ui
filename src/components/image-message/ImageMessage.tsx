import { FC } from 'react'
import { MessageSchema } from '../../types'
import { Bubble } from '../bubble'
import { Time } from '../time'
import { MessageLayout } from '../message-layout'

import styles from './ImageMessage.module.css'

type Props = {
  message: MessageSchema
}

export const ImageMessage: FC<Props> = (props) => {
  function renderImages() {
    return (props.message.attachments ?? []).map((attachment) => {
      return (
        <div key={attachment.id}>
          <img
            src={ attachment.previewUrl }
            className={ styles.image }
            alt=''
          />
        </div>
      )
    })
  }

  function renderBubble() {
    return (
      <Bubble>
        { renderImages() }
      </Bubble>
    )
  }

  function renderDate() {
    return <Time value={ props.message.createdDate } />
  }
  
  return (
    <MessageLayout
      renderDate={ renderDate }
      renderBubble={ renderBubble }
    />
  )
}
