// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const userInput = useRef(null);
  // const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = (e) => {
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    //
    e.preventDefault();
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0]
    // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(userName);
  }  
  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  function handleChange(e){
    const {value} = e.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userInput">Username:</label>
        <input value={userName} onChange={handleChange} id="userInput" ref={userInput} type="text" />
      </div>
      {/* <div style={{color:'red'}} role="alert">
        {error}
      </div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
