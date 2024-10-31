import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Importar a tela de login
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen'; // Importar a tela de recuperação de senha
import VerificationScreen from './screens/VerificationScreen'; // Importar a tela de verificação
import BlankScreen from './screens/BlankScreen'; // Importar a tela em branco
import ConsultaScreen from './screens/ConsultaScreen';
import QrCode from './screens/QRCodeScreen';
import QrCodeScreen from './screens/QRCodeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} /> 
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} options={{headerShown:false}} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={{headerShown:false}} />
        <Stack.Screen name="Blank" component={BlankScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} options={{headerShown:false}}  />
        <Stack.Screen name="QrCodes" component={QrCodeScreen} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
