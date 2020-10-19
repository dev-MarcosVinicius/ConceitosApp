import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaCerbras from "./TelaCerbras";
import TelaDuraplik from "./TelaDuraplik";
import TelaImagem from "./TelaImagem";
import TelaImagemDuraplik from "./TelaImagemDuraplik";

const Stack = createStackNavigator();

const cerbrasOptionStyle = {
  headerStyle: {
    height: 50,
    backgroundColor: "#006400",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
    
  },
  headerTintColor: '#006400',
  headerBackTitle: "Voltar",
};

const duraplikOptionStyle = {
  headerStyle: {
    height: 50,
    backgroundColor: "#00688B",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10

  },
  headerTintColor: '#00688B',
  headerBackTitle: "Voltar",
};

// Chama a TelaImagem para dentro da TelaCerbras

const CerbrasStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={cerbrasOptionStyle} initialRouteName="Cerbras">
      <Stack.Screen name="Cerbras" component={TelaCerbras} />
      <Stack.Screen name="Imagem" component={TelaImagem} />
    </Stack.Navigator>
  );
};

// Chama a TelaImagem para dentro da TelaDuraplik

const DuraplikStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={duraplikOptionStyle}>
      <Stack.Screen name="Duraplik" component={TelaDuraplik} />
      <Stack.Screen name="Imagem" component={TelaImagemDuraplik} />      
    </Stack.Navigator>
  );
};
export { CerbrasStackNavigator, DuraplikStackNavigator };