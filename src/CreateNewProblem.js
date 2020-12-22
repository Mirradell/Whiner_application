import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,
				 TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Router } from 'react-router-dom'
import ReactDOM from "react-dom";

import * as Constants from './Consts'
import * as Styles from './Styles'

const Button = (props) => (
	<TouchableHighlight style={[Styles.styleCreateNewProblem.touchable, {backgroundColor: props.buttonColor}]}
											underlayColor = {props.buttonColor}
											onPress={() => {props.buttonTitle === 'Отмена' ? 
																				props.navigation.goBack() : 
																				props.navigation.navigate('MainPage')}}>
		<Text style={{color: 'white', textAlign: 'center'}}>{props.buttonTitle}</Text>
	</TouchableHighlight>
);

export default class CreateNewProblem extends React.Component {
	constructor(props){
	  super(props);
    this.state ={ choosenImageNumber: -1,
    							errorMessageWrognName: 'Слишком короткое название',
    							isErrorInName: false
    						};
  //  this.handleProblemNameChange = this.handleProblemNameChange.bind(this);
	}

	handleProblemNameChange(text) {
    if (text.length < 10)
      this.setState({ isErrorInName: true });
    else this.setState({ isErrorInName: false });//*/
    return false;
  }

	renderPossibleImages() {
		let res = Constants.IMAGES.map(image =>
			<TouchableHighlight key={image.id + '_image'} 
													style={[Styles.styleCreateNewProblem.btn, image.id === this.state.choosenImageNumber ? 
																																		 Styles.styleCreateNewProblem.btn_selected : 
																																		 Styles.styleCreateNewProblem.btn_not_selected ]} 
													underlayColor={Styles.underlayColor}
													onPress={() => {this.setState({choosenImageNumber: image.id})}}>
        <Image style={Styles.styleCreateNewProblem.images} source={image.source}/>
      </TouchableHighlight>
		);
		return res;
	}

	ShowErrorMessage(isError, errorMessage) {
		return isError ? <Text style={Styles.styleCreateNewProblem.txt_error}>{errorMessage}</Text> : <></>;
	}

	render () {
		return (
          <SafeAreaView style={Styles.styleCreateNewProblem.container_all}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{width: '100%'}}>
				<View style={Styles.styleCreateNewProblem.container_part}>
					<Text style={Styles.styleCreateNewProblem.txt}>Название проблемы </Text>
					<View style={Styles.styleCreateNewProblem.container_input_and_message}>
					<TextInput	style={[Styles.styleCreateNewProblem.text_input, this.state.isErrorInName ? 
																																	Styles.styleCreateNewProblem.text_input_error : 
																																	Styles.styleCreateNewProblem.text_input_not_error]} 
        						  multiline
        						  placeholder={'Введите здесь название проблемы'}
        						  onChangeText={text => this.handleProblemNameChange(text)}
        						  />
        		{this.ShowErrorMessage(this.state.isErrorInName, this.state.errorMessageWrognName)}
        	</View>
				</View>
				
				<View style={Styles.styleCreateNewProblem.container_part}>
					<Text style={Styles.styleCreateNewProblem.txt}>Категория проблемы </Text>
					<View style={Styles.styleCreateNewProblem.container_input_and_message}>
					<TextInput style={[Styles.styleCreateNewProblem.text_input, Styles.styleCreateNewProblem.text_input_not_error]}
        						  multiline
        						  placeholder={'Введите здесь категорию проблемы'}/>
        	</View>
				</View>

				<View style={Styles.styleCreateNewProblem.container_part}>
					<Text style={Styles.styleCreateNewProblem.txt}>Выберите обложку для проблемы</Text>
					<View style={Styles.styleCreateNewProblem.container_images}>
						{this.renderPossibleImages()}
					</View>
				</View>

				<View style={Styles.styleCreateNewProblem.container_part_button}>
					<View style={Styles.styleCreateNewProblem.container_button}>
						<Button buttonColor='#090974' buttonTitle='Отмена' navigation={this.props.navigation} />
					</View>

					<View style={Styles.styleCreateNewProblem.container_button}>
						<Button buttonColor='#B07104' buttonTitle='Создать проблему' navigation={this.props.navigation} />
					</View>
				</View>
				</ScrollView>
			</SafeAreaView>
			)
	}
}