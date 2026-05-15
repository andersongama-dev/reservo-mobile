import { useColorScheme } from "@/hooks/use-color-scheme";
import { CalendarDays, House, Search, User } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function TabItem({ icon, label, active }: TabItemProps) {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const activeColor = isDark ? "#FFFFFF" : "#0000D5";
  const inactiveColor = isDark ? "#71717A" : "#71717A";

  return (
    <Pressable
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        flex: 1,
      }}
    >
      {icon}

      <Text
        style={{
          fontSize: 12,
          fontWeight: active ? "600" : "400",
          color: active ? activeColor : inactiveColor,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function BottomNavigation() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const background = isDark ? "#09090B" : "#FFFFFF";
  const border = isDark ? "#18181B" : "#E4E4E7";

  const activeColor = isDark ? "#FFFFFF" : "#0000D5";
  const inactiveColor = isDark ? "#71717A" : "#71717A";

  return (
    <View
      style={{
        backgroundColor: background,
        borderTopWidth: 1,
        borderTopColor: border,
        paddingTop: 14,
        paddingBottom: insets.bottom + 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TabItem
        label="Meu Booksy"
        icon={<House size={30} color={inactiveColor} strokeWidth={1.8} />}
      />

      <TabItem
        label="Explorar"
        icon={<Search size={30} color={inactiveColor} strokeWidth={1.8} />}
      />

      <TabItem
        label="Agendamentos"
        active
        icon={<CalendarDays size={30} color={activeColor} strokeWidth={1.8} />}
      />

      <TabItem
        label="Perfil"
        icon={<User size={30} color={inactiveColor} strokeWidth={1.8} />}
      />
    </View>
  );
}
