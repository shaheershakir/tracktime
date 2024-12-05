import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import { TracktimeButton } from "@/components/TracktimeButton";
import TimeImage from "@/components/TimeImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantStore";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [imageUri, setImageUri] = useState<string>();
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const addPlant = usePlantStore((store) => store.addPlant);
  const router = useRouter();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your track a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be tracked?`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Tracking frequency must be a number"
      );
    }

    addPlant(name, Number(days), imageUri);
    router.navigate("/");

    console.log("Adding track", name, days);
  };

  const hangleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity activeOpacity={0.8} style={styles.centered}>
        <TimeImage imageUri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Car wash"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Tracking Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <TracktimeButton title="Add track" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightBrown,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});