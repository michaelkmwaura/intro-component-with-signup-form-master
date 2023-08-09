import { useState } from 'react'
import './App.css'
import error from "./images/icon-error.svg"

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [unfilled, setunfilled] = useState(false);

  const firstNameChanged = (e) => {
   return setFirstName(e.target.value)
  }

  const secondNameChanged = (e) => {
    return setLastName(e.target.value)
  }


  return (
    <>
    <div id="mainDiv">
      <div id="mainText">
          <h1>Learn to code by watching others</h1>
          <p>See how experiendced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      
      <div id="mainForm">
        <div id="trial"> <strong>Try it free 7 days </strong>then 520/mo. thereafter.</div>
        <div id="whiteDiv">
        <form>
        <input className="input" placeholder='First Name' required value={firstName} onChange={firstNameChanged}/>
        <input className="input" placeholder='Last Name' required value={lastName} onChange={secondNameChanged} />
        <input className="input" placeholder='Email Address' type='email'required/>
        <input className="input" placeholder='First Password' type="password" required/>
        <button id="submit" type="submit">CLAIM YOUR FREE TRIAL</button>
        </form>
        <p>By clicking the button, you are agreeing to our <a id="link" href="#" action="_blank">Terms and conditions</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
