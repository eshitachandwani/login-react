export default function validateInfo(values){
  let errors = {}

  if(!values.username){
    errors.username = "Username required"
  }

  if(!values.Fullname){
    errors.Fullname = "Name required"
  }

  if(!values.email){
    errors.email = "Email required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Email address is invalid"
  }

  if(!values.password){
    errors.password = "Password required"
  }
  else if(values.password.length<8){
    errors.password = "Password should be 8 characters or more"
  }

  if(!values.password2){
    errors.password2 = "Password required"
  }
  else if(values.password2!==values.password){
    errors.password2="Passwords do not match"
  }

  if(!values.institute){
    errors.institute = "Institute name required"
  }

  if(!values.phn){
    errors.phn = "Phone number required"
  }

  if(!values.date){
    errors.date = "Passout year required"
  }

  return errors
}