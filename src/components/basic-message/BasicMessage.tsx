import { FC } from 'react'
import type { MessageSchema } from '../../types'
import { Bubble } from '../bubble'
import { Time } from '../time'
import { MessageLayout } from '../message-layout'

import styles from './BasicMessage.module.css'

type Props = {
  message: MessageSchema
}

export const BasicMessage: FC<Props> = (props) => {
  const handleClick = (url: string) => () => {
    if (!url) {
      console.error(`url can't be undefined`)
      return
    }
    window.open(url)
  }

  function renderAttachments() {
    return (props.message.attachments ?? []).map((attachment) => {
      return (
        <div key={ attachment.id } className={ styles.container }>
          <div className={ styles.avatar } style={{ backgroundImage: `url(${attachment.previewUrl})` }} />
          <div>{ attachment.name }</div>
        </div>
      )
    })
  }

  function renderLinks() {
    return (props?.message?.links ?? []).map((link) => {
      return (
        <div key={ link.id } className={ styles.link } onClick={ handleClick(link.url) }>
          { link.name }
        </div>
      )
    })
  }

  function renderDate() {
    return <Time value={ props.message.createdDate } />
  }

  function renderBubble() {
    return (
      <Bubble>
        { props.message.content }
        { renderAttachments() }
        { renderLinks() }
      </Bubble>
    )
  }

  return (
    <MessageLayout renderBubble={ renderBubble } renderDate={ renderDate } />
  )

}