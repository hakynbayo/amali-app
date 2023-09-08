import React from 'react';
import { View } from 'react-native';
// import SetPin from './app/Screens/SetPin';
// import Login from './app/Screens/Login';
// import ResetPin from './app/Screens/ResetPin';
import GetStarted from './app/Screens/GetStarted';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, width: "100%", }}>
      {/* <SetPin /> */}
      {/* <Login/> */}
      {/* <ResetPin/> */}
      <GetStarted />
    </View>
  );
};

export default App;
