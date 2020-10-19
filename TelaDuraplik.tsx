import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import db from './DB/DB_DP.json';

class TelaDuraplik extends Component {
  arrayholder: { id: number; name: string; }[];

  constructor(props) {

    super(props);

    this.state = {
      text: '',
      data: []
    }

    this.arrayholder = db;
    this.abrirImagem = this.abrirImagem.bind(this);
  }

  componentDidMount() {
    return (
      this.setState({
        data: db,
      }, () => {
        this.arrayholder = db;
      })
    )
  }

  abrirImagem(item) {
      this.props.navigation.navigate('Imagem', { item })
  }

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

  render() {
      return (
   
        <View style={styles.MainContainer}>
   
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Pesquisa" />

<FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item, index }) => (
              <View style={{ backgroundColor: '#00688B', flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.abrirImagem( item ) }>
                    <View style={{ backgroundColor: '#00688B', borderRadius: 8, margin: 5 }}>
                    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, margin: 2 }}>
                    <Image style={styles.logo} source={{ uri: item.image }} />
                      </View>
                      </View>
                    <View style={{ backgroundColor: '#00688B', borderRadius: 50, margin: 5 }}>
                    <View style={{backgroundColor: '#FFFFFF', borderRadius: 50, margin: 2}}>
                        <Text style={{ marginLeft: 18, fontSize: 12, }}>Abrir Imagem</Text>
                        </View>
                      </View>
                  </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#00688B', borderRadius: 8, margin: 5 }}>
                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, margin: 2 }}>
                    <Text style={styles.row}>{item.name}</Text>
                    <View style={{height: 1, width: "100%", backgroundColor: "#00688B",}}/>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.icon} source={require('./assets/iconexduraplik1.png')}/>
                      <Text style={styles.row2}>{item.aplicacao}</Text>
                    </View>
                    <View style={{height: 1, width: "100%", backgroundColor: "#00688B",}}/>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Image style={styles.icon} source={require('./assets/iconex2.png')}/>
                      <Text style={styles.row2}>{item.resistencia}</Text>
                    </View>
                    <View style={{height: 1, width: "100%", backgroundColor: "#00688B",}}/>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Image style={styles.icon} source={require('./assets/iconex3.png')}/>
                      <Text style={styles.row2}>{item.secagem}</Text>
                    </View>
                    <View style={{height: 1, width: "100%", backgroundColor: "#00688B",}}/>
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
    flex: 1,
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
    backgroundColor: "#00688B"

  }
});

export default TelaDuraplik;