import '../style/Chat.css';
import {ChatEngine, ChatFeed} from 'react-chat-engine';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const now = new Date().getTime();
const username = ['user', now].join('-');

class Message extends Component{

  render () {
      return ( 
        <div > { this.props.uuid }: { this.props.text } 
        </div>
      );
  }
};

function Chat() {

    // const didMountRef = useRef(false)
    // const [current, setCurrent] = useState(null)
    // const { currentUser, setCurrentUser, setUsers } = useContext(Context)

    // function syncUsers() {
    //     getUsers(users => {
    //         console.log('Fetched users', users)
            
    //         {/* Run this code to load Chat Engine users */}
    //         currentUsers.map(current => {
    //             if(!users.find(user => current.username === user.username)) {
    //                 console.log('Creating user', current.username)
    //                 createUser(current)
    //             }
    //         })

    //         setUsers(users)
    //         setCurrentUser(currentUsers[0])
    //     })
    // }

    // useEffect(() => {
    //     if (!didMountRef.current) {
    //         didMountRef.current = true
    //         syncUsers()
    //     }
    // })

  return (
    <div className="Chat">
        <h1>Testing Chat Page</h1>

        <ChatEngine 
            projectID='707f0546-7b8c-4a4a-9a27-9a27a6f01301'
            userName='Test'
            userSecret='testtest'
        />
        {/* <ChatEngineWrapper>
            <ChatSocket 
                projectID='707f0546-7b8c-4a4a-9a27-9a27a6f01301'
                chatID='134918'
                chatAccessKey='ca-6aba8df4-9ba9-4717-b40a-d0aa3c11e2bc'
                senderUsername='Test'
            />

            <ChatFeed activeChat='134918' />
        </ChatEngineWrapper> */}
    </div>
  );
}

export default Chat;