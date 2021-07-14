import React from "react"
import { useForm } from "react-hook-form"
import './App.css'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().required().email(),
//   username: yup.string().required(),
//   password: yup.string().required().min(5),
//   cpassword: yup.string().required().min(5)
// });

const App=()=>{
    const {register, handleSubmit, formState: { errors }} = useForm(
        // {
        //     resolver: yupResolver(schema)
        // }
    );
    const onSubmit=(data)=>console.log(data)

    return(
        <>
        <div className="RegistrationBackgrouund">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="registrationMainSec">
                    <div className="registrationName">
                        <label htmlFor="name">Name</label><br></br>
                        <input type="text" id="name" name="name" placeholder="Claude Powell" {...register('Name', { required: true })} />
                        {errors.Name && <p >You must enter your name</p>}
                    </div>
                    <div className="registrationEmail">
                        <label htmlFor="email">Email</label><br></br>
                        <input type="email" id="email" name="email" placeholder="claude@example.com" {...register('Email', { required: true })} />
                        {errors.Email && <p>You must enter your email</p>}
                        
                        
                    </div>
                    <div className="registrationUserName">
                        <label htmlFor="username">User Name</label><br></br>
                        <input type="text" id="username" name="username" placeholder="claude" {...register('UserName', { required: true })} />
                        {errors.UserName && <p>You must enter your username</p>}

                    </div>
                    <div className="registrationPassword">
                        <label htmlFor="password">Password</label><br></br>
                        <input type="password" id="password" name="password" placeholder="Create Password" {...register('Password', { required: true, min: 5 })} />
                        {errors.Password && <p>Enter your password</p>}

                    </div>
                    <div className="registrationConfirmPassword">
                        <label htmlFor="cpassword">Password</label><br></br>
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" {...register('cPassword', { required: true, min: 5 })}  />
                        {errors.cPassword && <p>Please confirm your password</p>}

                    </div>
                    <div className="registrationGetStarted">
                        <br></br>
                        <input type="submit" value="Get Started" />
                    </div>
                </div>

            </form>
        </div>
        </>
    )
  
}

export default App