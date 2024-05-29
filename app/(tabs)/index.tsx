import { col } from "@/constants/Colors";
import { GradientFive } from "@/constants/Gradients";
import { textShadows } from "@/constants/ShadowStyles";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";

import { Heading3xl, Heading4xl } from "@/custom-components/textComponents";

export default function Design() {
  return (
    <FlexFull style={{ height: screenHeight }}>
      <GradientFive
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading4xl
          style={{ textAlign: "center" }}
          textColor={col[900]}
          textShadow={textShadows.glow100Lg}
          fontFamily="Kufam_600SemiBold"
        >
          React Native
        </Heading4xl>
        <Heading3xl
          style={{ textAlign: "center" }}
          textColor={col[900]}
          textShadow={textShadows.glow100Lg}
          fontFamily="Kufam_600SemiBold"
        >
          Design Examples
        </Heading3xl>
      </GradientFive>
    </FlexFull>
  );
}
