import { Link } from "expo-router";
import { View, SafeAreaView, Text, StatusBar } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{
        backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
        <View>
            <Text>Home Page</Text>
            <Link href="/landingPage">Landing page</Link>
        </View>
    </SafeAreaView>
  );
}


