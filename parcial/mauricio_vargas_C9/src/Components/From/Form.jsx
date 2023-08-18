import { useState } from "react";

const Form = () => {

    const [color, setColor] = useState({
        nombreUsuario: '',
        nombreColor: '',
        formato: '',
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        
       // console.log(cliente.direccion.match(numberRegex))
        if(color.nombreUsuario.length > 3 && color.formato.match(numberRegex)) {
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

   console.log(color)

    return (
        <div>
            <label>Nombre y apellido</label>
    <input type="text"onChange={(event) => setColor({...color, nombreUsuario: event.target.value})} />
    <label>Elige un color</label>
    <input type="text" onChange={(event) => setColor({...color, nombreColor: event.target.value})} />
    <label>Ingresa el formato del color</label>
    <input type="text" onChange={(event) => setColor({...color, formato: event.target.value})} />
    <button>Enviar</button>

    {error && <h6>Por favor verifica la información ingresada</h6>}

    {show ? <>
        <h4>Gracias {color.nombreUsuario} </h4>
        <h4>¡Nos encanta tu decision de {color.nombreColor}!</h4>
    
    </>
    :null
    }
            
        </div>
        
    )
    




}
export default Form