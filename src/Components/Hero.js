import React from 'react'

export default function Hero({children ,hero}) {
    console.log("i am hero")
    console.log({children})
    
    return (
        <header className={hero}>
            {children}

        </header>
        
            
        
    )
   
}
Hero.defaultProps = {
    hero:'defaultHero'
}
