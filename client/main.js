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

const handleSubmit = (e) => {
  let name = e.target.name.value;
  let time = Date.now();
  let message = e.target.message.value;
  e.preventDefault();

  if(name && message) {
    Chat.insert({name, time, message});
    e.target.message.value = '';
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let messages = Chat.find().fetch();
    console.log('Messages', messages);
    let jsx = (
      <div>
        <h1>Meteor Chat</h1>
        {renderChat(messages)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name"/>
          <input type="text" name="message" placeholder="Enter message"/>
          <button>Submit Message</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});