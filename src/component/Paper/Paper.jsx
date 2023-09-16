import React from 'react'

//styles
import styles from './styles.module.css'

//paper-img
import paperimg from '../../assets/images/icon-paper.svg'

//context
import { useGameContext } from '../../context/GameContext'

export default function Paper({className}){

  const {setSelectedMove, isGameVisible} = useGameContext()

  const onClickedPaper = () => {
    setSelectedMove("paper")
  }

  return (
    <button onClick={isGameVisible === true ? onClickedPaper : null} className={`${styles.container} ${className}`}>
        <img src={paperimg} alt="paper" />
    </button>
  )
}
