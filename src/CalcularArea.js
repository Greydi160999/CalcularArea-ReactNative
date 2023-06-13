import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const CalcularArea = () => {
  const [radio, setRadio] = useState(0);
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const areaCalculada = Math.PI * Math.pow(radio, 2);
    setArea(areaCalculada);
  };

  return (
    <View>
      <Text>Ingrese el radio del círculo:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        keyboardType="numeric"
        value={radio.toString()}
        onChangeText={text => setRadio(parseFloat(text))}
      />
      <Button title="Calcular" onPress={calcularArea} />
      {area && <Text>El área del círculo es: {area.toFixed(2)}</Text>}
    </View>
  );
};

export default CalcularArea;
