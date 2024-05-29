import { col } from "@/constants/Colors";
import { FlexFull, VStack } from "./containers";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { usePathname, useRouter } from "expo-router";
import { bordersT } from "@/constants/BorderStyles";

type navItemType = {
  icon?: string;
  label: string;
  pathname: string;
};

function NavItem({
  icon,
  iconSize = 23,
  inactiveIconColor = col[180],
  activeIconColor = col[200],
  label,
  pathname,
}: {
  icon?: string;
  iconSize?: number;
  inactiveIconColor?: string;
  activeIconColor?: string;
  label: string;
  pathname: string;
}) {
  const router = useRouter();
  const currentRoute = usePathname();
  const isActive = currentRoute === pathname;

  return (
    <TouchableOpacity onPress={() => router.push(pathname)}>
      <VStack style={{ alignItems: "center" }}>
        {icon && (
          <Ionicons
            name={icon as any}
            size={iconSize}
            color={isActive ? activeIconColor : inactiveIconColor}
          />
        )}
        <Text
          style={{
            fontSize: 12,
            padding: 0,
            color: isActive ? activeIconColor : inactiveIconColor,
          }}
        >
          {label}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

export default function MyNavBar({
  bg = col[700],
  borderTop = bordersT.borderTxs700,
  height = 60,
  navItems,
}: {
  bg?: string;
  borderTop?: any;
  height?: number;
  navItems: navItemType[];
}) {
  return (
    <FlexFull
      style={[
        borderTop,
        {
          height: height,
          paddingHorizontal: 10,
          paddingVertical: 5,
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: bg,
          zIndex: 1,
          justifyContent: "space-around",
        },
      ]}
    >
      {navItems.map((navItem, index) => (
        <NavItem
          key={index}
          icon={navItem.icon}
          label={navItem.label}
          pathname={navItem.pathname}
        />
      ))}
    </FlexFull>
  );
}
