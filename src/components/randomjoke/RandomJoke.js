import React, { useState, useEffect, useContext } from 'react'
import { Loader } from '../loader/Loader'
import './RandomJoke.css'


export const RandomJoke = () => {
    const [joke, setJoke] = useState('No jokes today')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      try
      {
        fetch('https://v2.jokeapi.dev/joke/Any')
        .then(res => res.json())
          .then((result) => {
            setIsLoaded(true)

            if(result !== null)
            {
              if(result.type === 'single')
              {
                setJoke(result.joke)
              }
              else if(result.type === 'twopart')
              {
                setJoke(`${result.setup} ${result.delivery}`)
              }
            }
          })
      } catch (error) {
        console.log(error)
      }
    }, [])

    const decorLeft = '{'
    const decorRight = '}'
    return (    
        <div className="randomjoke">
            {isLoaded ? (
            <>
              <h2><span>{decorLeft}</span>Joke of the day<span>{decorRight}</span></h2>
              <h4>{joke}</h4>
            </>
            ) : (<Loader />)}      
        </div>
    )
}
