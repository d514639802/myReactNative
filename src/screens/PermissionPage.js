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
import { useNavigation } from '@react-navigation/native';

const PermissionPage = () => {
  const navigation = useNavigation();
  const [permissionsGranted, setPermissionsGranted ] = React.useState(false);
  // 一次学习，随处编写
  const askForPermissions = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ];
      if(Platform.OS === "android"){
        PermissionsAndroid.requestMultiple(permissions).then(results=>{
          const allPermissionsGranted = Object.values(results).every(
            result => result === "granted")
          if(allPermissionsGranted){
            setPermissionsGranted(true)
          }
        })
      } else {
        setPermissionsGranted(true)
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={styles.body}>
      <Button title="请求授权"  onPress={askForPermissions} />
      <Text>{permissionsGranted?"已授权":"未授权"}</Text>
      <Button title="返回Home" onPress={() => navigation.goBack()}></Button>
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

export default PermissionPage