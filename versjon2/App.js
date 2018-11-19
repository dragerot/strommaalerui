import React from 'react'
import Chatkit from '@pusher/chatkit'
// import MessageList from './components/MessageList'
// import SendMessageForm from './components/SendMessageForm'
// import RoomList from './components/RoomList'
// import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'
import RegisterMaaling from "./components/RegisterMaaling";
import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter , Route,Link } from 'react-router-dom';
import Home from './components/Home';


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
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)

        // this.Stromregning = this.Stromregning.bind(this);
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'Leietager',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.getRooms()
            })
            .catch(err => console.log('error on connecting: ', err))
    }

    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }

            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                this.getRooms()
            })
            .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
            .then(room => {
                this.subscribeToRoom(room.id)
            })
            .catch(err => console.log('error with createRoom: ', err))
    }

    render() {
        return (
            <div >
                    <div>
                        <ul >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/stromregistrering">Strøm registrering</Link>
                            </li>
                        </ul>
                        <hr />
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

                {/*<RoomList*/}
                    {/*subscribeToRoom={this.subscribeToRoom}*/}
                    {/*rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}*/}
                    {/*roomId={this.state.roomId} />*/}
                {/*<MessageList*/}
                    {/*roomId={this.state.roomId}*/}
                    {/*messages={this.state.messages} />*/}
                {/*<SendMessageForm*/}
                    {/*disabled={!this.state.roomId}*/}
                    {/*sendMessage={this.sendMessage} />*/}
                {/*<NewRoomForm createRoom={this.createRoom} />*/}
                {/*<Route exact path="/" component={Home} />*/}

            </div>
        );
    }
}

export default App