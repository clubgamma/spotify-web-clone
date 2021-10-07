import "./signup.css";
import spotify from './spotify.png'
import react,{useState} from "react";
import { Link } from "react-router-dom";
import validation from './validateSignup' 

const Signup = () => {

  const [inp,setInp] = useState({
    email:"",
    cemail:"",
    password:"",
    call:"",
    year:"",
    month:"",
    day:"",
    gender:"",
    term1:"t1",
    term2:"t2"
  })

  const [error,setError] = useState([])

  const handleInp = (e) =>{
    const {name,value} = e.target;
    console.log(e.target.checked, value)
    setInp({...inp,[name]:value});
  }

  const signUpClicked = () =>{
    setError(validation(inp))
    console.log(inp)
  }

  return(
    <>
      <div className="signup_main">
        <div data-testid="signupHead" className="signupHead">    
          <img data-testid="signupHeadImg" src={spotify} className="spotifyLogo" />&nbsp;
          <div data-testid="headTextName" className="headText">Spotify</div>
        </div>

        <h2 className="headTextSignup">Sign up for free to start listening.</h2>
        <div data-testid="Sign_up_with_facebook" className="signInFbBtn">Sign up with facebook</div>
        <div className="orSignup"><div className="orLine"><span>or</span></div></div>

        <form className="SignUpform">
          <label className="signUpLabel">What's your email?</label><br/>
          <input type="text" 
          placeholder="Enter your email." 
          className="inpSignup"
          name="email" 
          value={inp.email}
          onChange={handleInp}></input><br/>
          <div className="phoneSignup"> Use phone number instead.</div>
          {error.email && <div className="errorSignup">
            {/* <FaCross size={18}/> */}
            &#10060;
            {error.email}</div>}

          <label className="signUpLabel">Confirm your email</label><br/>
          <input type="text"
          placeholder="Enter your email again." 
          className="inpSignup" 
          name="cemail" 
          value={inp.cemail}
          onChange={handleInp}></input><br/>    
          {error.cemail && <div className="errorSignup">&#10060;{error.cemail}</div>}

          <label className="signUpLabel">Create a password</label><br/>
          <input type="password" 
          placeholder="Create a password." 
          className="inpSignup" 
          name="password" 
          value={inp.password}
          onChange={handleInp}></input><br/>    
          {error.password && <div className="errorSignup">&#10060;{error.password}</div>}

          <label className="signUpLabel">What should we call you?</label><br/>
          <input type="text" 
          placeholder="Enter a profile name." 
          className="inpSignup" 
          name="call" 
          value={inp.call}
          onChange={handleInp}></input><br/>    
          <div style={{fontSize:"0.8rem"}}>This appears on your profile.</div><br/>

          <label className="signUpLabel">What's your date of birth?</label><br/>
          <div className="dobSignUp">
            <div className='dobYearSignUp'>
              <div className="dobTextSignUp">Year</div>
              <input type="text" 
              className="inpDobSignUp" 
              maxLength='4' 
              placeholder="YYYY" 
              name="year" 
              value={inp.year}
              onChange={handleInp}></input>
              {error.year && <div className="errorSignup">&#10060;{error.year}</div>}
            </div>

            <div className='dobMonthSignUp'>
              <div className="dobTextSignUp">Month</div>
              <select type="text" 
              className="inpDobSignUp" 
              placeholder="Month" 
              name="month" 
              value={inp.month}
              onChange={handleInp}>
                  <option disabled="disabled">Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                {error.month && <div className="errorSignup">&#10060;{error.month}</div>}
            </div>

            <div className="dobDaySignUp"> 
              <div className="dobTextSignUp">Day</div>
              <input type="text" 
              className="inpDobSignUp" 
              placeholder="DD" 
              name="day" 
              maxLength='2' 
              value={inp.day}
              onChange={handleInp}></input>
              {error.day && <div className="errorSignup">&#10060;{error.day}</div>}
            </div>  
          </div>

          <br/>
          <label className="signUpLabel">What's your gender?</label><br/>
          <div className="signRadio"> 
            <div className="radioLabel">
              <input type="radio"
              className="signUpRadio" 
              name="gender" 
              value={inp.gender}
              onChange={handleInp}></input>
              Male
            </div>
            <div className="radioLabel">
              <input type="radio"
              className="signUpRadio" 
              name="gender" 
              value={inp.gender}
              onChange={handleInp}></input>
              Female
            </div>
            <div className="radioLabel">
              <input type="radio" 
              className="signUpRadio" 
              name="gender" 
              value={inp.gender}
              onChange={handleInp}></input>
              Non-binary
            </div>
           </div> 
          {error.gender && <div className="errorSignup">&#10060;{error.gender}</div>}
          <br/>

          <input type="checkbox" 
          name="term1" 
          value={inp.term1}
          ></input>&nbsp;&nbsp;&nbsp;
          I would prefer not to receive marketing messages from Spotify<br/><br/>

          <input type="checkbox" 
          name="term2" 
          value={inp.term2}
          ></input>&nbsp;&nbsp;&nbsp;
          Share my registration data with Spotify's content providers for marketing purposes.<br/><br/>

          <div className="signupTerms">By clicking on sign-up, you agree to Spotify's <span className="spanClass">Terms and Conditions of Use</span>.</div><br/>

          <div className="signupTerms">To learn more about how Spotify collects, uses, shares and protects your personal data, please see <span className="spanClass">Spotify's Privacy Policy</span>.</div>

          <div className="subBSignUp" onClick={signUpClicked}><div className="submitButton">Sign up</div></div>

          <div style={{textAlign:"center"}}>Have an account? <Link to="/login" className="spanClass">Log in</Link>.</div>
        </form>

      </div>
  </>
  );
}
export default Signup;
