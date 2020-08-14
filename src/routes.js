import React from 'react'
import Register from './pages/Register/index'
import Dashboard from './pages/Dashboard/index'
import Login from './pages/Login/index'
import EditInfo from './pages/EditInfo/EditInfo'
import CreateWorkStation from './pages/Workstation/index'
import CreateMeeting from './pages/Meeting/index'
import Scheduling from './pages/Scheduling/index'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/register" component={Register} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit-info" component={EditInfo} />
            <Route exact path="/dashboard" component={Dashboard} /> 
            <Route exact path="/dashboard/create-workstation" component={CreateWorkStation} /> 
            <Route exact path="/dashboard/create-meeting" component={CreateMeeting} /> 
            <Route exact path="/scheduling" component={Scheduling} /> 



            


        </Switch> 
    
    </BrowserRouter>
)

export default Routes