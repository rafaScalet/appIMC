import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Calcular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUganda: require('./img/uganda.jpg')
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={this.state.imgUganda}
                    style={styles.img}
                />
                <Text style={{ paddingTop: 15, color: '#0f0', fontSize: 28, textAlign: 'center', fontWeight: 'bold' }}>
                    cu
                </Text>

                <Text style={{ paddingTop: 15, color: '#FFF', fontSize: 24, fontWeight: 'bold' }}>
                    Css
                </Text>
                <Text style={{ paddingTop: 15, color: '#FFF', fontSize: 16 }}>
                    IN
                </Text>
                <Text style={{ paddingTop: 15, color: '#FFF', fontSize: 16 }}>
                    AJFIO
                </Text>

                <TouchableOpacity style={styles.botao} onPress={this.props.fechar}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Calcular novamente</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400
    },
    img: {
        width: 150,
        height: 150
    },
    botao: {
        flex: 1,
        height: 20,
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