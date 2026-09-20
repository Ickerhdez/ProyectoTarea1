import React from "react"
import { StyleSheet, Text, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../../navigation/TabsNavigator";
import { navigationRef } from "../../navigation/NavigationService";
import CustomButton from "../../components/CustomButton";
import { useTheme } from "../../context/ThemeContext";

type ProfileProps = BottomTabScreenProps<TabsParamList, "ProfileTab">;

export default function Profile({ navigation }: ProfileProps){
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
            <Text style={[styles.title, { color: colors.text }]}>Mi perfil</Text>
            <CustomButton title="Cerrar Sesion" onPress={handleLogout} />
            <CustomButton title="Ir Atras" onPress={() => navigation.goBack()} variant="secondary" />
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
        fontSize: 22,
        marginBottom: 20,
    },
});