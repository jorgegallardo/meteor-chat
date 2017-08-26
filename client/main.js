import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

var messages = [
  {
    _id: '1',
    name: 'Jorge',
    time: 123,
    message: 'How you doing?'
  },
  {
    _id: '2',
    name: 'Dave',
    time: 124,
    message: 'Good, how are you?'
  },
  {
    _id: '3',
    name: 'Jorge',
    time: 125,
    message: 'Great!'
  }
];

const renderUserMessages = (db) => {
  return db.map((user) => {
    return (
      <p key={user._id}>{user.name}: {user.message} <i>at {user.time}</i></p>
    );
  });
};

Meteor.startup(() => {
  let jsx = (
    <div>
      <h1>Meteor Chat</h1>
      {renderUserMessages(messages)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});