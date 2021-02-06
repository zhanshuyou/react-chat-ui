import { FC } from 'react'

import styles from './MessageLayout.module.css'

type Props = {
  renderCreator?: () => JSX.Element
  renderDate: () => JSX.Element
  renderBubble: () => JSX.Element
}

export const MessageLayout: FC<Props> = (props) => {
  return (
    <div className={ styles.layout }>
      { props.renderCreator?.() }
      <div>
        { props.renderDate() }
        { props.renderBubble() }
      </div>
    </div>
  )
}
