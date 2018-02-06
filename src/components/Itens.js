import React from 'react';
import { View, Text, Image } from 'react-native';

const Estilos = {

  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'lightyellow'
  },

  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },

  tituloItem: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'skyblue',
    marginBottom: 5
  },

  valorItem: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  textoItem: {
    fontSize: 15,
    flex:1
  }

}

class Itens extends React.Component {
  render() {
    const { item, detalhesItem, tituloItem, valorItem, textoItem } = Estilos;
    return (
      <View style={item}>
        <View>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />          
        </View>

        <View style={detalhesItem}>
          <Text style={tituloItem}>{this.props.item.titulo}</Text>
          <Text style={valorItem}>R$: {this.props.item.valor}</Text>
          <Text style={textoItem}>Local: {this.props.item.local_anuncio}</Text>
          <Text style={textoItem}>Publicação: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

export default Itens;