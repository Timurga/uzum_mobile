import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Animated, Button } from 'react-native';
import { StyleSheet } from 'react-native-web';

const CalculatorScreen = ({ navigation }) => {
  const [result, setResult] = useState('');
  const [outcomeBtn, setOutcomeBtn] = useState('+');

  const [nds, setNds] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [packingCost, setPackingCost] = useState('');
  const [shippingCost, setShippingCost] = useState('');
  const [otherCosts, setOtherCosts] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomePercentage, setIncomePercentage] = useState('');
  const [feeAmount, setFeeAmount] = useState('');
  const [feePercentage, setFeePercentage] = useState('');

  const hideShowOutcome = () => {
    if (outcomeBtn == '+') {
      setOutcomeBtn('-');
    }
    else {
      setOutcomeBtn('+');
    }
  }

  // const handleAddition = () => {
  //   const res = Number(num1) + Number(num2);
  //   setResult(res.toString());
  // };

  // const handleSubtraction = () => {
  //   const res = Number(num1) - Number(num2);
  //   setResult(res.toString());
  // };

  // const handleMultiplication = () => {
  //   const res = Number(num1) * Number(num2);
  //   setResult(res.toString());
  // };

  // const handleDivision = () => {
  //   const res = Number(num1) / Number(num2);
  //   setResult(res.toString());
  // };

  return (
    <ScrollView style={{ backgroundColor: '#DFDFFF', paddingTop: 20 }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Название</Text>
          <TextInput
            style={styles.input}
            value={productName}
            onChangeText={setProductName}
            placeholder="Введите название товара"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Себестоимость</Text>
          <TextInput
            inputMode='numeric'
            style={styles.input}
            value={productionCost}
            onChangeText={setProductionCost}
            placeholder="Введите себестоимость товара"
          />
          <Text style={{ marginTop: -27, marginBottom: 12, marginLeft: 300 }}>som</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Цена продажи</Text>
          <TextInput
            inputMode='numeric'
            style={styles.input}
            value={sellPrice}
            onChangeText={setSellPrice}
            placeholder="Введите цену продажи товара"
          />
          <Text style={{ marginTop: -27, marginBottom: 12, marginLeft: 300 }}>som</Text>
          <Button title='%'></Button>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Расходы</Text>
          <Button title={outcomeBtn} onPress={hideShowOutcome} ></Button>
          <View style={styles.row}>
            <View style={styles.rowContainerSmall}>
              <Text style={styles.inputText}>НДС:</Text>
              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={nds}
                onChangeText={setNds}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 125 }}>%</Text>
            </View>

            <View style={styles.rowContainerSmall}>
              <Text style={styles.inputText}>Упаковка:</Text>
              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={packingCost}
                onChangeText={setPackingCost}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 115 }}>som</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowContainerSmall}>
              <Text style={styles.inputText}>Доставка:</Text>
              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={shippingCost}
                onChangeText={setShippingCost}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 115 }}>som</Text>
            </View>

            <View style={styles.rowContainerSmall}>
              <Text style={styles.inputText}>Другое:</Text>
              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={otherCosts}
                onChangeText={setOtherCosts}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 115 }}>som</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Прибыль и расходы</Text>

          <View style={styles.row}>
            <View style={styles.rowContainerBig}>
              <Text style={styles.inputText}>Прибыль:</Text>
              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={incomeAmount}
                onChangeText={setIncomeAmount}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 18, marginLeft: 280 }}>som</Text>

              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={incomePercentage}
                onChangeText={setIncomePercentage}
                placeholder="">
              </TextInput>
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowContainerBig}>
              <Text style={styles.inputText}>Комиссия:</Text>

              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={feeAmount}
                onChangeText={setFeeAmount}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 18, marginLeft: 280 }}>som</Text>

              <TextInput
                inputMode='numeric'
                style={styles.inputSmall}
                value={feePercentage}
                onChangeText={setFeePercentage}
                placeholder=""
              />
              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowContainerBig}>
              <Text style={styles.inputText}>Сумма НДС:</Text>

              <TextInput
                style={styles.inputSmall}
                value={shippingCost}
                onChangeText={setShippingCost}
                placeholder=""
              />

              <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 24 }}>Result: {nds}</Text>

        <TouchableOpacity onPress={() => { navigation.navigate('Results', { data: result }) }}>
          <Text style={{ fontSize: 20, color: 'blue', marginTop: 20 }}>Save Result</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFDFFF',
    overflow: 'scroll',
  },

  inputContainer: {
    width: '95%',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  
  rowContainerSmall: {
    width: 165,
    marginRight: 12,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#F3F3FF',
    borderRadius: 16
  },

  rowContainerBig: {
    width: 342,
    marginBottom: 10,
    padding: 12,
    backgroundColor: '#F3F3FF',
    borderRadius: 16
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'space-between',
  },

  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 4,
    padding: 5,
  },

  inputSmall: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 4,
    padding: 0,
  },

  inputText: {
    fontSize: 16,
    marginLeft: 10,
  },

  rowText: {
    fontSize: 16,
    marginBottom: 10,
    width: 150
  }
});

export default CalculatorScreen;
