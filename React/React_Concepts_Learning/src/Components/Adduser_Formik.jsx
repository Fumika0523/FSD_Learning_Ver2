import { useFormik } from "formik";
import React from 'react'

function Adduser_Formik(){
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    console.log(formik)
    //handleSubmit
    //handleChange
    //values > (firstName:"",lastName:"",email:"")
    return(
        <>
        <div>
            <h1>Adduser_Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" 
                onChange={formik.handleChange} value={formik.values.firstName}/> <br /> <br />
                
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" 
                onChange={formik.handleChange} value={formik.values.lastName}/> <br /> <br />

                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" 
                onChange={formik.handleChange} value={formik.values.email}/> <br /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>

        <hr />
        </>
    )
}
export default Adduser_Formik