import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PermissionsAndroid,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const HomePage = (props) => {
  const { navigation } = props
  const [userName, setUserName] = React.useState('')
  return (
    <View style={styles.body}>
      <Text>输入的用户名：{userName}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail', {
            userName,
            setUserName
          })
        }}
      />
      <Button
        title="Go to Permission"
        onPress={() => navigation.navigate('Permission')}
      />
      <Button
        title="Go to NineLayout"
        onPress={() => navigation.navigate('NineLayout')}
      />
      <Button
        title="Go to WebView"
        onPress={() => navigation.navigate('WebView')}
      />

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
  }
});

export default HomePage