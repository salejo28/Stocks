import React from 'react'

// Components
import Nav from '../../components/Nav/Nav'
import Loader from '../../components/Loader/Loader'

// Styles
import styles from './Profile.module.css'

// Api
import UserApi from '../../api/User'

export default class Profile extends React.Component {

    state = {
        user: {},
        loading: true,
        edit: null
    }

    componentDidMount() {
        this.getUser()
    }

    async getUser() {
        let { loading, user } = this.state
        const token = localStorage.getItem('token')
        const res = await new UserApi().getUser(token)

        const { success } = res.data
        if (success) {
            user = res.data.user
            loading = false
            this.setState({
                loading,
                user
            })
        }
    }

    changeToInput() {
        let { edit } = this.state
        edit = true
        this.setState({
            edit
        })
    }

    render() {
        const { loading, user, edit } = this.state

        return (
            <div className={styles.container}>
                <div>
                    <Nav />
                </div>
                {
                    loading ?
                        <div className={styles.loading_content}>
                            <Loader />
                        </div> :
                        <div className={styles.content_profile}>
                            <section>
                                <div>
                                    <label htmlFor="">Username</label>
                                    {
                                        edit ?
                                            <input type="text" name="username" defaultValue={user.username} />
                                            : <span> {user.username} </span>
                                    }
                                    <i className="fas fa-edit" onClick={this.changeToInput.bind(this)}></i>
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    {
                                        edit ?
                                            <input type="email" name="username" defaultValue={user.email} />
                                            : <span> {user.email} </span>
                                    }
                                    <i className="fas fa-edit" onClick={this.changeToInput.bind(this)}></i>
                                </div>
                                <div>
                                    <button>
                                        Cambiar la Contraseña
                                </button>
                                </div>
                                <button>
                                    Guardar
                            </button>
                            </section>
                            <section>   </section>
                        </div>
                }
            </div>
        )
    }

}