import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import Home from "../screens/Home";
import { useTheme } from "../context/ThemeContext";

//1. declarar el tipado de las pantallas con sus parametros
export type TabsParamList ={
    ProfileTab: undefined,
    SettingsTab: undefined,
    HomeTab: {email:string},
};

//2. crear el tabs navigator encargado de manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el navegador por tabs
export default function TabNavigator (){
    const { colors, isDark } = useTheme();

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopColor: colors.border,
                },
                headerStyle: {
                    backgroundColor: colors.surface,
                },
                headerTintColor: colors.text,
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={Home}
                initialParams={{email:"usuario"}}
                options={{
                    title: "Inicio",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='ProfileTab'
                component={Profile}
                options={{
                    title: "Perfil",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='SettingsTab'
                component={Settings}
                options={{
                    title: "Preferencias",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

