import React, { useState } from 'react'
import styles from './styles.module.css'

import close from '../../assets/images/icon-close.svg'
import rules from '../../assets/images/image-rules.svg'
function InfoModal({ title, onClose }) {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true)

  const closeModal = () => {
    setIsVisibleMessage(false)
    onClose()
  }

  console.log(window.innerWidth - 200)
  return (
    isVisibleMessage && (   
      <div className={styles.page}>
        <div className={styles.infoModal}>
            <div className={styles.infoModalContent}>
                <h2 className={styles.infoModalTitle}>{title}</h2>
                <button className={styles.infoModalButton} onClick={closeModal}>
                    <img src={close} alt={title} />
                </button>
            </div>
        <img className={styles.rulesImg} src={rules} alt="rules"/>
        </div>
      </div>
    )
  )
}

export default InfoModal;
