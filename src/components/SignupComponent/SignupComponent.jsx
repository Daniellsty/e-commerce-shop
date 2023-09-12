import React, { useEffect, useState } from 'react'
import Input from './Input';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, getAuthData } from '../../redux/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
import AuthMessage from '../AuthMessage/AuthMessage';
const SignupComponent = () => {
    const dispatch = useDispatch()
    const [formValue,setFormValue] = useState(null)
    const user = useSelector(getAuthData)
    const navigate =  useNavigate()
   
   
  
   
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object({
        name:yup.string().required('name is required !'),
        phonenumber:
        yup.string().required("phone required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(11, "too short ")
        .max(11, "too long"),
        email:yup.string().email('invalid format').required('email is required !').min(8,'must at least contain 8 charackter'),
        password:yup.string().required('Password is required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
            'Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
          ),
        passConfirm:yup.string().required('password confirm required').oneOf([yup.ref('password'), null], 'Passwords must match'),

    
    })

let initialValues = {
name:'',  
phonenumber:'',
email:'', 
password:'',
passConfirm:''

}



const onSubmit=(values)=>{

        
    dispatch(addAuth(values))
    
    if(!user.name){
        setTimeout(() => {
        
        navigate(`/`)
            
            
        }, 2000);

    }
  
    

    
    

}










const formik = useFormik({
    initialValues: formValue || initialValues ,
    
    onSubmit ,
    validationSchema,
    validateOnMount:true,
    enableReinitialize:true
})







return ( 
    <div>

        {
            user.name &&
            <AuthMessage/>
        }

       <form onSubmit={formik.handleSubmit} className="Form">

   
         <Input formik={formik} label="name" name="name" placeholder='please fill the name...' />
         <Input formik={formik} label="phoneNumber" name="phonenumber" placeholder='please fill the phonenumber' />
         <Input formik={formik} label="Email" name="email" placeholder='please fill the email' />
         <Input formik={formik} label="password" name="password" placeholder='please fill the password' />
         <Input formik={formik} label="passConfirm" name="passConfirm" placeholder='please fill the passwordConfirm' />
        
          <button type='submit' disabled={!formik.isValid}  >Submit</button>
       </form>
    </div>
 );
}

export default SignupComponent