import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import "./CartContainer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { SuccessBtn, DeleteBtn, ClearBtn } from '../../Buttons/Buttons';

export const CartContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repetirEmail: ""
  })

  const [errors, setErrors] = useState({});
  const [isId, setIsId] = useState('')
  const [showEmptyCartAlert, setShowEmptyCartAlert] = useState(true);
  const { cartList, vaciarCarrito, eliminarProducto, totalPrice } = useCartContext();

  const handleEliminarProducto = (productId) => {
    eliminarProducto(productId);
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.name || !formData.phone || !formData.email || !formData.repetirEmail) {
      formErrors.allFields = 'Debes llenar todos los campos para realizar la compra';
    } else {
      if (isNaN(formData.phone) || formData.phone.length < 8) {
        formErrors.phone = 'El número de teléfono debe ser numérico y tener al menos 8 dígitos';
      }

      if (!isValidEmail(formData.email) || !isValidEmail(formData.repetirEmail)) {
        formErrors.email = 'El formato del correo electrónico no es válido';
      }

      if (formData.email !== formData.repetirEmail) {
        formErrors.emailMatch = 'Los correos electrónicos no coinciden';
      }
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOrder = async (evt) => {
    evt.preventDefault();

    // Validación de email
    if (formData.email !== formData.repetirEmail) {
      alert("Los correos electrónicos no coinciden");
      return;
    }

    if (!validateForm()) {
      setErrors({ allSlotsRequired: 'Todos los campos son obligatorios' });
      return;
    }

    const order = {
      buyer: formData,
      items: cartList.map(({ id, name, precio }) => ({ id, name, precio })),
      total: totalPrice()
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    try {
      const docRef = await addDoc(orderCollection, order);
      setIsId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al añadir documento: ', error);
    }
  }

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  
    setErrors({
      ...errors,
      [evt.target.name]: evt.target.value === '' ? `${evt.target.name} es obligatorio` : evt.target.name === 'phone' && (isNaN(evt.target.value) || evt.target.value.length < 8) ? 'El número de teléfono debe ser numérico y tener 8 dígitos' : evt.target.name === 'email' && !isValidEmail(evt.target.value) ? 'Formato de email incorrecto' : null,
    });
  };
  

  return (
    <div>
      {isId !== '' && (
        <label>
          
          <div className='form-control p-3 mt-4' style={{ width: 500, margin: 'auto', lineHeight:'0.7rem'}}>
            <div className='p-4 m-3' 
            style={{ 
              background: 'linear-gradient(180deg, rgba(0,241,254,1) 0%, rgba(5,211,244,1) 100%)',
              borderRadius:'10px' }}>
              La orden de compra es: {isId}
            </div> 
            <p>Nombre: {formData.name}</p>
            <p>Teléfono: {formData.phone}</p>
            <p>Email: {formData.email}</p>
          </div>
          
        </label>
      )}
      {cartList.length === 0 && isId === '' && (
        <Alert variant="danger">
        <Alert.Heading>Oops, parece que tu carrito esta vacío!</Alert.Heading>
        <p>
          Asegúrate de agregar tu producto antes de hacer la compra
        </p>

        <Link to="/">
          <button
            className="btn btn-outline-dark"
          >
            Regresar para agregar productos
          </button>
        </Link>
      </Alert>
      )}

      {cartList.length > 0 && isId === '' && (
        <div>
          {cartList.map((product) => (
            <div key={product.id} className="cart-item">
              <img className="w-25" src={product.imageURL} alt={product.nombre} />
              <div className="cart-item-info">
                <p> Cantidad: {product.cantidad}</p>
                <p> Precio: ${product.precio}</p>
                <p> Subtotal: ${product.cantidad * product.precio}</p>
              </div>

              <DeleteBtn onClick={() => handleEliminarProducto(product.id)}>
                Eliminar Producto
              </DeleteBtn>
            </div>
          ))}

          <div className="mt-2 d-flex justify-content-end btn btn-light">
            <div className="p-2">
              <h5>Total a pagar: ${totalPrice()}</h5>
            </div>
          </div>
          
          <ClearBtn onClick={vaciarCarrito}>
            Vaciar Carrito
          </ClearBtn>

          <form  className='form-control p-5 mt-4' onSubmit={handleOrder} style={{ width: 450, margin: 'auto' }}>
            <label>Ingresar Nombre</label>
            <input 
              className='form-control'
              type="text"
              name='name'
              value={formData.name}
              onInput={handleOnChange}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <br />
            <label>Ingresar Numero de Telefono</label>
            <input 
              className='form-control'
              type="text"
              name='phone'
              value={formData.phone}
              onInput={handleOnChange}
            />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}


            <br />  
            <label>Ingresar Email</label>
            <input 
              className='form-control'
              type="text"
              name='email'
              value={formData.email}
              onInput={handleOnChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

            <br />  
            <label>Repetir Email</label>
            <input
              className='form-control'
              type="text"
              name='repetirEmail'
              value={formData.repetirEmail}
              onInput={handleOnChange}
            />
               <br /> 
            {errors.emailMatch && <span style={{ color: 'red' }}>{errors.emailMatch}</span>}
            
            <div className='mb-3'>
              {errors.allSlotsRequired && <span style={{ color: 'red', fontWeight: '500'}}>{errors.allSlotsRequired}</span>}
            </div>
            
            <SuccessBtn>
              Terminar Compra
            </SuccessBtn>
            </form>
        </div>
      )}
    </div>
  );
};
