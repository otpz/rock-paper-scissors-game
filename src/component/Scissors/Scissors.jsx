import React from 'react'

//styles
import styles from './styles.module.css'

//scissors-img
import scissorsimg from '../../assets/images/icon-scissors.svg'
import { useGameContext } from '../../context/GameContext'

export default function Scissors({className}){

  const {setSelectedMove, isGameVisible} = useGameContext()

  const onClickedScissors = () => {
    setSelectedMove("scissors")
  }

  return (
    <button onClick={isGameVisible === true ? onClickedScissors : null} className={`${styles.container} ${className}`}>
        <img src={scissorsimg} alt="rock" />
    </button>
  )
}