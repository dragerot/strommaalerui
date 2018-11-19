import React from 'react'
import { tokenUrl, instanceLocator } from './config'
import RegisterMaaling from "./components/RegisterMaaling";
import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter , Route,Link } from 'react-router-dom';
import Home from './components/Home';
import { Navbar , NavItem, Nav} from 'react-bootstrap';


const config = {
    issuer: 'https://dev-997043.oktapreview.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oahkpf4gaqcgPMCa0h7'
}

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }

    }

    render() {
        return (
            <div >
                <div>
                    <Navbar  class="navbar navbar-expand-lg navbar-light bg-light">
                        <Navbar.Header>
                            <Navbar.Brand >
                                <a href="/">Home</a>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <a href="/stromregistrering">Måling</a>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <a href="/">Melding</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                </div>


                    {/*<Security issuer={config.issuer}*/}
                              {/*client_id={config.client_id}*/}
                              {/*redirect_uri={config.redirect_uri}*/}
                    {/*>*/}
                        {/*<Route path='/' exact={true} component={Home}/>*/}
                        {/*<Route path='/implicit/callback' component={ImplicitCallback}/>*/}
                    {/*</Security>*/}
                        <Route path="/stromregistrering"
                               render={(props) => <RegisterMaaling {...props} maalingHovedValue={1212121} maalingLeietakerValue={1212} />}
                        />
            </div>
        );
    }
}

export default App