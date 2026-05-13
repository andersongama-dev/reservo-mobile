import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "light"];

  const isDark = colorScheme === "dark";

  const primary = isDark ? "#FFFFFF" : "#0000D5";
  const secondary = isDark ? "#151718" : "#FFFFFF";

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: primary,
          height: 560,
          paddingTop: insets.top + 24,
          paddingHorizontal: 32,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          justifyContent: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.12,
          shadowRadius: 20,
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: secondary,
            fontSize: 34,
            fontWeight: "800",
            textAlign: "center",
            letterSpacing: -1,
          }}
        >
          Bem-vindo ao Reservo
        </Text>

        <Text
          style={{
            color:
              colorScheme === "dark" ? "#151718" : "rgba(255,255,255,0.88)",

            fontSize: 17,
            marginTop: 16,
            textAlign: "center",
            lineHeight: 28,
            paddingHorizontal: 8,
          }}
        >
          Gerencie suas reservas com rapidez, organização e praticidade.
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/(tabs)/login")}
        style={{
          backgroundColor: primary,
          paddingVertical: 18,
          borderRadius: 100,
          marginHorizontal: 32,
          marginBottom: Math.max(insets.bottom + 24, 40),
          alignItems: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        <Text
          style={{
            color: secondary,
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          Continuar
        </Text>
      </Pressable>
    </View>
  );
}
