const Transactionreducer = (state, action) =>{
    switch(action.type){
        case'ADD Transaction':{
        return [ ...state,action.payload ]
        }
        case 'DEL TRANSACTION':{
          var arr=[];
          console.log("Action : ",action.payload.ind)
          for(var i=0;i<state.length;i++){
            if(i!==action.payload.ind){
            arr.push(state[i]);
           
            }
            
            
        }
        
        return arr;
    }
        default:
            return state;
        
    }
    
    
}
export default Transactionreducer;