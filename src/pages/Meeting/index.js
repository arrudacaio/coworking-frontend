import React, {useState} from 'react'
import Dashboard from '../Dashboard/index'
import {useHistory, Link} from 'react-router-dom'

import api from '../../services/api'

//import './styles.css'

const CreateMeeting = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [room, setRoom] = useState(0)
    const [hour, setHour] = useState('')
    const [creator, setCreator] = useState('')

    const [participants, setParticipants] = useState([])

    const history = useHistory()
   

    const handleChange = async (e) => {
        e.preventDefault()
        const response = await api.post('/api/meeting/register', {name, description, room, hour, creator, participants})
        console.log(response)
       


        
        history.push('/dashboard')
      
    }

    return(
        <>
        
            <Link to='/dashboard'><Dashboard  /></Link>
            <form className="work-form" onSubmit={handleChange}>
                <input type="text" name="name" placeholder="Meeting name" onChange={e => setName(e.target.value)}/>
                <input type="text" name="description" placeholder="Meeting description" onChange={e => setDescription(e.target.value)}/>
                <input type="number" name="room" placeholder="Meeting room" onChange={e => setRoom(e.target.value)}/>
                <input type="text" name="hour" placeholder="Meeting hour" onChange={e => setHour(e.target.value)}/>
                <input type="text" name="creator" placeholder="Meeting creator" onChange={e => setCreator(e.target.value)}/>
                <input type="text" name="participants" placeholder="Meeting participants" onChange={e => setParticipants(e.target.value)}/>
                <button type="submit">Create Meeting Room</button>
                
            </form>
        </>
    )
}
export default CreateMeeting