import { ContextProvider } from "./src/Context/ContextProvider";
import Home from "./src/views/Home";
import VideoPlayer from "./src/views/VideoPlayer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{title: 'IPTV para mi papá'}}/>
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
