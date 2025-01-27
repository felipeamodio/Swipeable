import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Home } from "./src/app/home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Home />
    </GestureHandlerRootView>
  );
}