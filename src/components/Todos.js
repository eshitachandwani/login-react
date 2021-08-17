import React from 'react';
import './login.css';
import useForm from './useForm'
import validate from './validateInfo'

export default function Todos({submitForm}) {

  const {handleChange, values, handleSubmit, errors}=useForm(submitForm, validate);


  return (
    <div class="main" style={{marginTop : "0px", paddingTop : "0px", height:"700px"}}>
      <div class="container">,
        <div class="row">
          <form onSubmit={handleSubmit}>
            <div id="login-box">
              <div class="left">
                <h2>Sign Up</h2>
                <input type="text" name="Fullname" placeholder="Full Name" value={values.Fullname} onChange={handleChange}/>{errors.Fullname && <p>{errors.Fullname}</p>}
                  <input type="email" name="email" placeholder="Email Id" value={values.email} onChange={handleChange}/>{errors.email && <p>{errors.email}</p>}
                    <input type="password" name="password" placeholder="Create Password" value={values.password} onChange={handleChange}/>{errors.password && <p>{errors.password}</p>}
                      <input type="text" name="institute" placeholder="Institute"/>{errors.institute && <p>{errors.institute}</p>}

           </div>
                      <div class="right">
                        <input type="text" name="username" placeholder="Username" value={values.username} onChange={handleChange}/>{errors.username && <p>{errors.username}</p>}
                          <input type="tel" name="phn" placeholder="Phone Number" value={values.phn} onChange={handleChange}/>{errors.phn && <p>{errors.phn}</p>}
                            <input type="password" name="password2" placeholder="Re-enter Password" value={values.password2} onChange={handleChange}/>{errors.password2 && <p>{errors.password2}</p>}
                              <input type="text" name="date" placeholder="Passout Year" value={values.date} onChange={handleChange}/>{errors.date && <p>{errors.date}</p>}

           </div>
                              <div class="signup"><input type="submit" name="signup_submit" value="signup" /></div>
                              <div class="login">Already a member? <a href="index.html">Login</a></div>
           </div>
       </form>
   </div>
                      </div>
		</div>



  )
}




