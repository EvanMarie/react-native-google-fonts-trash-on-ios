import { col } from "@/constants/Colors";
import { screenWidth } from "@/constants/variousConstants";
import { View } from "react-native";

export default function Divider({
  height = 1,
  width = screenWidth * 0.95,
  color = col[550],
  margin,
  padding,
  border,
  borderRadius,
  style,
  ...props
}: {
  height?: number;
  width?: string | number;
  color?: string;
  margin?: number;
  padding?: number;
  border?: number;
  borderRadius?: number;
  style?: any;
  [key: string]: any;
}) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={[
          {
            height,
            width,
            backgroundColor: color,
            margin,
            padding,
            border,
            borderRadius,
          },
          style,
        ]}
        {...props}
      />
    </View>
  );
}
