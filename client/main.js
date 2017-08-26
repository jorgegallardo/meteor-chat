import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Chat} from './../imports/api/chat';

const renderChat = (db) => {
  return db.map((user) => {
    return (
      <p key={user._id}>{user.name}: {user.message} <i>at {user.time}</i></p>
    );
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let messages = Chat.find().fetch();
    console.log('Messages', messages);
    let jsx = (
      <div>
        <h1>Meteor Chat</h1>
        {renderChat(messages)}
        {/* <form>
          <input type="username" placeholder="Name"/>
          <input type="message" placeholder="Enter message"/>
          <button>Submit Message</button>
        </form> */}
      </div>
    );
  
    ReactDOM.render(jsx, document.getElementById('app'));
  });
  var time = new Date().toLocaleTimeString();
  Chat.insert({
    name: 'Jorge',
    time,
    message: 'Hello there!'
  });
});