import React from 'react'
import styles from './styles.module.css'

// assets
import photo from '../../assets/images/logo.svg'
import { useGameContext } from '../../context/GameContext'
export default function Header() {

  const {score} = useGameContext()

  return (
    <div className={styles.container}>
        <img className={styles.logoImg} src={photo} alt="rock-paper-scissors" />
        <div className={styles.scoreDiv}>
            <span className={styles.scoreTitle}>Score</span>
            <span className={styles.score}>{score}</span>
        </div>
    </div>
  )
}
