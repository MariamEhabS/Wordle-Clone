import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) //each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string 
    const [isCorrect, setIsCorrect] = useState(false)


    // we need to create a function that will format a guess into an array of letter objects
    //e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {

    }

    // need to create another function that takes user guesses and adds it to a history of guesses stored in guesses state
    //check if guesses are correct and store that in state 
    // add on to turn number every guess 
    const addNewGuess = () => {

    }

    //another function to handle keyup event and to also track currnt guess 
    //and detect if enter button is pressed to submit guess 
    const handleKeyup = ({ key }) => {
        console.log(key)

        if(key === 'Enter'){
            // only add guess if turn is less than 5 
            
            // dont allow duplicate words
            //the word must be 5 chars long 
        }
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0,-1)
            })
            return 
        }
        if (/^[A-za-z]$/.test(key)) {
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle