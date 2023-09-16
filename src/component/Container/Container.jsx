import React, {useEffect, useState} from 'react'

//styles
import styles from './styles.module.css'
    
// component 
import Header from '../Header/Header'
import Game from '../Game/Game'
import { useGameContext } from '../../context/GameContext'
import Result from '../Result/Result'
import InfoModal from '../InfoModal/InfoModal'

// main container
const Container = () => {
  
  const {selectedMove, setIsGameVisible, isGameVisible} = useGameContext()

  const [showInfoModal, setShowInfoModal] = useState(false)

  const openInfoModal = () => {
    setShowInfoModal(true)
  }

  const closeInfoModal = () => {
    setShowInfoModal(false)
  }

  useEffect(() => {
    selectedMove && setIsGameVisible(false)   
  }, [selectedMove, setIsGameVisible])
  
  return (
    <div className={`${styles.container} ${showInfoModal ? styles.darkMode : null}`}>
        <Header/>
        {isGameVisible && <Game/>} 
        {!isGameVisible && <Result/>}
        {showInfoModal && (
          <InfoModal
            title="RULES"
            onClose={closeInfoModal}
          />
        )}
        {isGameVisible && <button onClick={openInfoModal} className={styles.button}>Rules</button>}
        {isGameVisible && <footer className={styles.footer}>This website created by <a target="_blank" href="https://www.linkedin.com/in/osman-topuz-988104218/">Osman Topuz</a> | Frontend Mentor Challange</footer>}
    </div>
  )
}

export default Container
