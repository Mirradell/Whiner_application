import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button,
				 TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Router } from 'react-router-dom'
import ReactDOM from "react-dom";

import * as Constants from './Consts'
import * as Styles from './Styles'
import * as Bot from './Bot'

const Separator = () => (
  <View style={Styles.separator.separator} />
);

const style = StyleSheet.create({
  container_scroll: {
    width: '100%',
    height: '80%',
  },

  container_input_and_button: {
    flex: 1,
    paddingHorizontal: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  container_input: {
    width: '90%',
    paddingLeft: 25,
    borderWidth: 2,
    borderRadius: 2,
    marginRight: 5,
  },

  container_list: {
    flex: 1,
    //paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
    //background: require('../images/background.png'),
    backgroundColor: '#88B5D8',
  },

  from: {
    color: 'black',
    textAlign: 'left',
  },

  to: {
    color: 'blue',
    textAlign: 'right',
  },

  common: {
    padding: 5,
  },

  img: {
    width: 30,
    height: 30,
  }
})

export default class OneDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      MESSAGES: Constants.MESSAGES
    };
  }

  sendMessage(messageText) {
    if (messageText === '') return;

    let rand = Math.round(Math.random() * 100) % Bot.PHRASES.length;
    let my_message = {message: messageText, from: 'second', id: this.state.MESSAGES.length + 1};
    let bot_answer = {message: Bot.PHRASES[rand].phrase, from: 'first', id: this.state.MESSAGES.length + 1};

    this.setState({message: '', MESSAGES: [bot_answer, my_message, ...this.state.MESSAGES]});
  }

	printMessages() {
    let res = this.state.MESSAGES.map(message =>
      <>
        <Text style={[message.from == 'first' ? style.from : style.to, style.common]}>{message.message}</Text>
        <Separator />
      </>
      );
  return res;
  }
   
  render() {
        return (
          <SafeAreaView style={style.container_list}>
           
            <View style={style.container_input_and_button}>
              <TextInput  style={style.container_input} 
                          multiline
                          value={this.state.message}
                          placeholder={'Начните писать свое сообщение здесь...'}
                          onChangeText={text => this.setState({message: text})} />
              <TouchableHighlight style={{marginLeft: 5}}
                                         underlayColor={Styles.underlayColor}
                                         onPress={() => this.sendMessage(this.state.message)}>
                <Image style={style.img} source={require('../images/send_message.png')} />
              </TouchableHighlight>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} 
                        style={style.container_scroll}>
              {this.printMessages()}
            </ScrollView>
           
          </SafeAreaView>
        );
  }
}