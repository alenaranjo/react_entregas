import { Titulo } from "../Titulo/Titulo"

export const Formulario = () => {
    return (
      <div style={{border: '1px solid green'}}>
        <form>
          <Titulo 
            titulo={"Hello"}
            subtitulo={"esto es un sub"}
            saludo={'hola a todos'} 
          />
          <input type='text' name='nombre' placeholder='ingrese el nombre' />
        </form>
  
      </div>
  
    )
  }