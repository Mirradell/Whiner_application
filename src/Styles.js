import { StyleSheet, View } from 'react-native';

export const underlayColor = '#BCD7EC';

export const separator = StyleSheet.create({
	separator: {
	    marginVertical: 8,
	    borderBottomColor: '#090974',
	    borderBottomWidth: 1.5,
	}
});
/*
export const Separator = () => {
  return <View style={separator.separator} />};//*/

export const styleHeader = StyleSheet.create({
// ----------------------------------- Header -----------------------------------
  container_all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  container_greeting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  images: {
    width: 30,
    height: 30,
  },

  txt_black_center: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },

  btn: {
  	paddingHorizontal: 5,
  },
});

export const styleCreateNewProblem = StyleSheet.create({
// ------------------------------- Create New Problem ---------------------------
  
  container_all: {
    flex: 4,
    padding: '3%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    flexDirection: 'column',//*/
    backgroundColor: '#88B5D8',
  },

  container_part: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  container_part_button: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  container_input_and_message: {
  	flex: 1,
  	width: '100%',
  	minHeight: '80%',
  	marginVertical: 5,
  	flexDirection: 'column',
  	justifyContent: 'flex-start',
  },

  container_images: {
  	flex: 1,
  	//height: '25%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },

  container_button: {
  	flex: 1,
  	padding: 5,
  },

  text_input: {
  	paddingLeft: 25,
  	minHeight: '80%',
  	borderWidth: 2,
  	borderRadius: 2,
  },

  text_input_not_error: {
  	borderColor: '#090974',
  },

  text_input_error: {
  	borderColor: 'red', 
  },

  images: {
    width: 60,
    height: 60,
  },

  txt_error: {
  	color: 'red',
  },

  txt: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
    width: '35%',
  },

  btn: {
  	width: 65,
  	height: 65,
  	borderWidth: 2,
  	borderRadius: 2,
  	marginBottom: 5,
  },

  btn_not_selected: {
  	borderColor: '#090974',
  },

  btn_selected: {
  	borderColor: 'white',
  },

  touchable: {
  	textAlign: 'center',
  	justifyContent: 'center',
  	width: '100%',
  	height: '90%',
  }
});

export const styleInsideCategory = StyleSheet.create({ 
// ----------------------------------------- Inside Category --------------------------------
	container_list: {
    flex: 8,
    //paddingRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //background: require('../images/background.png'),
    backgroundColor: '#88B5D8',
    //width: '100%',
  },

  container_scroll: {
    width: '100%',
  },

  container_problem: {
    flex: 1,
    padding: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
//*/
  images: {
    width: 50,
    height: 50,
  },

  txt: {
    color: 'black',
    textAlign: 'left',
    fontSize: 17,
    width:'85%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export const styleMainPage = StyleSheet.create({
// ------------------------------------------------ Main Page ------------------------------
  container_text: {
    flex: 1.1,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  container_all: {
    flex: 1,
    backgroundColor: '#88B5D8',
  },

  txt: {
    //color: '#002B4F',
    color: '#FFFC9A',
    textAlign: 'center',
    fontSize: 30,
    width: '95%',
    flex:1,
},
});

export const styleListOfProblem = StyleSheet.create({
//--------------------------------------------------- ListOfProblems ----------------------------
  container_list: {
    flex: 8,
    //paddingRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#88B5D8',
    //width: '100%',
  },

  container_scroll: {
    width: '100%',
  },

  container_problem: {
    flex: 1,
    padding: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
//*/
  images: {
    width: 50,
    height: 50,
  },

  txt: {
    color: 'black',
    textAlign: 'left',
    fontSize: 17,
    width:'85%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
