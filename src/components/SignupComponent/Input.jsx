import './Signup.css'
const Input = ({formik,name, type="text" ,label,placeholder}) => {


    return ( 
        <div>

             <div className="name-container">
              <label htmlFor="name">{label}</label>
              <input className='input' placeholder={placeholder}  {...formik.getFieldProps(name)} name={name}  type="text" />
              {formik.errors[name] &&  formik.touched[name] && <p className='error'>{formik.errors[name]}</p>  }
             </div>

        </div>
     );
}
 
export default Input;