import React from 'react';
import { ScrollView, Text } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

const Estilos = {

  principal: {
    marginVertical: 20
  }

}

class ListaItens extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { listaItens: [] }; // listaItens é um array pois os dados sendo recebidos são arrays
  }

  componentWillMount() {
    // utilizado para fazer uma requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { this.setState({ listaItens: response.data }); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  
  render() {
    const { principal } = Estilos;
    return (
      <ScrollView style={principal}>
        { this.state.listaItens.map( item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}

export default ListaItens;
