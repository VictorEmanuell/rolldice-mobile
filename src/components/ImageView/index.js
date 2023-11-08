import { View, Image } from "react-native";

export function ImageView({ width, image, style }) {
  return (
    <View style={{ aspectRatio: 1, width: width, ...style }}>
      <Image
        source={image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="center"
      />
    </View>
  );
}
