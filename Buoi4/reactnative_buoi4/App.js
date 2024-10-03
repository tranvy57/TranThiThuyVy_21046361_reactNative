import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count + 1);
    
  };
  const handleMinus = () => {
    if(count == 0) 
      return;
    setCount(count - 1);
    
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, { flex: 4, marginBottom: 10, padding: 15 }]}>
        <View style={[styles.row, { flex: 6, flexDirection: 'row' }]}>
          <Image style={{ flex: 1 }} source={require('./assets/book.png')} />
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              paddingLeft: 20,
              paddingRight: 10,
            }}>
            <Text style={{ fontWeight: 'bold' }}>
              Nguyên hàm tích phân và ứng dụng{' '}
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              Cung cấp bởi Tiki Tradings
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>
              148.000đ
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: 'grey',
                textDecoration: 'line-throug',
                marginBottom: 5,
              }}>
              148.000đ
            </Text>

            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'grey',
                    padding: 5,
                    fontWeight: 'bold',
                  }}
                  
                  onPress = {() => handleMinus()}>
                  <Text style={{ fontWeight: 'bold' }}>-</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', padding: 5 }}> {count}</View>
                <TouchableOpacity style={{ backgroundColor: 'grey', padding: 5 }} onPress={() => handleAdd()}>
                  <Text style={{ fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', color: 'blue' }}>
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 20,
            },
          ]}>
          <Text style={{ fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>
          <Text style={{ fontWeight: 'bold', color: 'blue' }}>Xem tại đây</Text>
        </View>
        <View style={[styles.row, { flex: 2 }]}></View>
      </View>
      <View style={[styles.row, { flex: 1, marginBottom: 10 }]}>
        <Text style = {{fontWeight: 'bold'}}> Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
      </View>
      <View style={[styles.row, { flex: 1, marginBottom: 120 , justifyContent: 'space-between', paddingHorizontal : 10, flexDirection: 'row'}]}>
         <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'gray' , }}>
              Tạm tính
            </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>
              148.000đ
            </Text>
      </View>
      <View style={[styles.row, { flex: 1.5 }]}>

        <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
         <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'gray'  }}>
              Thành tiền:
            </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>
              148.000đ
            </Text>
      </View>
      
        <TouchableOpacity style={{ width: 300, padding: 5 , backgroundColor: 'red'}} onPress={() => handleAdd()}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyConten: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    flexDirection: 'column',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
});
