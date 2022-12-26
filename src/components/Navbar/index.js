import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useModal } from "../../Context/ModalContext";
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

function NavBar() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = useAuth()
    const modal = useModal()

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
        auth.setError('')
    } 

    const hanldeOnChangePassword = (e) => {
        setPassword(e.target.value)
        auth.setError('')
    } 

    const handleSignIn = () => {
        auth.signIn(email,password)
    }

    const handleSignUp = () => {
        auth.signUp(email,password)
    }

    const handleShareVideo = () => {
        modal.toggleModal()
    }

    const handleLogOut = () => {
        auth.signout()
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left-section')}>
                    <FontAwesomeIcon className={cx('home-icon')} icon={faHome}/>
                    <span className={cx('title')}>Funny movie </span>
                </div>
                {!auth.currentUser? (
                    <div className={cx('right-section')}>
                        <div className={cx('login-actions')}>
                            <input className={cx('input','action')} type="email" placeholder="email" onChange={(e) => handleOnChangeEmail(e)}/>
                            <input className={cx('input','action')} type="password" placeholder="password" onChange={(e) => hanldeOnChangePassword(e)}/>
                            <button className={cx('button','action','login-register-btn')} onClick={handleSignIn}> login </button>
                            <button className={cx('button','action','login-register-btn')} onClick={handleSignUp}> register </button>
                        </div>
                    <p className={cx('error-message')}> {auth.error && `*${auth.error}`} </p>
                    </div>
                ) : (
                    <div className={cx('user-section')}>
                        <button className={cx('button', 'share-btn')} onClick={handleShareVideo}> Share video </button>
                        <button className={cx('button', 'logout-btn')} onClick={handleLogOut}> Log out </button>
                    </div>
                    
                    )}
                
            </div>
        </div>
    );
}
export default NavBar;