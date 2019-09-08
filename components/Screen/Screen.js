import React, { Component,Fragment } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';

// import Login from '../Login/Login'
import ImgUpload from '../ImgUpload/ImgUpload'
import Login from '../Login/Login';

export class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged:false
        };
      }

    componentSelection(){
        return  this.state.logged ? <ImgUpload/> : <Login/>
    }  

    render() {
        return (
            <Fragment>
                {this.componentSelection()}
            </Fragment>

        )
    }
}

const styles = StyleSheet.create({
    
  });

export default Screen
