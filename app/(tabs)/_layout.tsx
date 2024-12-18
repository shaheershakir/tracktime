import { Link, Redirect, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorBrown }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
