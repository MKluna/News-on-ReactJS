import React,{Component,Fragment} from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'


class App extends Component {
    state = 
    { 
        noticias:[]
     }


     componentDidMount() 
    {
        this.consultarnoticias();
    }


    consultarnoticias = async (categoria = 'general')=>
    {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=20918b521dc547a6b90b098085602c98`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        
        console.log(noticias);


        this.setState({
            noticias:noticias.articles
        })
    }


    render() 
    { 
        return (
            <Fragment>
                <Header
                titulo='Diario Matias ReactJS API'
                />
                <div className="container white contenedor-noticias">
                    
                    <Formulario
                        consultarnoticias={this.consultarnoticias}
                    />
                    
                    
                    <ListaNoticias
                    noticias={this.state.noticias}
                    />
                </div>
            </Fragment>
        );
    }
}
 
export default App;

