import { FC } from 'react'

import styles from './Time.module.css'

type Props = {
  value: string
}

export const Time: FC<Props> = ({ value }) => {
  return (
    <div className={ styles.time }>{ value }</div>
  )
}
