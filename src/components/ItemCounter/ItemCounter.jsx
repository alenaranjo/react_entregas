import { useCounter } from "../../hooks/useCounter"

export const ItemCounter = ({initial=1, stock=5, onAdd})=>{
    const {counter, handleRestar, handleSumar} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)
      }
    
    return(
        <div className="w-30">
            <label className="btn btn-warning">{counter}</label>
            <button onClick={handleSumar} className="btn btn-light"> + </button>
            <button onClick={handleRestar} className="btn btn-light"> - </button>
            <button onClick={handleOnAdd} className="btn btn-light"> Agregar al Carrito </button>
        </div>
    )
}