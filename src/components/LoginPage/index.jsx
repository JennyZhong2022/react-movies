import { useState } from "react"

const LoginPage = () => {
  const [userName,setUserName]=useState('')

  const _handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(userName))
    setUserName('')
  }

  return (
    <div>
      <h1>Please enter your desired username below</h1>
      <form onSubmit={_handleSubmit}>
      <label  htmlFor="userName">Username</label>
        <input type="text"
          name="userName"
          value={userName}
          onChange={_handleUserNameChange} />
      <button type="submit">Sign In</button>
      </form>
      
      

      </div>
  )
}

export default LoginPage