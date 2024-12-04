import { Image, useWindowDimensions } from "react-native";

export default function TimeImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("../assets/time.jpg")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
