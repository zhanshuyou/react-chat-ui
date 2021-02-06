import type { FC } from 'react'

import styles from './Bubble.module.css'

type Props = {}

export const Bubble: FC<Props> = (porps) => {
  return (
    <div className={styles.container}>
      <div className={ styles.bubble }>
        {porps.children}
      </div>
    </div>
  )
}
