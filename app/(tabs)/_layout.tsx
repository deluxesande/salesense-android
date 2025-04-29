import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/ui/TabBarIcon";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {
                        height: 70,
                    },
                }),
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: "Products",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
            <Tabs.Screen
                name="invoices"
                options={{
                    title: "Invoices",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "receipt" : "receipt-outline"}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "bar-chart" : "bar-chart-outline"}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                }}
            />
        </Tabs>
    );
}
