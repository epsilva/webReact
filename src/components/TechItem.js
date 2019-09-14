import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li>{tech}
            {/* 
                criar uma arow function antes da chamada do metodo parar que comando so seja
                executado quando o usuario clicar no botao.
             */}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

/**
* Definir valores defaults para propriedades
*/
TechItem.defaultProps = {
    tech: 'Oculto'
}

/**
 * Definir o tipo das propriedades
 */
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;