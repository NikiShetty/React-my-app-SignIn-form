import React, { Component } from "react";



class AddInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    number: "",
    yourself:"",
    formIsValid: false,
    error: {
      firstnameError: "",
      surnameError: "",
      ageError: "",
      emailError: "",
      passwordError:"",
      numberError: "",
      yourselfError:"",
      formError: "",
    },
  };

  firstnameValidation = (fName) => {
    let formIsValid = this.state.formIsValid;
    let firstnameError = this.state.error.firstnameError;
    let error = this.state.error;
    let pattern = /^[a-zA-Z ]+$/

    if (fName.trim() == "") {
      firstnameError = "Please enter name";
      formIsValid = false;
   
    }
     else if (!(pattern.test(fName))) {
      firstnameError = "letters only";
      formIsValid = false;
    } 
    else if (!(fName.length>=3)) {
      firstnameError = "Please enter valid name";
      formIsValid = false;
    } 
    else {
      formIsValid = true;
      firstnameError = "";
    }

    this.setState({
      firstName: fName,
      lastName: "",
      error: { ...error, firstnameError },
      formIsValid,
    });

    return formIsValid;
  };
  sunrnameValidation = (sName) => {
    let formIsValid = this.state.formIsValid;
    let surnameError = this.state.error.surnameError;
    let error = this.state.error;
    let pattern = /^[a-zA-Z ]+$/

    if (sName.trim() == "") {
      surnameError = "Please enter  name";
      formIsValid = false;
    } 
    else if (!(pattern.test(sName))) {
      surnameError = "letters only";
      formIsValid = false;
    } 
    else if (!(sName.length>=3)) {
    surnameError = "Please enter valid name";
      formIsValid = false;
    }
    else {
      formIsValid = true;
      surnameError = "";
    }

    this.setState({
      lastName: sName,
      error: { ...error, surnameError },
      formIsValid,
    });

    return formIsValid;
  };

  emailValidation = (email) => {
    let formIsValid = this.state.formIsValid;
    let emailError = this.state.error.emailError;
    let error = this.state.error;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (email.trim() == "") {
      emailError = "Please Enter your email Address";
      formIsValid = false;
    }
    // else if (!(pattern.test(email))) {
    //     emailError = "Please enter valid email";
    //   formIsValid = false;
    // }
    else {
      formIsValid = true;
      emailError = "";
    }

    this.setState({
      email: email,
      error: { ...error, emailError },
      formIsValid,
    });
    return formIsValid;
  };

  passwordValidation = (password) => {
    let formIsValid = this.state.formIsValid;
    let passwordError = this.state.error.passwordError;
    let error = this.state.error;
    let pattern = /^[A-Za-z]\w{7,14}$/
  
    if (password.trim() == "") {
      passwordError = "Please Enter your Password";
      formIsValid = false;
    }
    else if (!(pattern.test(password))) {
      passwordError = "password must have minimum 8 characters, at least one letter and one number";
      formIsValid = false;
    }
    else {
      formIsValid = true;
      passwordError = "";
    }

    this.setState({
      password: password,
      error: { ...error, passwordError },
      formIsValid,
    });
    return formIsValid;
  };

  numberValidation = (number) => {
    let formIsValid = this.state.formIsValid;
    let numberError = this.state.error.numberError;
    let error = this.state.error;
    let pattern = /^[0-9]{10}$/;
   

    if (number.trim() == "") {
      numberError = "Please Enter your phone number";
      formIsValid = false;
    } 
    else if (!(pattern.test(number))) {
      numberError = "Invalid";
      formIsValid = false;
    } 
  
    else {
      formIsValid = true;
      numberError = "";
    }

    this.setState({
      number: number,
      error: { ...error, numberError },
      formIsValid,
    });
    return formIsValid;
  };

  ageValidation = (age) => {
    let formIsValid = this.state.formIsValid;
    let ageError = this.state.error.ageError;

    if (age.trim() == "") {
      ageError = "Please enter age";
      formIsValid = false;
    } else if (!(age.length == 2)) {
      ageError = "Please enter valid age";
      formIsValid = false;
    } else {
      formIsValid = true;
      ageError = "";
    }

    this.setState({
      age,
      error: { ...this.state.error, ageError },
      formIsValid,
    });
    return formIsValid;
  };

  yourselfValidation = (yourself) => {
    let formIsValid = this.state.formIsValid;
    let yourselfError = this.state.error.yourselfError;
    let error = this.state.error;

    if(yourself.trim() == "") {
      yourselfError = "Please tell us about yourself";
      formIsValid = false;
    } 
    else if (!(yourself.length > 0)) {
      yourselfError = "Invalid";
      formIsValid = false;
    }
    
    else {
      formIsValid = true;
      yourselfError = "";
    }

    this.setState({
      yourself: yourself,
      error: { ...error, yourselfError },
      formIsValid,
    });

    return formIsValid;
  };



  handleChange = (e) => {
    if (e.target.id == "firstName") {
      this.firstnameValidation(e.target.value);
    }
    if (e.target.id == "lastName") {
      this.sunrnameValidation(e.target.value);
    }
    if (e.target.id == "age") {
      this.ageValidation(e.target.value);
    }
    if (e.target.id == "email") {
      this.emailValidation(e.target.value);
    }
    if (e.target.id == "password") {
      this.passwordValidation(e.target.value);
    }
    if (e.target.id == "number") {
      this.numberValidation(e.target.value);
    }
    if (e.target.id == "yourself") {
      this.yourselfValidation(e.target.value);
    }
  };

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (
      this.firstnameValidation(this.state.firstName) &&
      this.sunrnameValidation(this.state.lastName) &&
      this.ageValidation(this.state.age) &&
      this.emailValidation(this.state.email) &&
      this.passwordValidation(this.state.password) &&
      this.numberValidation(this.state.number) &&
      this.yourselfValidation(this.state.yourself) &&
      this.state.formIsValid === true
    ) {
      this.props.addInfo(this.state);

      this.setState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        number: "",
        yourself:"",
        error: { ...this.state.error, formError:""},
      });
    } else {
      let formError = this.state.error.formError;
      formError = "Please check all the fields";
      this.setState({
        error: { ...this.state.error, formError },
      });
    }
  };

  render(){
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className=" col-sm-10 col-md-8 col-lg-9 col-xl-8">
              <div className="card">
                <div className="card-body p-4 p-md-5">
                  <h3 id="signUp" className="mb-4 pb-2 text-primary">
                    Sign Up
                  </h3>
                  <hr></hr>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 col-lg-6  mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1  fs-5">Firstname : </h6>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control "
                            placeholder="First Name"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                          />
                        </div>
                        <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.firstnameError}</p>
                      </div>
                      <div className="col-md-12 col-lg-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1  fs-5">Surname : </h6>
                          <input
                            type="text"
                            id="lastName"
                            className="form-control  "
                            placeholder="Surname"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                          />
                          <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.surnameError}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 col-lg-6 mb-4">
                        <h6 className="mb-2 pb-1  fs-5">Age : </h6>
                        <input
                          type="text"
                          id="age"
                          className="form-control"
                          placeholder="Age"
                          onChange={this.handleChange}
                          value={this.state.age}
                        ></input>
                        <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.ageError}</p>
                      </div>
                      <div className="col-md-12 col-lg-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1  fs-5">Email Address: </h6>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.email}
                          />
                          <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.emailError}</p>
                        </div>
                      </div>
                    </div>

                       <div className="row">
                      <div className="col-md-12 col-lg-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1  fs-5">Password : </h6>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                          />
                          <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.passwordError}</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1  fs-5">ContactNumber: </h6>
                          <input
                            type="text"
                            id="number"
                            className="form-control"
                            placeholder="Contact Number"
                            onChange={this.handleChange}
                            value={this.state.number}
                          />
                          <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.numberError}</p>
                        </div>
                      </div>
                  <div className="form-outline">
                      <h6 className="mb-2 pb-1  fs-5">About Yourself: </h6>
                      
                        <textarea maxLength={200}
                        type="text"
                        id="yourself"
                        class="form-control"
                        placeholder="Tell us about yourself"
                        onChange={this.handleChange}
                        value={this.state.yourself}></textarea>
                        <p style={{ color: 'red', fontSize: '20px' }}>{this.state.error.yourselfError}</p>
    </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className=" mt-4 ">
                          <button
                            id="submit"
                            className="btn btn-primary btn-lg col-12 "
                            value="Submit"
                          >
                            Submit
                          </button>
                        </div>
                        <p>{this.state.error.formError}</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default AddInfo;
// ^[A-Za-z]\w{7,14}$ -Passowrd