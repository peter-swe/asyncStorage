import AppProvider from "./context/AppProvider";
import {NavigationContainer} from "@react-navigation/native";
import MinNavig from "./components/MinNavig";

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <AppProvider>
        <MinNavig />
      </AppProvider>
    </NavigationContainer>
  );
}
