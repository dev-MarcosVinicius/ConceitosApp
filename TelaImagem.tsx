import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class TelaImagem extends Component {
 
  constructor(props) {

    super(props);
  }

  render() {
    return (
      <View style={styles.center}>
        <Image style={styles.logo} source={{ uri: this.props.route.params.item.image }} /> 
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>{this.props.route.params.item.name}</Text>
        </View>
    );
  };
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: '#006400',
    borderRadius: 8,
    margin: 5
  },
  centerimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 5
  },
  logo: {
    width: 325,
    height: 325,
    margin: 5
  } 
});
export default TelaImagem;