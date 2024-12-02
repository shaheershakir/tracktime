import { View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);

  function handlePress() {
    toggleHasOnboarded();
    router.replace("onboarding");
  }

  return (
    <View style={styles.container}>
      <Button title="Let out" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorLightBrown,
  },
});
