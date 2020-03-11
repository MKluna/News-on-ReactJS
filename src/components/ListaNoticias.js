import React from 'react';
import Noticias from './Noticias'
import PropTypes from 'prop-types';

const ListaNoticas = ({noticias}) => ( 
         <div className="row">
             {noticias.map(noticias=>(
                <Noticias
                key={noticias.url}
                noticias={noticias}
                />
             ))}
         </div>


);

ListaNoticas.propTypes={
    noticias : PropTypes.array.isRequired
}
 
export default ListaNoticas;