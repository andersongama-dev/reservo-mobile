import { useColorScheme } from "@/hooks/use-color-scheme";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StatusBar, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const primary = isDark ? "#FFFFFF" : "#0000D5";
  const secondary = isDark ? "#151718" : "#FFFFFF";

  const neutralBackground = isDark ? "#18181B" : "#F4F4F5";
  const neutralInput = isDark ? "#27272A" : "#E8E8E8";
  const neutralText = isDark ? "#D4D4D8" : "#424242";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: neutralBackground,
        paddingTop: insets.top,
      }}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 32,
        }}
      >
        <View style={{ marginBottom: 48 }}>
          <Text
            style={{
              color: primary,
              fontSize: 32,
              fontWeight: "800",
              letterSpacing: -1,
            }}
          >
            Bem-vindo novamente
          </Text>

          <Text
            style={{
              color: neutralText,
              fontSize: 16,
              marginTop: 12,
              lineHeight: 26,
            }}
          >
            Entre na sua conta para continuar utilizando o Reservo.
          </Text>
        </View>

        <View>
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: neutralText,
                marginBottom: 12,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              E-mail
            </Text>

            <TextInput
              placeholder="Digite seu e-mail"
              placeholderTextColor={isDark ? "#71717A" : "#666"}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                backgroundColor: neutralInput,
                color: isDark ? "#FFFFFF" : "#111",
                borderRadius: 16,
                paddingHorizontal: 18,
                paddingVertical: 16,
                fontSize: 16,
              }}
            />
          </View>

          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: neutralText,
                marginBottom: 12,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Senha
            </Text>

            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor={isDark ? "#71717A" : "#666"}
              secureTextEntry
              style={{
                backgroundColor: neutralInput,
                color: isDark ? "#FFFFFF" : "#111",
                borderRadius: 16,
                paddingHorizontal: 18,
                paddingVertical: 16,
                fontSize: 16,
              }}
            />
          </View>

          <Link href="/forgot-password" asChild>
            <Pressable
              style={{
                alignSelf: "flex-end",
                marginBottom: 32,
              }}
            >
              <Text
                style={{
                  color: primary,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Esqueceu sua senha?
              </Text>
            </Pressable>
          </Link>

          <Pressable
            style={{
              backgroundColor: primary,
              paddingVertical: 18,
              borderRadius: 100,
              alignItems: "center",
              marginBottom: 36,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.12,
              shadowRadius: 10,
              elevation: 8,
            }}
          >
            <Text
              style={{
                color: secondary,
                fontSize: 16,
                fontWeight: "700",
                letterSpacing: 0.3,
              }}
            >
              Entrar
            </Text>
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: neutralText,
                fontSize: 15,
              }}
            >
              Não possui uma conta?
            </Text>

            <Link href="/register" asChild>
              <Pressable
                style={{
                  marginLeft: 6,
                }}
              >
                <Text
                  style={{
                    color: primary,
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Criar conta
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
