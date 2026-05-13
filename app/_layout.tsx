import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "@/global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />

        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
