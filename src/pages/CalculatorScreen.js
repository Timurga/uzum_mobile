import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, LayoutAnimation, Button, Pressable } from 'react-native';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native-web';

const CalculatorScreen = ({ navigation }) => {
  const [result, setResult] = useState('');
  const [outcomeBtn, setOutcomeBtn] = useState('+');

  const [nds, setNds] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  // const [productName, setProductName] = useState('');
  const [packingCost, setPackingCost] = useState('');
  const [shippingCost, setShippingCost] = useState('');
  const [otherCosts, setOtherCosts] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomePercentage, setIncomePercentage] = useState('');
  const [feeAmount, setFeeAmount] = useState('');
  const [feePercentage, setFeePercentage] = useState('');
  const [isOpenIncomeOutcome, setIsOpenIncomeOutcome] = useState(true);
  const [isOpenIncome, setIsOpenIncome] = useState(true);


  const toggleBlockIncomeOutcome = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenIncomeOutcome(!isOpenIncomeOutcome);
    return { paddingBottom: 10 }
  };

  const toggleBlockIncome = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenIncome(!isOpenIncome);

  };

  const blockHeightIncomeOutcome = isOpenIncomeOutcome ? null : 0;
  const blockHeightIncome = isOpenIncome ? null : 0;


  return (
    <ScrollView style={{ backgroundColor: '#DFDFFF' }}>
      <View style={styles.container}>

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
          <View style={styles.row}>
            <TextInput
              inputMode='numeric'
              style={[styles.input, { width: 300 }]}
              value={sellPrice}
              onChangeText={setSellPrice}
              placeholder="Введите цену продажи товара"
            />
            <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center' , borderWidth: 1, borderRadius: 6, marginLeft: 5 }}><Text style={{ fontSize: 18, }}>%</Text></TouchableOpacity>
          </View>

          <Text style={{ marginTop: -27, marginBottom: 12, marginLeft: 260 }}>som</Text>

        </View>

        <View style={[styles.inputContainer, { paddingBottom: isOpenIncomeOutcome ? null : 10 }]}>
          <Pressable onPress={toggleBlockIncomeOutcome} style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Text style={styles.rowText}>Прибыль и расходы</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 175 }}>{isOpenIncomeOutcome ? '-' : '+'}</Text>
            </View>
          </Pressable>

          <View style={{ height: blockHeightIncomeOutcome, overflow: 'hidden' }}>
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
        </View>

        <View style={[styles.inputContainer, { paddingBottom: isOpenIncomeOutcome ? null : 10 }]}>
          <Pressable onPress={toggleBlockIncome} style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Text style={styles.rowText}>Расходы</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 260 }}>{isOpenIncome ? '-' : '+'}</Text>
            </View>
          </Pressable>

          <View style={{ height: blockHeightIncome, overflow: 'hidden' }}>
            <View style={styles.row}>
              <View style={styles.rowContainerBig}>
                <Text style={styles.inputText}>Упаковка:</Text>

                <TextInput
                  inputMode='numeric'
                  style={styles.inputSmall}
                  value={packingCost}
                  onChangeText={setPackingCost}
                  placeholder=""
                />
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
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
        </View>
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
    paddingTop: 20,
    paddingBottom: 40
  },

  inputContainer: {
    width: '95%',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
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
    flexDirection: 'row',
    alignItems: 'space-between',
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderRadius: 4,
    padding: 5,
  },

  inputSmall: {
    height: 40,
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
  }
});

export default CalculatorScreen;
