import React, { useMemo, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, LayoutAnimation, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-web';

const CalculatorScreen = () => {

  const [nds, setNds] = useState(0);
  const [productionCost, setProductionCost] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [packingCost, setPackingCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomePercentage, setIncomePercentage] = useState(0);
  const [feeAmount, setFeeAmount] = useState(0);
  const [feePercentage, setFeePercentage] = useState(0);
  const [ndsSum, setNdsSum] = useState(0);
  const [isOpenIncomeOutcome, setIsOpenIncomeOutcome] = useState(true);
  const [isOpenOutcome, setIsOpenOutcome] = useState(true);
  const blockHeightIncomeOutcome = isOpenIncomeOutcome ? null : 0;
  const blockHeightIncome = isOpenOutcome ? null : 0;

  const toggleBlockIncomeOutcome = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenIncomeOutcome(!isOpenIncomeOutcome);
  };

  const toggleBlockIncome = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenOutcome(!isOpenOutcome);
  };

  const incomeResult = useMemo(() => {
    let fee = 0;
    let percentage = 0;

    if (sellPrice >= 0 && sellPrice <= 49800) {
      fee = sellPrice * 20 / 100;
      percentage = 20;
    } else if (sellPrice > 49800 && sellPrice <= 99800) {
      fee = sellPrice * 18 / 100;
      percentage = 18;
    } else if (sellPrice > 99800 && sellPrice <= 149800) {
      fee = sellPrice * 15 / 100;
      percentage = 15;
    } else if (sellPrice > 149800 && sellPrice <= 199800) {
      fee = sellPrice * 12 / 100;
      percentage = 12;
    } else if (sellPrice > 199800 && sellPrice <= 299800) {
      fee = sellPrice * 10 / 100;
      percentage = 10;
    } else if (sellPrice > 299800 && sellPrice <= 399800) {
      fee = sellPrice * 8 / 100;
      percentage = 8;
    } else if (sellPrice > 399800 && sellPrice <= 699800) {
      fee = sellPrice * 7 / 100;
      percentage = 7;
    } else if (sellPrice > 699800 && sellPrice <= 999800) {
      fee = sellPrice * 6 / 100;
      percentage = 6;
    } else if (sellPrice > 999800 && sellPrice <= 2998800) {
      fee = sellPrice * 5 / 100;
      percentage = 5;
    } else if (sellPrice > 2998800) {
      fee = sellPrice * 3 / 100;
      percentage = 3;
    }

    setFeeAmount(fee);
    setFeePercentage(percentage);
    setNdsSum(sellPrice * nds / 100);
    setIncomeAmount((sellPrice - packingCost - shippingCost - otherCosts - ndsSum - feeAmount - productionCost).toFixed(2));
    setIncomePercentage(((sellPrice - packingCost - shippingCost - otherCosts - ndsSum - feeAmount - productionCost) / productionCost * 100).toFixed(2));
  }, [productionCost, feeAmount, sellPrice, shippingCost, otherCosts, nds, packingCost, ndsSum]);

  return (
    <ScrollView
      style={{ backgroundColor: '#DFDFFF' }}
      keyboardDismissMode='on-drag'
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Себестоимость</Text>
          <View style={styles.row}>
            <TextInput
              inputMode='numeric'
              style={[styles.input, { width: 340 }]}
              onChangeText={setProductionCost}
              placeholder={`${productionCost}`}
            />
            <Text style={{ marginBottom: 10, marginLeft: -40 }}>som</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rowText}>Цена продажи</Text>
          <View style={styles.row}>
            <TextInput
              inputMode='numeric'
              style={[styles.input, { width: 300 }]}
              onChangeText={setSellPrice}
              placeholder={`${sellPrice}`}
            />
            <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 6, marginLeft: 5 }}><Text style={{ fontSize: 18, }}>%</Text></TouchableOpacity>
            <Text style={{ marginBottom: 10, marginLeft: -85 }}>som</Text>
          </View>



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
                  style={styles.input}
                  value={`${incomeAmount}`}
                  readOnly={true}
                />
                <Text style={{ marginTop: -29, marginBottom: 18, marginLeft: 280 }}>som</Text>

                <TextInput
                  style={styles.input}
                  value={`${incomePercentage}`}
                  readOnly={true}
                >
                </TextInput>
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 300 }}>%</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowContainerBig}>
                <Text style={styles.inputText}>Комиссия:</Text>

                <TextInput
                  style={styles.input}
                  value={`${feeAmount}`}
                  readOnly={true}
                />
                <Text style={{ marginTop: -29, marginBottom: 18, marginLeft: 280 }}>som</Text>

                <TextInput
                  style={styles.input}
                  value={`${feePercentage}`}
                  readOnly={true}
                />
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 300 }}>%</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowContainerBig}>
                <Text style={styles.inputText}>Сумма НДС:</Text>

                <TextInput
                  style={styles.input}
                  value={`${ndsSum}`}
                  readOnly={true}
                />

                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.inputContainer, { paddingBottom: isOpenOutcome ? null : 10 }]}>
          <Pressable onPress={toggleBlockIncome} style={{ flexDirection: 'row', alignContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <Text style={styles.rowText}>Расходы</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 260 }}>{isOpenOutcome ? '-' : '+'}</Text>
            </View>
          </Pressable>

          <View style={{ height: blockHeightIncome, overflow: 'hidden' }}>
            <View style={styles.row}>
              <View style={styles.rowContainerSmall}>
                <Text style={styles.inputText}>НДС:</Text>

                <TextInput
                  inputMode='numeric'
                  style={styles.input}
                  placeholder={`${nds}`}
                  onChangeText={setNds}
                />
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
              </View>

              <View style={styles.rowContainerSmall}>
                <Text style={styles.inputText}>Упаковка:</Text>

                <TextInput
                  inputMode='numeric'
                  style={styles.input}
                  placeholder={`${packingCost}`}
                  onChangeText={setPackingCost}
                />
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 280 }}>som</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowContainerSmall}>
                <Text style={styles.inputText}>Доставка:</Text>

                <TextInput
                  inputMode='numeric'
                  style={styles.input}
                  placeholder={`${shippingCost}`}
                  onChangeText={setShippingCost}
                />
                <Text style={{ marginTop: -29, marginBottom: 12, marginLeft: 115 }}>som</Text>
              </View>

              <View style={styles.rowContainerSmall}>
                <Text style={styles.inputText}>Другое:</Text>

                <TextInput
                  inputMode='numeric'
                  style={styles.input}
                  placeholder={`${otherCosts}`}
                  onChangeText={setOtherCosts}
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