import React from 'react';
import {IconContext} from 'react-icons'
import { FiCheckCircle } from 'react-icons/fi'

import './style.css';

const FullPageLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <IconContext.Provider value={{color: "#34CB79", style: { strokeWidth: 3, verticalAlign: 'middle'}}}>
                
                    <h2><span><FiCheckCircle/></span> Cadastro realizado com sucesso!</h2>

                </IconContext.Provider>
            </div>
        </div>
    );
};


export default FullPageLoader;