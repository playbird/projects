import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
     initialValues: {
       emailField: '',
       pswField: ''
     },
     onSubmit: values =>{
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      let inputAddress = values.emailField;
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputAddress)) {
        let emailError = 'Username should be an email';
        errors.emailError = <div> {emailError} </div>;
      }
      if(!values.pswField) {
        let pswError = 'Required';
        errors.pswError = <div> {pswError} </div>;
      }
      if(!errors.emailError && !errors.pswError) {
        let success = 'Login successful';
        errors.submitBtn = <div> {success} </div>;
      }
      return errors;
    }
   });
  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div> : null}        
        <div>Password:</div>
        <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/><br/>
        {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div> : null}                
        <button type="submit" id="submitBtn">Submit</button>
        <div> {formik.errors.submitBtn ? <p style={{color:'green'}}>{formik.errors.submitBtn}</p> : null} </div> 
      </form>
      
    </div>
  );
}

export default App;
