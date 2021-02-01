import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.css'

const Nav = () => {

    return(
        <nav className={styles.nav}>
            <div className={styles.user_info}>
                {/* Info user */}
                <img src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" alt=""/>
                <p>Username</p>
                <span>email@email.com</span>
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