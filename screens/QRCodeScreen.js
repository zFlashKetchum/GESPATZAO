// QrCodeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importe a imagem do QR code
import qrCodeImage from '../assets/qrcodre.png';

export default function QrCodeScreen({ navigation }) {
  const [codigo, setCodigo] = useState('');

  return (
    
    <View style={styles.mainContainer}>
              <View style={{ height: 100 }} /> 
      <Text style={styles.header}>QR CODE</Text>

      <View style={styles.qrContainer}>
        <Image source={qrCodeImage} style={styles.qrImage} />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Digitar Código</Text>
        <TextInput
          style={styles.input}
          placeholder="código"
          value={codigo}
          onChangeText={setCodigo}
        />
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Blank')}
        >
          <Icon name="add-circle-outline" size={32} color="#1A2E5C" />
          <Text style={styles.navText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.qrWrapper}>
          <View style={styles.qrCircle}>
            <Icon name="qr-code" size={40} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Consulta')}
        >
          <Icon name="search" size={32} color="#1A2E5C" />
          <Text style={styles.navText}>Consultar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A2E5C',
    marginBottom: 40,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  inputWrapper: {
    width: '90%',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
  },
  navItem: {
    alignItems: 'center',
    width: 70,
  },
  navText: {
    color: '#1A2E5C',
    fontSize: 14,
    fontWeight: '600',
  },
  qrWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    left: '50%',
    marginLeft: -35,
  },
  qrCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1A2E5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
