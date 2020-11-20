import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const DetailPage = (props) => {
  const {navigation, route} = props
  const {userName, setUserName} = route.params
  const [text, setText] = React.useState(userName)
  return (
    <View style={styles.body}>
      <Text>请输入用户名：</Text>
      <TextInput value={text} onChangeText={setText}></TextInput>
      <Button title="返回Home" onPress={() => {
        setUserName(text)
        navigation.goBack()
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  input:{
    borderColor:'gray',
    borderStyle:'solid',
    borderWidth:1,
    margin:10
  }
});

export default DetailPage