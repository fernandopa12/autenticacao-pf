import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './src/services/firebaseConfig';


export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function cadastrar() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {

        const user = userCredential.user;

        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)

      });
  }

  async function esqueciSenha() {
    //console.log("Reset de senha enviado para "+email)
    await sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert("Reset de senha enviado para "+email)
    })
    .catch(function(e){
      console.log(e)
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu email'
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />

      <TouchableOpacity onPress={cadastrar}>
        <Text>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={esqueciSenha}>
        <Text>Esqueci a senha</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
