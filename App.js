import React, { useEffect } from 'react';
import { View } from 'react-native';
import { notificationListener, requestUserPermission } from './src/helper/notificationServices';
import Routes from './src/Navigation/Routes';


const App = () => {

  // useEffect(()=>{
  //   requestUserPermission()
  //   notificationListener()
  // },[])

  return (
    <View style={{flex:1}}>
    <Routes />
    </View>
  );
};

export default App;
