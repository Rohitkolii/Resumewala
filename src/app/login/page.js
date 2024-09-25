'use client'

import Styles from './login.module.css'
import Link from 'next/link'

const Login = () => {

    return(
        <>
        {/* <Navbar/> */}
        <div className={Styles.Logincontainer}>
            <div className={Styles.innercontainer}>
                <div className={Styles.innercontainer1}>
                    
                </div>

                <div className={Styles.innercontainer2}>
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <div>
                        <div className={`${Styles.column} ${Styles.loginput}`}>
                            <label htmlFor="">username</label>
                            <input onChange={(e)=> setemail(e.target.value)} type="text" placeholder='E-mail or Username' required/>
                            <label htmlFor="">password</label>
                            <input onChange={(e)=> setpassword(e.target.value)} type="password" placeholder='Enter You Password' required/>
                        </div>

                        <div className={Styles.forgetlink}>
                            <Link href='/'>Forgot Password!</Link>
                        </div>

                        <div className={Styles.loginbutt}>
                            <button onClick={()=> Loginfunction()} className={Styles.btn}>Login</button>
                        </div>
                    </div>

                    <div className={Styles.loginoutro}>
                        <p>Not a Member <span>SignUp</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;