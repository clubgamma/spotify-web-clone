import React from 'react'

function validateSignup(inp) {

    let errors ={}

    if(!inp.email){
        errors.email =`You need to enter your email.`
    }else if(!inp.email.includes("@")){
        errors.email = "This email is invalid. Make sure it's written like example@email.com"
    }

    if(!inp.cemail){
        errors.cemail ="You need to confirm your email."
    }else if(!inp.cemail.match(inp.email)){
        errors.cemail="The email addresses don't match."
    }

    if(!inp.password){
        errors.password = "You need to enter a password."
    }else if(inp.password.length < 7){
        errors.password = "Your password is too short."
    }

    if(!inp.year){
        errors.year = "Enter a valid year."
    }

    if(!inp.month){
        errors.month = "Select your birth month."
    }

    if(!inp.day){
        errors.day = "Enter a valid day of the month."
    }

    if(!inp.gender){
        errors.gender ="Select your gender."
    }
    return errors;
}

export default validateSignup
