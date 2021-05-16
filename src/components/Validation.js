export class Validation {
  constructor({email, password, fullName}) {
    this.email = email
    this.password = password
    this.fullName = fullName
  }
  // methods
  emptyFields() {
    if (
      !this.email.trim() ||
      !this.password.trim() ||
      !this.fullName.trim() 
    ) {
      return true
    } else {
      return false
    }
  }
  validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  isValidMail = () => {
    return this.validateEmail(this.email)
  }
  validatePwd(){
      if(this.password.length < 7){
          return true
      } else{return false}
  }
}