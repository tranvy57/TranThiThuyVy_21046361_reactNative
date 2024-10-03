import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={{ padding: 20 , gap: 5}}>
      <Image source={require('./assets/vs_blue.png')} style= {{height: 300, width: 250}} />

      <Text style={{ fontWeight: 'bold' }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />

        <Text style={{ marginLeft: 20 }}>(Xem 828 đánh giá) </Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>1.790.000 đ</Text>
        <Text
          style={{
            marginLeft: 20,
            textDecorationLine: 'line-through',
            fontWeight: 'bold',
            color: 'grey',
          }}>
          1.790.000 đ{' '}
        </Text>
      </View>

      <Text style={{ fontWeight: 'bold', color: 'red' }}>
        Ở ĐÂU RẺ HƠN HOÀN TIỀN{' '}
      </Text>

      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 15}}
        onPress={() =>
          navigation.navigate('Profile', {
            colors: ['#C5F1FB', '#F30D0D', '#000000', '#234896'],
          })
        }>
        <Text style={{ textAlign: 'center' }}> 4 MÀU-CHỌN MÀU</Text>
      </TouchableOpacity>

       <TouchableOpacity
          
          style={{ width: '100%', backgroundColor: 'red', padding: 10, borderRadius: 12}}
          onPress={() => {}}>
          <Text style={{ textAlign: 'center' }}> Chọn mua </Text>
        </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  const { colors } = route.params;

  const [color, setColor] = useState(colors[0]);

  return (
    <View style= {{flex: 1}}>
      <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'white' }}>
        <Image
          style={{ width: 100, height: 150, margin: 10 }}
          source={require('./assets/vs_blue.png')}
        />

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ fontSize: 20 }}>
            {' '}
            Điện Thoại Vsmart Joy {'\n'} 3 Hàng chính hãng
          </Text>
          <Text> Mau: {color}</Text>
        </View>
      </View>


      <View style={{ flex: 5, }}>
        <Text>Chon mot mau ben duoi</Text>
        <View style = {{alignItems: 'center', gap: 10}}> 
          {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={{ width: 50, height: 50, backgroundColor: color }}
            onPress={() => {
              setColor(color);
            }}
          />
          ))}
        </View>
        
        
      </View>

      <View style = {{flex: 0.7}}> 
        <TouchableOpacity
          
          style={{ width: '100%', backgroundColor: 'red', padding: 10 }}
          onPress={() => {}}>
          <Text style={{ textAlign: 'center' }}> Xong </Text>
        </TouchableOpacity>
      </View>

      
    </View>

    
  );
};

export default function App() {
  Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
