import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Todo from './Todo'
import { Provider } from "react-redux";
import store from "./store";


export default function App() {
  return (
    <Provider store={store}>
       <Todo /> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
