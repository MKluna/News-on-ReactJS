import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = { 
        Categorias : ''
     }

     componentDidMount(){
         this.setState({
             Categorias : 'general'
         })
     }

     CambiarCategoria = e =>{
         this.setState({
             Categorias : e.target.value
         }, ()=>{

            //pasarlo a la pagina principal


            this.props.consultarnoticias(this.state.Categorias)
         });
     }


     

    render() 
    { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias Por Categorias</h2>
                        <div className="input-field col s12">
                            <select 
                                onChange={this.CambiarCategoria}
                            >
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="entertainment">Entretenimiento</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencia</option>
                                    <option value="technology">Tecnologia</option>
                                    <option value="sports">Deporte</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}


Formulario.propTypes={
    consultarnoticias : PropTypes.func.isRequired
}
 
export default Formulario;