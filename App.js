import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  AppMainText,
  WelcomeBG,
  EntryButton,
  CommonText,
  CatImage,
} from "./App.styles";

import ContentService from "./src/services/mainService";

export default function App() {
  const bgImage = {
    uri:
      "https://cdn.pixabay.com/photo/2014/07/31/15/46/oliver-kahn-406393_960_720.jpg",
  };
  const [sentence, setSentence] = useState("");
  const [pressed, setPressed] = useState(0);

  const handlePress = () => {
    const service = new ContentService();
    let pressCount = 0;
    service
      .getAll()
      .then((res) => setSentence(res.data.url))
      .catch((err) => console.log(err));
    pressCount++;
    setPressed(pressCount);
  };

  return (
    <View style={styles.container}>
      <WelcomeBG source={bgImage}>
        <AppMainText>¿Tienes estrés y no sabes cómo pararlo?</AppMainText>
        <EntryButton onPress={handlePress}>
          <CommonText>Toca para descubrirlo</CommonText>
        </EntryButton>
        {pressed ? <CatImage source={{ uri: sentence }} /> : null}
      </WelcomeBG>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
