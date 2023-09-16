import { createContext, useContext, useState } from "react";

const GameContext = createContext()
const GameProvider = ({children}) => {

    const [selectedMove, setSelectedMove] = useState(null)
    const [isGameVisible, setIsGameVisible] = useState(true)
    const [score, setScore] = useState(0)
    const [iconToggleMode, setIconToggleMode] = useState(false)


    const gameContextData = {selectedMove, setSelectedMove, isGameVisible, setIsGameVisible, score, setScore, iconToggleMode, setIconToggleMode}

    return <GameContext.Provider value={gameContextData}>{children}</GameContext.Provider>
}   
const useGameContext = () => useContext(GameContext)

export {GameProvider, useGameContext}