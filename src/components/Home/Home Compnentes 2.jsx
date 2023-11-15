import { Formulario } from "../Formulario/Formulario";
import { Titulo } from "../Titulo/Titulo";
import React, { useEffect, useState } from 'react';

export const Home = () => {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    
    useEffect(()=>{
      console.log("Siempre se ejecuta");

      //clean up
      return()=>{
        console.log("LIMPIEZA");
      }
    })

    useEffect(()=>{
      console.log("API: Solo una sola vez");
    },[])

    useEffect(()=>{
      console.log("SOLO cuando cambie el like");
    },[like])
    
    const handleAdd = ()=>{
        setCount(count + 1);
    }

    const handleLike = ()=>{
      setLike(!like);
  }
  console.log('render home')
  return (
    <div>
        <label>{count}</label>
        <button onClick={handleAdd}>Sumar</button>
        <button onClick={handleLike}>Me gusta</button>
    </div>
  );
};