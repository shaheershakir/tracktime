import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/theme";
import TimeImage from "@/components/TimeImage";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <TimeImage />
      <Text>New Track</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
