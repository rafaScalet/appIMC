import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import Calcular from "./src/Calcular";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWoah: require('./src/img/woah.jpg'),
      inputPeso: '',
      inputAltura: '',
      peso: 0,
      altura: 0,
      resultado: 0,
      imc: '',
      modalVisible: false
    };
    this.calcular = this.calcular.bind(this);
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  calcular(){
    this.setState({peso : this.state.inputPeso});
    this.setState({altura : this.state.inputAltura});
    this.setState({resultado : this.state.peso / this.state.altura});

    if(this.state.resultado = 0.5){
      this.setState({ imc : 'magro' });
    } else{
      this.setState({ imc : 'gordo' });
    }
  }

  entrar() {
    this.setState({ modalVisible: true });
  }

  sair(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.imgWoah}
          style={styles.img}
        />
        <Text style={styles.titulo}>IMC</Text>

        <View style={styles.viewInput}>
          <Text style={styles.texto}>{this.state.inputAltura}</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Altura (em metros)"
            onChangeText={(valor) => this.setState({inputAltura : valor})}

          />
          <Text style={styles.texto}>{this.state.inputPeso}</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Peso (em quilos)"
            onChangeText={(valor) => this.setState({inputPeso : valor})}

          />
          <Text style={styles.texto}>{this.state.imc}</Text>

          <TouchableOpacity style={styles.botao} onPress={this.calcular}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>MEDIR</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Calcular
              fechar={() => this.sair(false)}
              imc={this.state.imc}
              peso={this.state.peso}
              altura={this.state.altura}
            />
          </View>
        </Modal>
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150
  },
  titulo: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 20
  },
  texto: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    color: 'red',
    fontWeight: 'bold',

  },
  viewInput: {
    marginTop: 20,
    width: 350
  },
  input: {
    height: 45,
    borderColor: 'red',
    borderWidth: 5,
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 20,

  },
  botao: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#c00',
    marginTop: 20
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});


export default App;