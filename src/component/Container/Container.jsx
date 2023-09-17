import React, {useEffect, useState} from 'react'

//styles
import styles from './styles.module.css'
    
// component 
import Header from '../Header/Header'
import Game from '../Game/Game'
import { useGameContext } from '../../context/GameContext'
import Result from '../Result/Result'
import InfoModal from '../InfoModal/InfoModal'

//font awesome  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatCowboy, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

// main container
const Container = () => {
  
  const {selectedMove, setIsGameVisible, isGameVisible, iconToggleMode, setIconToggleMode} = useGameContext()
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
  
  const toggleIcons = () => {
    setIconToggleMode((prev) => !prev)
  }

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
        {isGameVisible && 
          <div className={styles.footerButtons}>
            <div className={styles.cheat}> 
              <p className={styles.cheatTitle}>Cheat Mode <FontAwesomeIcon icon={faHatCowboy} /> <span>{iconToggleMode === false ? " OFF " : " ON "}</span> </p>
              <button className={styles.cheatButton} onClick={toggleIcons}>
              {
                iconToggleMode === false ? <FontAwesomeIcon className={styles.buttonIcon} icon={faToggleOff} /> : <FontAwesomeIcon className={styles.buttonIcon} icon={faToggleOn} />
              }
              </button>
            </div>
            <button onClick={openInfoModal} className={styles.button}>Rules</button>
          </div>
          }
        {isGameVisible && <footer className={styles.footer}>This website created by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/osman-topuz-988104218/">Osman Topuz</a> | Frontend Mentor Challange</footer>}
    </div>
  )
}

export default Container
