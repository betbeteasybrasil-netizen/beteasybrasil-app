import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const jogos = [
  { id: "1", casa: "Flamengo", fora: "Palmeiras", gols: "Mais de 2.5", chance: 68 },
  { id: "2", casa: "Corinthians", fora: "Santos", gols: "Menos de 2.5", chance: 71 },
  { id: "3", casa: "Grêmio", fora: "Internacional", gols: "Ambas marcam", chance: 63 },
  { id: "4", casa: "Botafogo", fora: "Vasco", gols: "Mais de 1.5", chance: 79 },
];

export default function App() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚽ BetEasy Brasil - Sugestões de Apostas</Text>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cartao,
              selecionado === item.id && styles.cartaoSelecionado,
            ]}
            onPress={() => setSelecionado(item.id)}
          >
            <Text style={styles.times}>
              {item.casa} vs {item.fora}
            </Text>
            <Text style={styles.mercado}>Mercado: {item.gols}</Text>
            <Text style={styles.chance}>Chance: {item.chance}%</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  cartao: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  cartaoSelecionado: {
    backgroundColor: "#d1f5d3",
  },
  times: { fontSize: 16, fontWeight: "600" },
  mercado: { color: "#555" },
  chance: { marginTop: 5, color: "#007b00", fontWeight: "bold" },
});
