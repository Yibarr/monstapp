import React, { Component,Fragment } from 'react'

import { Login } from "../Login/Login";
import { ImgUp } from "../ImgUp/ImgUp";

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';


export class Display extends Component {

    constructor(props){
        super()
        this.state={
            logged : false
        }
    }

    log(){
        return this.state.logged ? <ImgUp/> : <Login/>
    }

    showLoginBtn(){
        console.log(this.state.logged)
        if(!this.state.logged){
            return <Button
                        style={{backgroundColor:'#000',borderRadius:20}}
                        onPress={() => {
                            return this.setState({logged:!this.state.logged})
                        }}
                        title="Iniciar sesión"
                        color='#000'
                    />
        }
    }
    render() {
        return (
            <Fragment>
                {this.log()}
                <View style={styles.loginBtn}>
                    {this.showLoginBtn()}
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    loginBtn:{
        width:150,
        alignSelf:'center'
    },
    btn:{
        backgroundColor:'#000',
        color:'#FFF',
        borderRadius:15
    }
})

export default Display
