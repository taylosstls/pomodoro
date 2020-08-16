import React, { useCallback } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

import { styles } from "./styles";
import yogaman from '../../../assets/yoga.png'

export default function Congrats() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Image source={yogaman} resizeMode={"contain"} width={150} style={styles.yogaImage} />
      <Text style={styles.title}>Ótimo!</Text>
      <Text style={styles.text}>Agora é hora de dar uma alongada...</Text>
      <Button
        text="Pronto para trabalhar!"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
