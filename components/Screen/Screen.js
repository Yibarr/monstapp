import React, { Component,Fragment } from 'react'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'

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

import reducer from '../../reducers/Log'

const store = createStore(reducer)

const action = type => store.dispatch({type})

export class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged:false
        };
      }

    componentSelection(){
        console.log(store.getState())
        return  this.state.logged ? <ImgUpload/> : <Login logged={action('LOG')}/>
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
