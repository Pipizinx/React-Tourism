import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Páginas
import Home from "./src/pages/Home";
import Camera from "./src/pages/Camera";
import Location from "./src/pages/Location";
import Accelerometer from "./src/pages/Accelerometer";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: "#006D2C" },
          drawerActiveBackgroundColor: "#045927ff",
          drawerActiveTintColor: "#ffffffff",

          drawerInactiveBackgroundColor: "#41AB5D",
          drawerInactiveTintColor: "#ffffffff",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="map" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Camera"
          component={Camera}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <FontAwesome name="camera" size={size} color={color} />
              );
            },
          }}
        />

        <Drawer.Screen
          name="Location"
          component={Location}
          options={{
            drawerIcon: ({ color, size }) => {
              return <AntDesign name="compass" size={24} color="white" />;
            },
          }}
        />

        <Drawer.Screen
          name="Accelerometer"
          component={Accelerometer}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <AntDesign name="number" size={24} color="white" />
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
