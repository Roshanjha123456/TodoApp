import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addCount,subCount } from '../redux/acction';

const CountApp = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.CountReducers)
    console.log(count,"000000000000000000000000000")
  return (
    <div>
         <p>{count}</p>
         <button onClick={()=>dispatch(addCount())}>Add</button>
         <button onClick={()=>dispatch(subCount())}>Sub</button>
    </div>
  )
}

export default CountApp