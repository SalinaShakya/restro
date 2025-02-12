"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import './sign.css';
const schema = object({
    email: string().required("please enter email").email("enter valid email")
});
const sch = object({
    name: string().required("please enter name").email("enter valid name")
});
const schem = object({
    password: string().required("please enter password").email("enter valid password")
});
const sche = object({
    confirmPassword: string().required("please reenter the password").email("the password entered is not same")
});

const Form = () => {
    const [showValue, setShowValue] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: sche,
        onSubmit: (value) => {
            console.log("submit");
            if (value.password === value.confirmPassword) {
                setShowValue(true);
            } else {
                alert("no");
                setShowValue(false);
            }
        },
        // onSubmit: (value) => {
        //     if (value.password === value.confirmPassword)
        //         setShowValue(true);
        // }
        // else{
        //     alert("no")
        //     setShowValue(false);
        // }
    })
    // validationSchema: schema,
    // onSubmit: (value) => {
    //     console.log("submit");
    //     if (value.password === value.confirmPassword) {
    //         setShowValue(true);
    //     } else {
    //         alert("no");
    //         setShowValue(false);
    //     }
    // },
    // // onSubmit: (value) => {
    // //     if (value.password === value.confirmPassword)
    // //         setShowValue(true);
    // })
    // const togglefunction
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [city, setCity] = useState("");
    //show value
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        //make show value true
        console.log(fullName, email, password, cpassword, city, "ffsc");
    };
    return (
        <div className="sign">
            <div >
                <h1> Sign up</h1>
                </div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    {/* <input type="text" name="name" id="name" className="border border-Blue-200" placeholder="cat" onChange={(event) => { setFullName(event.target.value) }}></input><br></br> */}
                    <input type="text" name="name" id="name" className="border border-Blue-200" value={formik.values.name} placeholder="cat" onChange={(formik.handleChange)}></input><br></br>
                    <label htmlFor="email">Email Address</label>
                    {/* <input type="text" name="email address" id="email" className="border border-green-250" onChange={(event) => { setEmail(event.target.value) }} ></input><br></br> */}
                    <input type="text" name="email" id="email" className="border border-green-250" value={formik.values.email} onChange={(formik.handleChange)} ></input><br></br>

                    <span></span>
                    <label htmlFor="pass">Password</label>
                    <input type="text" name="password" id="pass" className="border border-green-250" onChange={(event) => { setPassword(event.target.value) }}></input><br></br>
                    <label htmlFor="name">Confirm Password</label>
                    <input type="text" name="cpassword" id="cpassword" className="border border-Blue-200" onChange={(event) => { setCPassword(event.target.value) }}></input><br></br>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="border border-Blue-200" onChange={(event) => { setCity(event.target.value) }}></input><br></br>
                    <button type="submit" className="bg-blue-600 rounded-lg flex-auto" >submit</button>
                </div>
            </form >
        </div >
    )
}
export default Form;