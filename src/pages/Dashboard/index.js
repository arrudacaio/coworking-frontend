import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from "react-router-dom"
import Card from '../../components/Card'




const Dashboard =  () => {
    const [user, setUser] = useState('')
    const [listUser, setListUser] = useState([])
    const [listWork, setListWork] = useState([])
    const [listMeetings, setListMeetings] = useState([])

    const [ward, setWard] = useState('')


    

    const userId = localStorage.getItem('user') 
    
    useEffect(() => {
        api.get(`/api/users/${userId}`).then(response => {
            setUser(response.data.name)
        })
    }, [userId])


    

    const getUsers = async (e)  => {
        e.preventDefault()

        try {
            await api.get('api/users').then(response => {
                setListUser(response.data)
                
            })
            setWard('user')
            
        } catch (error) {   
            throw Error('não conseguiu pegar os dados dos users')
        }

    }

    const getWorkstations = async (e)  => {
        e.preventDefault()
        
        try {
            await api.get('api/workstations').then(response => {
                setListWork(response.data)
                
            })
            setWard('work')
            
        } catch (error) {   
            throw Error('não conseguiu pegar os dados dos users')
        }

    }

    const getMeetings = async (e)  => {
        e.preventDefault()
        
        try {
            await api.get('api/meetings').then(response => {
                setListMeetings(response.data)
                
            })
            setWard('meeting')
            
        } catch (error) {   
            throw Error('não conseguiu pegar os dados dos users')
        }

    }

    return (
        <div>
            <header>
                <div className="infos">
                    <h1 className="title">Dashboard</h1>
                    <span className="span">Welcome, {user} </span>
                </div>
                <div className="list">
                    <ul>
                        <li onClick={getUsers}>List Users</li>
                        <li onClick={getWorkstations}>List Workstations</li>
                        <li onClick={getMeetings}>List Meetings</li>
                        <li><Link to='/dashboard/create-workstation'>Workstations</Link></li>
                        <li><Link to='/dashboard/create-meeting'>Meetings Rooms</Link></li>
                        <li><Link to='/login'>Logout</Link></li>

                    </ul>
                </div>
            </header>
            {   
            ward === 'user' ? listUser.map(user => (
                <Card key={user._id} email={user.email} text={'is Admin: '}isAdmin={user.isAdmin ? 'false' : 'true'}  />
             )) :
             listWork.map(work => (
                <Card key={work._id} email={work.name} text={''} isAdmin={work.description}  />
             )) 
            }
            {ward === 'meeting' ? listMeetings.map(meetings => (
                <Card key={meetings._id} email={meetings.name} text={''} isAdmin={meetings.description}  />
             )) : console.log('Meetings not clicked')}
        </div>
    )
}

export default Dashboard