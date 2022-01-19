import {useReducer} from 'react'


    
   export function Counter(){

    const initialState = {count: 1}

   function reducer(state, action){
       switch (action.type) {
           case 'increment':
               return {count : state.count+1}
            case 'decrement'  :
                return  {count : state.count-1} 
            default:
                throw new Error();
       }
   }   
    const [state, dispatch] = useReducer(reducer,initialState)
       return (
           <>
           Numero de frutas no carrinho: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
           </>
       )
   }
