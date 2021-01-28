import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import Login from './Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useStateValue } from './StateProvider';


function App() {

  const [messages, setMessages] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

  }, [])

  useEffect(() => {


  }, []);


  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Router>
              <Sidebar />
              <Route path="/">
              </Route>
              <Route path="/rooms/:roomId">
                <Chat messages={messages} />
              </Route>
            </Router>
          </div >
        )
      }

    </div >
  );
}

export default App;
