import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  let jsx = (
    <div>
      <h1>Meteor Chat</h1>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});