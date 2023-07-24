import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Head = () => {
  return (
    <section className='head'>
      <div className='container d_flex'>
        <div className='left-row'>
          <FontAwesomeIcon icon={faPhone} />          
          <label> +88012 3456 7894</label>
          <FontAwesomeIcon icon={faEnvelope} />
          <label> lil_pizzarie@vamonessa.com</label>
        </div>
        <div className='right-row-RText'>
          <label>FAQ's</label>
          <label>Precisa de Ajuda?</label>
          <label>PT-BR</label>
          <label>ENG</label>
        </div>

      </div>

    </section>
  )
}

export default Head
