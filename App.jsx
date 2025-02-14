import axios from 'axios';

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { s } from "./styles"

export default function App() {
  const [results, setResults] = useState([]);
  
  const searchGoogle = async (query, date) => {
    const API_KEY = 'AIzaSyBuxqyLAUxTPhAaUkkXuHlNzBwTdz68vaU';
    const CX = '55405deeab9a94cb5';

    try {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          key: API_KEY,
          cx: CX,
          q: `${query} ${date}`, // Query de busca
          num: 3, // Quantidade de resultados retornados. Obs: posso retornar no máximo 10 resultados.
        },
      });

      // Processando os dados retornados
      const fetchedResults = response.data.items.map(item => ({
        title: item.title,
        snippet: item.snippet,
        link: item.link,
      }));

      // console.log("Conteúdo de response: ", response)

      console.log(fetchedResults);
      setResults(fetchedResults); // Atualiza o estado com os resultados
    } catch (error) {
      console.error('Erro ao buscar no Google:', error);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Mecanismo de busca do Google</Text>
      <Button
        title="Buscar Cotação"
        onPress={() => searchGoogle('cotação soja', '2025-01-19')}
      />
      <View style={s.results}>
        {results.map((result, index) => (
          <View key={index} style={s.resultItem}>
            <Text style={s.resultTitle}>{result.title}</Text>
            <Text>{result.snippet}</Text>
            <Text style={s.resultLink}>{result.link}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
