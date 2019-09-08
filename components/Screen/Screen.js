import React, { Component,Fragment } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';

import Login from '../Login/Login'


export class Screen extends Component {
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
                <Login/>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    
  });

export default Screen
