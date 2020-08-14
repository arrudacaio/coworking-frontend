import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'




const EditInfo = () => {
    const [name, setName]= useState('')
    const [email, setEmail ]= useState('')
    const [date, setDate] = useState('')
    const [cpf, setCPF] = useState('')
    const [street, setStreet] = useState('')
    const [bio, setBio] = useState('')
    const [admin, setAdmin] = useState(false)



    const history = useHistory()


    const handleChange = async (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('user')
        
        


        const response = await api.put('/api/user/edit', {_id: userId, name, email, isAdmin: admin,  date, cpf, street, bio})
        const afterId = response.data._id || false
        const isAdmin = response.data.isAdmin 

        
        try {
            if(afterId && isAdmin ){
                history.push('/dashboard')
            } 
            if(afterId && !isAdmin){
                history.push('/scheduling')
            }

        } catch (error) {
            alert('Edite um usuário válido.')
        }
        
    }




    return (
        <div className="container">
            <h2>Edit your informations</h2>
            <p>Please <strong>Edit</strong> your information</p>
            <form onSubmit={handleChange}>
                <input type="text" placeholder="Update your name" name="name" onChange={e =>  setName(e.target.value)}/>
                <input type="email" placeholder="Your email" name="email" onChange={e =>  setEmail(e.target.value)}/>
                <input type="text" placeholder="Your date birthday" name="date" onChange={e =>  setDate(e.target.value)}/>
                <input type="text" placeholder="Your CPF" name="cpf" onChange={e =>  setCPF(e.target.value)}/>
                <input type="text" placeholder="Your street" name="street" onChange={e =>  setStreet(e.target.value)}/>
                <input type="text" placeholder="Your biography" name="bio" onChange={e =>  setBio(e.target.value)}/>
                <select onChange={e =>  setAdmin(e.target.value)}>
                    <option value={true}>User Admin</option>
                    <option selected value={false}>User Normal</option>
                </select>



                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditInfo