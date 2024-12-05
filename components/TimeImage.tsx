import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  imageUri?: string;
};

export default function TimeImage({ size, imageUri }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("../assets/time.jpg")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
