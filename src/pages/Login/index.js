import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'




const Login = () => {
    const [email, setEmail ]= useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    const handleChange = async (e) => {
        e.preventDefault()
        if (email !== "" && password !== ""){
            const response = await api.post('/api/login', {email, password, isValidate: true})
            const userId = response.data._id || false
            

            
            try {
                if(userId){
                    localStorage.setItem('user', userId)
                    history.push('/edit-info')
                } 
    
            } catch (error) {
                alert('Logue com um usuário')
            }
        }
    }


    return (
        <div className="container">
            <h2>Login</h2>
            <p>Please <strong>Login</strong> in your account</p>
            <form onSubmit={handleChange}>
                <input type="email" placeholder="Your email" name="email" onChange={e =>  setEmail(e.target.value)}/>
                <input type="password" placeholder="Your password" name="password" onChange={e =>  setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
                <button onClick={() => history.push("/register")}>Register instead?</button>

            </form>
        </div>
    )
}

export default Login