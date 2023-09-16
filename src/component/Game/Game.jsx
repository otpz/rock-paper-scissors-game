import React, { useEffect } from 'react'

// components
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'
import Rock from '../Rock/Rock'

//style
import styles from './styles.module.css'
import { useGameContext } from '../../context/GameContext'

export default function Game() {

  const {setSelectedMove} = useGameContext()

  useEffect(() => {
    console.log("Game component mounted")
    setSelectedMove("")

    return () => {
      console.log("Game component unmounted!")
    }
    
  }, [])

  return (
    <div className={styles.container}>
        <Paper/>
        <Scissors/>
        <Rock/>
    </div>
  )
}
