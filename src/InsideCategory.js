import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button,
				 TextInput, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Router } from 'react-router-dom'
import ReactDOM from "react-dom";

import * as Constants from './Consts'
import * as Styles from './Styles'

const Separator = () => (
  <View style={Styles.separator.separator} />
);
/*
const styles = StyleSheet.create({
	all_together: {
		flex: 1,
		alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
	}
})

export default class InsideOneCategory extends React.Component {
	printProblem() {
		return (
			<View style={styles.all_together}>
				<Image style={styles.image} source={Constants.IMAGES[0]}/>
				<Text>Название проблемы</Text>
				<Text>Категория проблемы</Text>
				<Text>Здесь будут кнопки</Text>
			</View>
		);
	}

	render() {
		return (
          <SafeAreaView style={Styles.styleListOfProblem.container_list}>
          <ImageBackground source={require('../images/background.png')} 
          									style={{width: '100%', height: '100%'}}>
            <ScrollView style={Styles.styleListOfProblem.container_scroll}>
              {this.printProblem()}
            </ScrollView>
            </ImageBackground>
          </SafeAreaView>
        );
	}
}
/*/
export default class InsideOneCategory extends React.Component {
	choosePhoto(id) {
  return Constants.IMAGES[id % Constants.IMAGES.length].source;
}

	printProblems() {
  let res = this.props.route.params.problems.map(problem =>
    <>
      <TouchableHighlight style={Styles.styleListOfProblem.container_problem} 
                          key={problem.id + '_all_problems_' + this.props.route.params.prefix} 
                          underlayColor={Styles.underlayColor}
                          onPress={() => {this.props.navigation.navigate('OneDialog')}}>
	      <>
	        <Image style={Styles.styleListOfProblem.images} 
	        			 source={this.choosePhoto(problem.id)}
	        			 key={problem.id + '_image_all_problems_' + this.props.route.params.prefix} />

	        <Text style={Styles.styleListOfProblem.txt}
	        			 key={problem.id + '_text_all_problems_' + this.props.route.params.prefix} >{problem.name}</Text>
	      </>
      </TouchableHighlight>
      <Separator  key={problem.id + '_sep_all_problems_' + this.props.route.params.prefix} />
      </>
      );
  return res;
  }
   
  render() {
        return (
          <SafeAreaView style={Styles.styleListOfProblem.container_list}>
            <ScrollView style={Styles.styleListOfProblem.container_scroll}>
              {this.printProblems()}
            </ScrollView>
          </SafeAreaView>
        );
  }
}//*/