import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.png';

export default function VerificationScreen() {
  const [verificationCode, setVerificationCode] = useState(['1', '2', '3', '4', '5', '6']);

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
                  <View style={{ height: 66 }} /> 

      <View style={styles.container}>
        <Text style={styles.header}>Código de verificação</Text>

        <View style={styles.codeContainer}>
          {verificationCode.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
              secureTextEntry={true} // Campo oculto para o código de verificação
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    header: {
      fontSize: 26,
      color: '#1a2e5c',
      fontWeight: 'bold',
      marginBottom: 40,
      textAlign: 'center',
      position: 'absolute',
      top: 30,
    },
    codeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 30,
      marginTop: -200,
    },
    codeInput: {
      width: 50,
      height: 60,
      backgroundColor: '#F0F0F0',
      borderRadius: 1,
      textAlign: 'center',
      fontSize: 22,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 200,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      width: '90%',
      padding: 15,
      backgroundColor: '#F4A400',
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
