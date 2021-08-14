import React, {useContext, useState} from 'react';
import {TransactionContext} from './transContext';

function Child() {

    let {transactions, addTransaction,delTransaction} = useContext(TransactionContext);
    let[newDesc , setDesc] = useState("");
    let[newAmount , setAmount] = useState(0);
    
   
    const handleAddition = (event)=>{
        event.preventDefault();
        if(Number(newAmount)===0){
            alert('please enter correct value')
            return false;
        }
        console.log(newAmount,newDesc);
        addTransaction(
            {
                amount :Number(newAmount),
                desc: newDesc
            }
        )
        console.log(addTransaction.amount,addTransaction.desc)
        console.log(newAmount,newDesc)
        console.log(getincome(),getexpense())

        setDesc('');
        setAmount(0)

    }

    const handledeletion = (ind)=>{
        delTransaction(ind);
    }

 
    

    const getincome = ()=>{
        let income = 0;
        for (var i=0; i < transactions.length ; i++){
            if (transactions[i].amount > 0)
            income = Number(income) + Number(transactions[i].amount) ;
        }
        return income;
    }

    const getexpense = ()=>{
        let expence = 0;
        for (var i=0; i < transactions.length ; i++){
            if (transactions[i].amount < 0)
            expence =Number(expence) + Number(transactions[i].amount);
        }
        return expence;
    }
    
    
    
  return (
      
    <div className="container-fluid">
    <div className="container">
        <h1 className="text-center">Expence Tracker</h1>

        <h3>Your Balance <br/> ${getincome() + getexpense()} </h3>

     <div className="expence-container" >

     <h3>INCOME <br/> ${getincome()} </h3>    
     <h3>EXPENSE <br/> ${getexpense()} </h3>

     </div>
     <h3>History</h3>

     <hr/>
     <ul className="trnsaction-list">
       
         {transactions.map((transobj , ind)=>{
             return(
           <li key={ind}>
               <span>{ind + 1 }</span>
           <span>{transobj.desc}</span>
           <span>${transobj.amount}</span>
           <span><button className='btn1' onClick={()=>handledeletion(ind)}  >X</button></span> 
                {/* <span>
                   <button onClick={()=>{
                       var value=prompt("Enter Value : ");
                       console.log(value)
                   }} >edit</button> 
                </span> */}
           </li> 
            )
         })}
     </ul>

<form className="transaction-form" onSubmit={handleAddition}>
    <label>
        Enter Description <br/>
        <input type="text"  id="description"  value={newDesc} placeholder='Description' onChange={(ev)=>setDesc(ev.target.value)} required/>
    </label>

    <br/>
    <label>
        Enter amount <br/>
        <input type="number" id="transactionamount" value={newAmount} placeholder='Ammount' onChange={(ev)=>setAmount(ev.target.value)} required/>
    </label>
    <br/>
    <input className="btn" type="submit" value="Add Transaction"/>
</form>


    </div>
    </div>
  );
}

export default Child;