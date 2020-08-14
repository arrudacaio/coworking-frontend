import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'
import './styles.css'



const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail ]= useState('')
    const [password, setPassword] = useState('')
    const [admin, setAdmin] = useState(false)
    const history = useHistory()


    const handleChange = async (e) => {
        e.preventDefault()
        if (email !== "" && password !== "" && name !== ""){
            const response = await api.post('/api/user/register', {name, email, password, isAdmin: admin})
            const userId = response.data._id
    
            if(userId){
                history.push('/login')
            } 
        }
    }


    return (
        <div className="container">
            <h2>Register</h2>
            <p>Please <strong>Register</strong> for a new account</p>
            <form onSubmit={handleChange}>
                <input type="text" placeholder="Your name" name="name" onChange={e =>  setName(e.target.value)}/>
                <input type="email" placeholder="Your email" name="email" onChange={e =>  setEmail(e.target.value)}/>
                <input type="password" placeholder="Your password" name="password" onChange={e =>  setPassword(e.target.value)}/>
                <select onChange={e =>  setAdmin(e.target.value)}>
                    <option value={true}>User Admin</option>
                    <option selected value={false}>User Normal</option>
                </select>
                <button type="submit">Submit</button>
                <button onClick={() => history.push("/login")}>Login instead?</button>
            </form>
            

        </div>
    )
}

export default Register