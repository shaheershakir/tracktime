import { theme } from "@/theme";
import { StyleSheet, Text, Pressable, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useState } from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type Props = {
  title: string;
  onPress: () => void;
};

export function TracktimeButton({ title, onPress }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={() => {
        setIsPressed(true);
        scale.value = withSpring(0.92);
      }}
      onPressOut={() => {
        setIsPressed(false);
        scale.value = withSpring(1);
      }}
      style={[styles.button, animatedStyle, isPressed && styles.buttonPressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorBrown,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: theme.colorDarkBrown,
  },
});
