import React, { Component,Fragment } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput
  } from 'react-native';

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
                    <View>
                        <Text style={styles.bienvenido}>bienvenido</Text>
                    </View>
                    <View>
                        <View>
                        <TextInput
                            style={styles.loginInput}
                            placeholder="Type yout username!"
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.username}
                        />
                        </View>
                        <View>
                        <View style={styles.inputIconCont}>
                            <Text style={styles.inputIconCont}> o</Text>
                        </View>
                        <TextInput
                            style={styles.loginInput}
                            secureTextEntry={true}
                            placeholder="Type your password"
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.password}
                        />
                        </View>
                    </View>
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    bienvenido:{
      fontSize:50,
      alignSelf:'center',
      color:'#FFF',
      fontWeight:'100'
    },
    loginContainer:{
      display:'flex',
      justifyContent:'center',
      width:'100%',
    },
    loginInput:{
      height:40,
      width:300,
      backgroundColor:'#FFF',
      alignSelf:'center',
    },
    InputIconCont:{
      backgroundColor:'black',
      height:40,
      width:40,
      zIndex:3
    }
  });

export default Login
