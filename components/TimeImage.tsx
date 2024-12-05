import { Image, useWindowDimensions } from "react-native";

export default function TimeImage({ size }: { size?: number }) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("../assets/time.jpg")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
