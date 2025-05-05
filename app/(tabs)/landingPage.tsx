import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, StatusBar, Button } from "react-native";


export default function LandingPage(){
    const router = useRouter();
    return(
        <SafeAreaView style={{ 
            flex: 1, backgroundColor: '#EEEEEE', 
            justifyContent: 'center', alignItems: 'center' }}>
            <View>
            <Button title="Go Back" onPress={() => router.back()} />
                <Text>This is Landing Page</Text>
                <Link href="/signup">Signup</Link>
            </View>
        </SafeAreaView>
    )
}



