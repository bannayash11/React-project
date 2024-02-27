import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

export default function Signup() {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    

  return (

<main className="container__main-page main__content">
    <div className="spacer__container">
        <h1 className="pageHeading__h1">SignUp Account</h1>
        <div className="form__container">
            <div className="container__content-form">
                <div className="flex__style col__style login-form__style">
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    <form action="#" className="form__base" onSubmit={handleSubmit(login)}>
                        <legend className="screenRead__style">Log in</legend>
                      
                        <div className="form__group1">
                        <div className="form__group2 form__group3">
                                <label for="user_login" className="Label__formGroup">Enter your full name</label>
                                <Input id="user_login" className="input__formGroup" placeholder="Enter your full name"  {...register("name", {required: true, })} />
                            </div>
                            <div className="form__group2 form__group3">
                                <label for="user_login" className="Label__formGroup">Email</label>
                                <Input id="user_login" className="input__formGroup" placeholder="Enter your email" type="email" {...register("email", { required: true,
                                    validate: {
                                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                                }
                                })} />
                            </div>
                            <div className="form__group2 form__group3">
                                <label for="login__user_password" className="Label__formGroup">Password</label>
                                <Input className="input__formGroup" id="login__user_password" type="password" placeholder="Enter your password" {...register("password", { required: true,})} />
                            </div>
                        <div className="padBottom__IfNotEmpty"></div>
                        <Button type="submit"   className="basic__button btn__lg btn__royalblue btn__xlarge btn__submit" >Sign Up</Button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
        <Link to="/login" className="outLink__register"> Sign In</Link>
    </div>
</main>  
    )
}
