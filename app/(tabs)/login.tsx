import { Link } from "expo-router";
import React from "react";
import { Pressable, StatusBar, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <StatusBar barStyle="light-content" />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 32,
        }}
      >
        <View style={{ marginBottom: 40 }}>
          <Text
            style={{
              color: "#0000d5",
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Bem-vindo novamente
          </Text>

          <Text
            style={{
              color: "#424242",
              fontSize: 16,
              marginTop: 8,
            }}
          >
            Faça login para continuar
          </Text>
        </View>

        <View>
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: "#424242",
                marginBottom: 16,
                fontSize: 14,
              }}
            >
              E-mail
            </Text>

            <TextInput
              placeholder="Digite seu e-mail"
              placeholderTextColor="#424242"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                backgroundColor: "#e8e8e8",
                color: "#424242",
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 14,
                fontSize: 16,
              }}
            />
          </View>

          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                color: "#424242",
                marginBottom: 8,
                fontSize: 14,
              }}
            >
              Senha
            </Text>

            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="#424242"
              secureTextEntry
              style={{
                backgroundColor: "#e8e8e8",
                color: "#424242",
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 14,
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
                  color: "#0000d5",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Esqueceu a senha?
              </Text>
            </Pressable>
          </Link>

          <Pressable
            style={{
              backgroundColor: "#0000d5",
              paddingVertical: 16,
              borderRadius: 8,
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Entrar
            </Text>
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#424242" }}>Não tem uma conta? </Text>

            <Link href="/register" asChild>
              <Pressable>
                <Text
                  style={{
                    color: "#0000d5",
                    fontWeight: "700",
                  }}
                >
                  Crie uma
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
