import { View, Text, TextInput, SafeAreaView, 
    TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'

export default function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [myError, setMyError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleValidation = () => {
        const emptyUsername = username.trim() === ""
        const emptyEmail = email.trim() === ""
        const emptyPassword = password.trim() === ""

        if (!emptyUsername && !emptyEmail && !emptyPassword){
            return true
        }else{
            alert("Fill the Inputs")
            return false
        }
    }
    
    const postData = async () => {
        setIsLoading(true)
        setMyError("")
        try {
            const response = await fetch("http://127.0.0.1:8000/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            if (!response.ok){
                throw new Error("Post request Failed")
            }
        }
        catch(error: any){
            setMyError(error.message || String(error))
        }
        finally{
            setIsLoading(false)
            setUsername("")
            setEmail("")
            setPassword("")
        }
    }

    if (isLoading){
        return(
            <SafeAreaView style={{ 
                flex: 1, backgroundColor: '#EEEEEE', 
                justifyContent: 'center', alignItems: 'center' }}>
                
                <ActivityIndicator size="large" color="#000000"/>
                <Text>Loading ... </Text>

            </SafeAreaView>
        )
    }

    // if (myError){
    //     return(
    //         <SafeAreaView style={{ 
    //             flex: 1, backgroundColor: '#EEEEEE', 
    //             justifyContent: 'center', alignItems: 'center' }}>
                
    //             <Text>{myError}</Text>

    //         </SafeAreaView>
    //     )
    // }
        

    return(
        <SafeAreaView style={{ 
                flex: 1, backgroundColor: '#EEEEEE', 
                justifyContent: 'center', alignItems: 'center', rowGap: 8 }}>
            
            {myError && <Text style={{color: 'red'}}>{myError}</Text>}

            <View>
                <Text>Username</Text>
                <TextInput
                    style={{ borderStyle: "solid", borderRadius: 5, borderColor: "#000000", 
                            borderWidth: 1, paddingVertical: 2, paddingHorizontal: 5, width: 150 }}
                    keyboardType='default'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>

            <View>
                <Text>Email</Text>
                <TextInput
                    style={{ borderStyle: "solid", borderRadius: 5, borderColor: "#000000", 
                            borderWidth: 1, paddingVertical: 2, paddingHorizontal: 5, width: 150  }}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View>
                <Text>Password</Text>
                <TextInput
                    style={{ borderStyle: "solid", borderRadius: 5, borderColor: "#000000", 
                            borderWidth: 1, paddingVertical: 2, paddingHorizontal: 5, width: 150  }}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>

            <View>
                <TouchableOpacity onPress={() => {if (handleValidation()) postData()}}>
                    <Text style={{backgroundColor: '#2F4F7F', color: '#FFFFFF', 
                            paddingHorizontal: 20, paddingVertical: 5, borderRadius: 8}}
                            >Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}