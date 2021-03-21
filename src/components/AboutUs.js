import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Background } from '../styles/Div'

function AboutUs() {

    const history = useHistory()

    useEffect(() => {
        const redirectHome = history.push('/')
    }, [])
    return (
        <Background screenHeight>
            
        </Background>
            
    )
}

export default AboutUs
