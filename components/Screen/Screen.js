import React, { Component,Fragment } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';

import Login from './components/Login/Login'


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
                <Text>Hola</Text>
                <Login/>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    
  });

export default Login
