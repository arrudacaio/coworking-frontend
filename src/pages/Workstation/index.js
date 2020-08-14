import React, {useState} from 'react'
import Dashboard from '../Dashboard/index'
import {useHistory, Link} from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

const CreateWorkStation = () => {
    const [name, setName]= useState('')
    const [description, setDescription]= useState('')
    const [schedules, setSchedules] = useState([])
    const history = useHistory()
   

    const handleChange = async (e) => {
        e.preventDefault()
        const response = await api.post('/api/workstation/register', {name, description, schedules})
        console.log(response)
        const workId = response.data._id


        if(workId){
            history.push('/dashboard')
        } else {
            throw Error('Erro when registering workstation')
        }
    }

    return(
        <>
        
            <Link to='/dashboard'><Dashboard  /></Link>
            <form className="work-form" onSubmit={handleChange}>
                <input type="text" name="name" placeholder="Workstation name" onChange={e => setName(e.target.value)}/>
                <input type="text" name="description" placeholder="Workstation description" onChange={e => setDescription(e.target.value)}/>
                <input type="text" name="schedules" placeholder="Workstation schedules" onChange={e => setSchedules(e.target.value)}/>
                <button type="submit">Create Workstation</button>
                
            </form>
        </>
    )
}
export default CreateWorkStation