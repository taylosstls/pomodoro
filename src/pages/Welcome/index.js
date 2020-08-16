import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import Button from "../../components/Button";

import yogaGirlImg from '../../../assets/yoga-girl-3.json';

import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        autoSize
        source={yogaGirlImg}
      />
      <Text style={styles.text}>Ficar focado no seu trabalho não é algo fácil!</Text>
      <Button
        text="Vamos começar!"
        icon="arrow-right"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
