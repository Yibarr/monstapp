import React, { Component,Fragment,PropTypes } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';



import { createStore, applyMiddleware } from 'redux'
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        };
      }


    render() {
        return (
            <Fragment>
                <View style={styles.loginContainer}>
                    <View style={styles.logoCont}>
                        <Text style={styles.bienvenido}>bienvenido</Text>
                    </View>
                    <View style={styles.userData}>
                        <View style={styles.inputCont}>
                            <View style={styles.InputIconCont}/>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Usuario"
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                            />
                        </View>
                        <View style={styles.inputCont}>
                            <View style={styles.InputIconCont}/>
                            <TextInput
                                style={styles.loginInput}
                                secureTextEntry={true}
                                placeholder="Contraseña"
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                            />
                        </View>    
                    </View>
                    <View style={styles.loginBtn}>
                        <Button
                            style={{backgroundColor:'#000',borderRadius:20}}
                            onPress={()=>{this.props.logged('LOG')}}
                            title="Iniciar sesión"
                            color='#000'
                        />
                    </View>
                </View>
            </Fragment>
        )
    }
}



const styles = StyleSheet.create({
    logoCont:{
        marginBottom:80
    },
    bienvenido:{
      fontSize:50,
      alignSelf:'center',
      color:'#FFF',
      fontWeight:'200'
    },
    loginContainer:{
      display:'flex',
      justifyContent:'center',
      width:'100%',
    },
    loginInput:{
      height:50,
      width:200,
      backgroundColor:'#FFF',
      alignSelf:'center',
      borderBottomRightRadius:10,
      borderTopRightRadius:10,
      marginBottom:10,
      fontSize:15,
    },
    InputIconCont:{
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    inputCont:{
        flexDirection: 'row',
        alignSelf:'center'
    },
    loginBtn:{
        width:150,
        alignSelf:'center'
    },
    btn:{
        backgroundColor:'#000',
        color:'#FFF',
        borderRadius:15
    },
    userData:{
        marginBottom:50
    }
  });

export default Login


