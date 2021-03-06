import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api'

function Landing() {
    const [connections, setConnections] = useState(0)

    useEffect(() => {
        api.get('/connections').then(response => {
            const {totalConnections} = response.data

            setConnections(totalConnections)
        })
    }, [])

    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={logoimg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landing} alt="plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="ensinar"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {connections} conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing