import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.css'

import UserApi from '../../api/User'

const Nav = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem('token')
            const res = await new UserApi().getUser(token)
            setUser(res.data.user)
        }

        getUser()
    }, [])

    return (
        <nav className={styles.nav}>
            <div className={styles.user_info}>
                {/* Info user */}
                <img src={user.imgURI} alt="" />
                <p>{user.username}</p>
                <span>{user.email}</span>
            </div>
            <div className={styles.nav_links}>
                {/* Links */}
                <ul>
                    <li>
                        <Link to="/dashboard" className={styles.link}>
                            <i className="fas fa-home"></i>
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/charts" className={styles.link}>
                            <i className="fas fa-chart-bar"></i>
                            <span>Graficas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/stocks" className={styles.link}>
                            <i className="fas fa-business-time"></i>
                            <span>Tus Acciones</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile" className={styles.link}>
                            <i className="fas fa-user"></i>
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className={styles.link}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Salir</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav