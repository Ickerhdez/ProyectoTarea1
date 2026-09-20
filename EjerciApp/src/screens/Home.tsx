import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text  } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import { navigationRef } from "../navigation/NavigationService";
import CustomButton from "../components/CustomButton";
import { useTheme } from "../context/ThemeContext";

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, 'HomeTab'>,
    NativeStackScreenProps<RootStackParamList>
    >;

export default function Home({navigation, route}: NestedProps){
    const {email} = route.params;
    const { colors } = useTheme();

    const handleLogout = () => {
        if (navigationRef.isReady()) {
            navigationRef.reset({
                index: 0,
                routes: [{ name: "LoginScreen" }],
            });
        }
    };

    return(
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Bienvenido, {email}</Text>
            <CustomButton
                title="Ir a Preferencias de Usuario"
                onPress={() => navigation.navigate("SettingsTab")}
            />
            <CustomButton
                title="Cerrar Sesion"
                variant="secondary"
                onPress={handleLogout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
    },
});