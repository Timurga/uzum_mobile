import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главный экран</Text>
      <Button
        title="Рассчитать"
        onPress={() => navigation.navigate('Создание товара')}
      />
      <Button
        title="Сохраненное"
        onPress={() => navigation.navigate('Results')}
      />
    </View>
  );
}

export default HomeScreen;