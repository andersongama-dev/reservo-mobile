import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AppointmentsScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const primary = isDark ? "#FFFFFF" : "#0000D5";
  const secondary = isDark ? "#151718" : "#FFFFFF";

  const neutralBackground = isDark ? "#18181B" : "#F4F4F5";
  const neutralCard = isDark ? "#27272A" : "#FFFFFF";
  const neutralBorder = isDark ? "#3F3F46" : "#D4D4D8";
  const neutralText = isDark ? "#FAFAFA" : "#18181B";
  const neutralSubText = isDark ? "#A1A1AA" : "#71717A";

  const appointments = [
    {
      status: "Finalizada",
      service: "Corte de cabelo simples",
      professional: "Messi",
      barbershop: "Messi Barbearia",
      month: "Maio",
      day: "11",
      hour: "09:00",
    },
    {
      status: "Cancelada",
      service: "(Combo) Cabelo e barba",
      professional: "Messi",
      barbershop: "Messi Barbearia",
      month: "Janeiro",
      day: "16",
      hour: "17:00",
    },
    {
      status: "Cancelada",
      service: "(Combo) Cabelo e sobrancelha",
      professional: "Messi",
      barbershop: "Messi Barbearia",
      month: "Dezembro",
      day: "22",
      hour: "08:00",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: neutralBackground,
        paddingTop: insets.top,
      }}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: neutralText,
            marginTop: 24,
          }}
        >
          Agendamentos
        </Text>

        <View
          style={{
            marginTop: 32,
            borderRadius: 28,
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: neutralSubText,
            }}
          >
            Reservas finalizadas
          </Text>

          {appointments.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: neutralCard,
                borderWidth: 1,
                borderColor: neutralBorder,
                borderRadius: 16,
                padding: 16,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingRight: 18,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: isDark ? "#3F3F46" : "#F1F1F1",
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 999,
                    marginBottom: 18,
                  }}
                >
                  <Text
                    style={{
                      color: neutralText,
                      fontWeight: "600",
                      fontSize: 12,
                    }}
                  >
                    {item.status}
                  </Text>
                </View>

                <Text
                  style={{
                    color: neutralText,
                    fontSize: 20,
                    fontWeight: "700",
                    lineHeight: 28,
                  }}
                >
                  {item.service}
                </Text>

                <Text
                  style={{
                    color: neutralSubText,
                    fontSize: 16,
                    marginTop: 12,
                  }}
                >
                  com {item.professional}
                </Text>

                <Text
                  style={{
                    color: neutralText,
                    fontSize: 16,
                    marginTop: 12,
                  }}
                >
                  {item.barbershop}
                </Text>

                <Pressable
                  style={{
                    backgroundColor: primary,
                    alignSelf: "flex-start",
                    paddingInline: 16,
                    paddingBlock: 12,
                    borderRadius: 14,
                    marginTop: 24,
                  }}
                >
                  <Text
                    style={{
                      color: secondary,
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    Reserve novamente
                  </Text>
                </Pressable>
              </View>

              <View
                style={{
                  width: 1,
                  backgroundColor: neutralBorder,
                  marginRight: 18,
                }}
              />

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 90,
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    color: neutralText,
                    fontSize: 16,
                  }}
                >
                  {item.month}
                </Text>

                <Text
                  style={{
                    color: neutralText,
                    fontSize: 32,
                    fontWeight: "700",
                  }}
                >
                  {item.day}
                </Text>

                <Text
                  style={{
                    color: neutralText,
                    fontSize: 16,
                  }}
                >
                  {item.hour}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
