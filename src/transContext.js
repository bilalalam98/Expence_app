import React, { createContext, useReducer } from 'react';
import Transactionreducer from './transReducer';

const intitalTransactions = [
    {amount:100, desc:"CASH"},
    {amount:-40, desc:"BOOK"},
    {amount:-200, desc:"CAMERA"},
]

export const TransactionContext = createContext(intitalTransactions);




export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(Transactionreducer,intitalTransactions);
  
    function delTransaction(arrind) {
        dispatch({
            type: 'DEL TRANSACTION',
            payload:{
                ind:arrind
            }
        });
    }
    function addTransaction(transObj){
     dispatch({
     type:"ADD Transaction",
     payload:{
         amount: transObj.amount,
         desc: transObj.desc
     }
     })
    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction : addTransaction,
            delTransaction : delTransaction
            }}>
                {children}
       </TransactionContext.Provider >
    )
}