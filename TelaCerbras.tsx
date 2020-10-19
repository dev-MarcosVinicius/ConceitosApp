import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import db from './DB/DB.json';

// Carrega a TelaCerbras 
class TelaCerbras extends Component {
    // Chama as propriedades do array DB.json
    arrayholder: ({ id: number; name: string; image: string; tamanho: string; tipologia: string; acabamento: string; resistencia: string; junta: string; superficie: string; design: string; trafego: string; variacao: string; espessura: string; } | { id: number; name: string; image: string; tamanho?: undefined; tipologia?: undefined; acabamento?: undefined; resistencia?: undefined; junta?: undefined; superficie?: undefined; design?: undefined; trafego?: undefined; variacao?: undefined; espessura?: undefined; })[];

  // Declaraçao inicial do State, Arrayholder e da função abrir imagem
    constructor(props) {

      super(props);

      this.state = {
        text: '',
        data: []
      }

      this.arrayholder = db;
      this.abrirImagem = this.abrirImagem.bind(this);
    }

  // Função que seta o state com os dados do DB e da Callback atribuindo o DB ao arrayholder
    componentDidMount() {
      return (
        this.setState({
          data: db,
        }, () => {
          this.arrayholder = db;
        })
      )
    }

  // Função que chama a TelaImagem passando como parametro o item = Data
    abrirImagem(item) {
        this.props.navigation.navigate('Imagem', { item })
    }

  // Função que realiza a pesquisa dentro do array
    searchData(text: string) {
      const newData = this.arrayholder.filter((item: { name: string; }) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });

      this.setState({
        data: newData,
        text: text
      })
    }

  // Função que adiciona o separador nos itens dentro do array
    itemSeparator = () => {
      return (
        <View
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "#FFF",
          }}
        />
      );
    }

  // Função que renderiza os componentes na tela
    render() {   
      return (
         // View do Fundo da tela
        <View style={styles.MainContainer}>
          
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.searchData(text)}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Pesquisa" />
          
          
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item, index }) => (
              // View do item da lista
              <View style={{ backgroundColor: '#006400', flex: 1, flexDirection: 'row', borderRadius: 10 }}>
                <View>
                  <TouchableOpacity onPress={() => this.abrirImagem( item ) }>
                      <View style={{ backgroundColor: '#006400', borderRadius: 8, margin: 5 }}>
                      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, margin: 2 }}>
                        <Image style={styles.logo} source={{ uri: item.image }} />
                      </View>
                    </View>
                    
                    <View style={{ backgroundColor: '#006400', borderRadius: 8, margin: 5 }}>
                    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, margin: 2 }}>
                        <Text style={{ marginLeft: 18, fontSize: 12, }}>Abrir Imagem</Text>
                   </View>
                   </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#006400', borderRadius: 8, margin: 5 }}>
                  <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, margin: 2 }}>
                    <Text style={styles.row}>{item.name}</Text>
                    
                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_formato.png')} />
                      <Text style={styles.row2}>{item.tamanho}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_tipologia.png')} />
                      <Text style={styles.row2}>{item.tipologia}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_acabamento_de_bordas.png')} />
                      <Text style={styles.row2}>{item.acabamento}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_antiderrapante.png')} />
                      <Text style={styles.row2}>{item.resistencia}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_junta_minima.png')} />
                      <Text style={styles.row2}>{item.junta}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_textura.png')} />
                      <Text style={styles.row2}>{item.superficie}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_porcelanato_design.png')} />
                      <Text style={styles.row2}>{item.design}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_porcelanato_local_de_trafego.png')} />
                      <Text style={styles.row2}>{item.trafego}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_variacao.png')} />
                      <Text style={styles.row2}>{item.variacao}</Text>
                    </View>

                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image style={styles.icon} source={require('./assets/icon_porcelanato_espessura.png')} />
                      <Text style={styles.row2}>{item.espessura}</Text>
                    </View>
                    
                    <View style={{ height: 1, width: "100%", backgroundColor: "#006400", }} />
                  </View>
                </View>
              </View>
            )
            }
            style={{ marginTop: 10 }} />

        </View>
      );
    }
}
    
const styles = StyleSheet.create({

  MainContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    margin: 5
  },
  icon: {
    width: 30,
    height: 30,
    margin: 3
  },
  row: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 12
  },
  row2: {
    fontSize: 14,
    paddingTop: 10,
    paddingLeft: 5
  },

  textInput: {
    marginTop: 13,
    fontSize: 18,
    textAlign: 'center',
    height: 42,
    borderWidth: 1.8,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: "#006400",
    color: '#FFFFFF'

  }
});

export default TelaCerbras;