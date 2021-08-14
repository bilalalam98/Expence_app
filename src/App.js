import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';

function App() {

  return (
    
    <div>
      <TransactionProvider>
       <Child/>
   </TransactionProvider>
    </div>
  );
}

export default App;
