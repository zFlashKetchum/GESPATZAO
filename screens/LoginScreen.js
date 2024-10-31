import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import backgroundImage from '../assets/background.png';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
            <View style={{ height: 66 }} /> 

      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>Bem-Vindo</Text>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Icon name="person" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="login"
              placeholderTextColor="#888"
              value="usuario" // Valor padrão para apresentação
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={!passwordVisible}
              value="senha123" // Valor padrão para apresentação
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? "visibility-off" : "visibility"}
                size={20}
                color="#555"
                style={styles.eye}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Password"
              placeholderTextColor="#888"
              secureTextEntry={!confirmPasswordVisible}
              value="senha123" // Valor padrão para apresentação
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Icon
                name={confirmPasswordVisible ? "visibility-off" : "visibility"}
                size={20}
                color="#555"
                style={styles.eye}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Blank')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Faz com que a imagem de fundo ocupe toda a tela
    justifyContent: 'flex-start', // Alinha o conteúdo para o topo
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinhar o conteúdo para o topo
    alignItems: 'center',
    backgroundColor: 'transparent', // Define o fundo como transparente para mostrar a imagem de fundo
    paddingTop: 20, // Espaço no topo
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center', // Centraliza o título horizontalmente
    paddingTop: -50, // Espaço no topo para o título
    paddingBottom: 80, // Espaçamento abaixo do título
  },
  header: {
    fontSize: 32,
    color: '#1a2e5c',
    fontWeight: 'bold',
    zIndex: 1, // Garante que o conteúdo de login fique acima das formas de fundo
  },
  inputWrapper: {
    width: '80%', // Define a largura dos campos de entrada
    alignItems: 'center', // Centraliza os campos de entrada
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%', // Usa a largura total do wrapper
    zIndex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    borderWidth: 0,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  eye: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    width: '100%', // Garantir que o botão fique centralizado
    alignItems: 'center',
    marginBottom: 20, // Ajuste aqui para mais espaço
    position: 'absolute', // Coloca o contêiner do botão no fundo azul
    bottom: 20, // Ajusta a distância do fundo
  },
  button: {
    width: '80%', // Largura do botão
    padding: 15,
    backgroundColor: '#F4A400', // Mesmo laranja do botão anterior
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 130,
    color: '#F4A400',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto
  },
});