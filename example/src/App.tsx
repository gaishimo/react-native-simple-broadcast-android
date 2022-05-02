import React, { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { doBroadcast } from 'react-native-simple-broadcast-android';



export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Broadcast' onPress={useCallback(() => {
        try {
          doBroadcast("ACTION_NAME")
        } catch (e) {
          console.error(e)
        }
      }, [])} />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
