// BlankScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BlankScreen({ navigation }) {
  const [codigo, setCodigo] = useState('Mesa'); // Código do patrimônio
  const [marca, setMarca] = useState('IKEA'); // Marca do patrimônio
  const [cor, setCor] = useState('Madeira'); // Cor do patrimônio
  const [numero, setNumero] = useState('12345'); // Número de série
  const [descricao, setDescricao] = useState('Mesa de jantar'); // Descrição
  const [departamento, setDepartamento] = useState('Sala de Jantar'); // Departamento

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Cadastrar</Text>

        <InputField label="Patrimônio" value={codigo} setValue={setCodigo} />
        <InputField label="Marca" value={marca} setValue={setMarca} />
        <InputField label="Cor" value={cor} setValue={setCor} />
        <InputField label="Número de série" value={numero} setValue={setNumero} />
        <InputField label="Descrição" value={descricao} setValue={setDescricao} />
        <InputField label="Departamento" value={departamento} setValue={setDepartamento} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>

      <NavBar navigation={navigation} />
    </View>
  );
}

const InputField = ({ label, value, setValue }) => (
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={setValue}
    />
  </View>
);

const NavBar = ({ navigation }) => (
  <View style={styles.navBar}>
    <NavItem
      label="Cadastrar"
      icon="add-circle-outline"
      onPress={() => navigation.navigate('Blank')}
    />
    <TouchableOpacity style={styles.qrWrapper} onPress={() => navigation.navigate('QrCodes')}>
      <View style={styles.qrCircle}>
        <Icon name="qr-code" size={40} color="#fff" />
      </View>
    </TouchableOpacity>
    <NavItem
      label="Consultar"
      icon="search"
      onPress={() => navigation.navigate('Consulta')}
    />
  </View>
);

const NavItem = ({ label, icon, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Icon name={icon} size={32} color="#1A2E5C" />
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fff', paddingBottom: 120 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#1A2E5C' },
  inputWrapper: { marginBottom: 8 },
  label: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, fontSize: 16, backgroundColor: '#F5F5F5' },
  button: { backgroundColor: '#1A2E5C', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ccc', paddingVertical: 10, backgroundColor: '#fff', position: 'absolute', bottom: 0, width: '100%', height: 70 },
  navItem: { alignItems: 'center', width: 70 },
  navText: { color: '#1A2E5C', fontSize: 14, fontWeight: '600' },
  qrWrapper: { alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 25, left: '50%', marginLeft: -35 },
  qrCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#1A2E5C', alignItems: 'center', justifyContent: 'center' },
});
