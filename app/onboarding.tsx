import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { TracktimeButton } from "@/components/TracktimeButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import TracktimeImage from "@/components/TracktimeImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);

  function handlePress() {
    toggleHasOnboarded();
    router.replace("/");
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colorViola, theme.colorPink]}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <View>
        <Text style={styles.heading}>TrackTime</Text>
        <Text style={styles.tagline}>keep you time Tracked</Text>
      </View>
      <TracktimeImage />
      <TracktimeButton title="let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 42,
    color: theme.colorBlack,
    fontWeight: "bold",
    marginBottom: 12,
  },
  tagline: {
    fontSize: 18,
    color: theme.colorBlack,
    textAlign: "center",
  },
});
