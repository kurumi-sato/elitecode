const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Correct from "./screens/Correct";
import SelectOnClick from "./screens/SelectOnClick";
import Home from "./screens/Home";
import SelectOnMouseOut from "./screens/SelectOnMouseOut";
import SelectOnChange from "./screens/SelectOnChange";
import OnMouseOutFrame from "./screens/OnMouseOutFrame";
import OnChangeFrame from "./screens/OnChangeFrame";
import OnMouseOverFrame from "./screens/OnMouseOverFrame";
import SelectOnMouseOver from "./screens/SelectOnMouseOver";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Correct"
              component={Correct}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectOnClick"
              component={SelectOnClick}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectOnMouseOut"
              component={SelectOnMouseOut}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectOnChange"
              component={SelectOnChange}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnMouseOutFrame"
              component={OnMouseOutFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnChangeFrame"
              component={OnChangeFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnMouseOverFrame"
              component={OnMouseOverFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectOnMouseOver"
              component={SelectOnMouseOver}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
