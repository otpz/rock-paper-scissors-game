import React, { useEffect, useState } from 'react'

//components
import Rock from '../Rock/Rock'
import Scissors from '../Scissors/Scissors'
import Paper from '../Paper/Paper'

//context
import { useGameContext } from '../../context/GameContext'

//styles
import styles from './styles.module.css'

export default function Result() {
    const {selectedMove, setIsGameVisible, setScore, iconToggleMode} = useGameContext()

    const [selectedMoveComponent, setSelectedMoveComponent] = useState("")
    const [selectedRandomMoveComponent, setSelectedRandomMoveComponent] = useState("")
    const [win, setWin] = useState()
    const [countDown, setCountDown] = useState(3)

    useEffect(() => {
        console.log("Result component mounted")
        if (selectedMove === "rock"){
            setSelectedMoveComponent(<Rock className={styles.selected}/>)
        } else if (selectedMove === "paper"){
            setSelectedMoveComponent(<Paper className={styles.selected}/>)
        } else {
            setSelectedMoveComponent(<Scissors className={styles.selected}/>)
        }
    }, [selectedMove])

    useEffect(() => {
        const countDownInterval = setInterval(() => {
            setCountDown((prev) => prev - 1)
        }, 1000)
        if (countDown === 0){
            selectRandomMove()
            setCountDown(0)
            clearInterval(countDownInterval)
            
        }

        return () => {
            console.log("Result component unmounted!")
            clearInterval(countDownInterval)
        }

    }, [countDown])

    useEffect(() => {
        if (win === true){
            setScore((prev) => prev + 1)
        } else if (win === false) {
            setScore((prev) => prev - 1)
        } else {
            setScore((prev) => prev)
        }
    }, [win])

    const selectRandomMove = () => {
        let random = 0
        if (iconToggleMode){
            if (selectedMove === "rock"){
                random = 2
            } else if (selectedMove === "paper"){
                random = 0
            } else {
                random = 1
            }
        } else {
            random = Math.floor(Math.random() * 3);
        }

        if (random === 0){ // rock
            setSelectedRandomMoveComponent(<Rock className={styles.selected}/>)
        } else if (random === 1){ // paper
            setSelectedRandomMoveComponent(<Paper className={styles.selected}/>)
        } else { // scissors
            setSelectedRandomMoveComponent(<Scissors className={styles.selected}/>)
        }

        // random = 0 -> rock , random = 1 -> paper, random = 2 -> scissors
        if ((random === 0 && selectedMove === "scissors") ||
            (random === 1 && selectedMove === "rock") ||
            (random === 2 && selectedMove === "paper")) {
            setWin(false);
        } 
        else if ((selectedMove === "rock" && random === 2) ||
                (selectedMove === "paper" && random === 0) ||
                (selectedMove === "scissors" && random === 1)) {
                setWin(true);
        } else {
            setWin("");
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.house} ${win === true ? styles.winnerStyle : null}`}>
                {selectedMoveComponent}
            </div>
            {
                countDown === 0 ?
                <div className={styles.mid}>
                    <p className={styles.win}>{(win === true) ? "YOU WIN" : (win === false) ? "YOU LOSE" : "DRAW"}</p>
                    <button onClick={() => setIsGameVisible(true)}>Play Again</button>
                </div> :
                null
            }
            <div className={`${styles.house} ${win === false ? styles.winnerStyle : null}`}>
                {countDown !== 0 ? <p className={styles.countDown}>{countDown}</p> : selectedRandomMoveComponent}
            </div>
        </div>
    )
}
