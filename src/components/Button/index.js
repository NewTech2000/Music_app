import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function AppButton({title, ...props}) {
  return (
    <Button contentStyle={styles.content} uppercase={true} {...props}>
      <Text style={styles.title}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },

});
