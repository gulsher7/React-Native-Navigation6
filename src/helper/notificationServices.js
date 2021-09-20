import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}


const getFcmToken = async () => {
    let checkToken = await AsyncStorage.getItem('fcmToken')
    console.log("the old token", checkToken)
    if (!checkToken) {
        try {
            const fcmToken = await messaging().getToken()
            if (!!fcmToken) {
                console.log("fcme token generated", fcmToken)
                await AsyncStorage.setItem('fcmToken', fcmToken)
            }
        } catch (error) {
            console.log("error in fcmToken", error)
            alert(error?.message)
        }
    }
}

export const notificationListener = async() =>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
          console.log("backgrund state",remoteMessage.notification)  
      });
  
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            console.log("remote message",remoteMessage.notification)  
          }
        })
}