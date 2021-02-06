import { FC } from 'react'
import { MessageSchema } from '../../types'
import { Time } from '../time'

import styles from './SystemMessage.module.css'

type Props = {
  message: MessageSchema
}

export const SystemMessage: FC<Props> = (props) => {
  return (
    <div className={ styles.container }>
      <Time value={ props.message.createdDate } />
      <div className={ styles.inner }>
        {props.message.content}
      </div>
    </div>
  )
}
