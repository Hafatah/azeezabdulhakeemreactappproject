import lol from './nikki02.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React,{useState} from 'react';



function Tobi(props){
    let[price,setTitle]= useState(props.price);
    let clickHandler=() =>{
        let b=Math.trunc(price*0.9)
        setTitle(b)
    }
    return (
        <div>
            <h1>{props.name} </h1>
            <img src={props.image} alt='yy' className='all'/>
            <h1>{props.description}</h1>
            <h1>{price}</h1>
            <button onClick={clickHandler}  className='btn  btn-primary'>Get Dicount</button>
        </div>
    )
}
export default Tobi;