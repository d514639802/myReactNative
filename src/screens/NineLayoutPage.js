import React from 'react'
import {
  StyleSheet,
  View,
  Switch,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cellWidth = width * 0.3;

// 明确状态归属，合理切分组件
const NineLayoutPage = () => {
  const [isSingleSelect, setSingleSelect] = React.useState(true)
  const [selectedIndex, setSelectedIndex] =  React.useState(-1)

  return (
    <>
      <View style={styles.switch}>
        <Switch
          onValueChange={setSingleSelect}
          value={isSingleSelect} 
        />
        <Text>{isSingleSelect?'单选':'多选'}</Text>
      </View>
      <View style={styles.cellList}>
        {isSingleSelect 
          ? [...new Array(9)].map((_, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedIndex(i)}
                style={[
                  styles.cell,
                  selectedIndex === i && { backgroundColor: 'green' },
                ]}
              />
            );
          })
        : [...new Array(9)].map((_, i) => {
            return <Cell key={i} />;
          })
        }
      </View>
    </>
  );
}

function Cell() {
  const [selected, setSelected] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[styles.cell, selected && { backgroundColor: 'green' }]}
    />
  );
}

const styles = StyleSheet.create({ 
  switch:{
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  cellList: {
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  cell:{
    height:cellWidth,
    width:cellWidth,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default NineLayoutPage