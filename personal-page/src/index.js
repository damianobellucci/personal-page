import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './example-components/Clock';
import reportWebVitals from './reportWebVitals';
import Toggle from './example-components/Toggle';
import Mailbox from './example-components/Mailbox';
import LoginControl from './example-components/LoginControl';
import Page from './example-components/Page';
import NumberList from './example-components/NumberList';
import Blog from './example-components/Blog';
import Calculator from './example-components/Calculator';
import SignUpDialog from './example-components/SignUpDialog';

/*
ReactDOM.render prende in input componente (fatto da elementi) da renderizzare e
la posizione dove deve essere renderizzato.

Applicazioni in react solitamente hanno una singola root DOM node.


All React components must act like pure functions (non cambiano gli input) with respect to their props.

Per integrare tutte le funzionid dell'orologio dentro il componente orologio
bisogna trasformare la funzione orologio in una classe


*/

const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1, 2, 3, 4, 5];

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Toggle />
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    <Page />
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    <Calculator />
    <SignUpDialog />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
