import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableHighlight } from 'react-native';

import * as Constants from './Consts'
import * as Styles from './Styles'

const Separator = () => (
  <View style={Styles.separator.separator} />
);

export default class ListOfProblems extends React.Component {

choosePhoto(id) {
  return Constants.IMAGES[id % Constants.IMAGES.length].source;
}

printProblems(){
  let res = Constants.PROBLEMS.map(problem =>
    <>
      <TouchableHighlight style={Styles.styleListOfProblem.container_problem} 
                          key={problem.id + '_list_' + problem.prefix} 
                          underlayColor={Styles.underlayColor}
                          onPress={() => {this.props.navigation.navigate('InsideCategory', {category: problem.top, 
                                                                                            problems: problem.inside,
                                                                                            prefix:   problem.prefix})}}>
      <>
        <Image style={Styles.styleListOfProblem.images} 
               source={this.choosePhoto(problem.id)}
               key={problem.id + '_list_' + problem.prefix + '_image'}  />

        <Text style={Styles.styleListOfProblem.txt} 
              key={problem.id + '_list_' + problem.prefix + '_text'} >
          {problem.name}
        </Text>
        
        </>
      </TouchableHighlight>
      <Separator  key={problem.id + '_sep_problems'} />
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
}