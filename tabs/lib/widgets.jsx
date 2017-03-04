import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';

const data = [{title: 'One', content:"Yo mama"}, {title: 'Two', content:"Get real"}];

document.addEventListener("DOMContentLoaded", e => {
  const root = document.getElementById("root");
  ReactDOM.render( <Tabs data={data}/>, root);
});
