import React from 'react'

//styles
import styles from './styles.module.css'

//rock-img
import rockimg from '../../assets/images/icon-rock.svg'
import { useGameContext } from '../../context/GameContext'

export default function Rock({className}){

  const {setSelectedMove, isGameVisible} = useGameContext()

  const onClickedRock = () => {
    setSelectedMove("rock")
  }

  return (
    <button onClick={isGameVisible === true ? onClickedRock : null} className={`${styles.container} ${className}`}>
        <img src={rockimg} alt="rock" />
    </button>
  )
}