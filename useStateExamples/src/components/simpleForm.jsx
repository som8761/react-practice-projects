import React,{useState} from 'react'

/*Simple Form: Create a simple form with input fields for name, email, and message. Use useState to manage the state of the form inputs.*/
const SimpleForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
  return (
    <>
    name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    email:<input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    phone:<input type='phone' name="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
    </>
  )
}

export default SimpleForm