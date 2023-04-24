import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo';

export default function ListaDeSignos() {
  return (
    <View>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista signo="Aquário" dataInicio="21/01" dataFim="19/02" />
        
      </ScrollView>
    </View>
  )
}