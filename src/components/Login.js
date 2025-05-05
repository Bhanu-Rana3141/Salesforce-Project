import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home')
    }

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.leftPart}>
                    <img className={styles.logo} src='images\logo.png'></img>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.loginLine}><span>Log In </span>To Get Started</div>

                    <div className={styles.inputField}>
                        <input className={styles.emailInput} type='email' placeholder='Enter Your Email' required></input>
                        <input type='password' placeholder='Enter Your Password' required></input>
                    </div>

                    <div className={styles.submitBtnAndPassword}>
                        <button className={styles.submitParentBtn}>
                            <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
                        </button>
                        <div className={styles.forgotPassword}><Link>Forgot Password</Link></div>
                    </div>

                    <div className={styles.registerPara}>Don't Have An Account ? <Link>Register</Link></div>
                </div>
            </div>
        </>
    )
}