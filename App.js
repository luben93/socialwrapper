import React from 'react';
import { StyleSheet, Text, View,Button,WebView } from 'react-native';
// import { Webbrowser } from 'react-native-webbrowser';
// import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class App extends React.Component {
  render() {
    return (
      // <Button
      // onPress={onPressLearnMore}
      // title="home"
      // color="#841584"
      // />

      <WebView
        source={{uri: 'https://m.facebook.com'}}
        style={{marginTop: 20}}
        userAgent='Mozilla/5.0 (Linux; U; Android 7.0; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 OPR/33.0.2254.125672'
        onLoad = {logging}
        onMessage = {logging}
        onNavigationStateChange = {logging}
      />
    );
  }
}

function logging(data) {
  console.log(data);
}

function onPressLearnMore(){
  console.log("butt");
}
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <WebView
//               source={{uri: 'https://m.facebook.com'}}
//               style={{marginTop: 20}}
//               userAgent='Mozilla/5.0 (Linux; U; Android 7.0; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 OPR/33.0.2254.125672'
//               // onMessage = {logging}
//             />
//     );
//   }
// }
//
// class ChatScreen extends React.Component {
//   render() {
//     return (
//       <WebView
//               source={{uri: 'https://m.facebook.com/messages'}}
//               style={{marginTop: 20}}
//               userAgent='Mozilla/5.0 (Linux; U; Android 7.0; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 OPR/33.0.2254.125672'
//             />
//     );
//   }
// }
//
// export default TabNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: ChatScreen },
//   // Search: { screen: HomeScreen },
// });
//
// class HomeScreen extends React.Component {
//
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//               /* 1. Navigate to the Details route with params */
//               this.props.navigation.navigate('Details', {
//                 itemId: 86,
//                 otherParam: 'anything you want here',
//               });
//             }}
//         />
//       </View>
//     );
//   }
// }
//
// class DetailsScreen extends React.Component {
//   render() {
//
//       const { params } = this.props.navigation.state;
//   const itemId = params ? params.itemId : null;
//   const otherParam = params ? params.otherParam : null;
//
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => this.props.navigation.navigate('Details')}
//       />
//       <Button
//         title="Go back"
//         onPress={() => this.props.navigation.goBack()}
//       />
//     </View>
//
//     );
//   }
// }
//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
//
// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//
//
//     navigationOptions: {
//       title: "hej",
//       headerTitle: "hrop",
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerRight: (
//         <Button
//           onPress={() => alert('This is a button!')}
//           title="Info"
//           color="#fff"
//         />
//       ),
//     },
//   }
//
// );
//
//
