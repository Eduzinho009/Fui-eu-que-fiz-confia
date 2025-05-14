import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
   const [email, setEmail] = useState("")
   const [pass, setPass] = useState("")

    const onPress = () => {
        router.push("/(tabs)")
    }

    return(
        <SafeAreaView>
            <section style={styles.center}>
            <Text style={styles.texto}>Login</Text>
            <Text style={styles.texto}>E-mail</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu e-mail" keyboardType="email-address"/>
            <Text style={styles.texto}>Senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="Digite sua senha" keyboardType="default"/>
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.btnText}>ENTRAR</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/#"}>Cadastrar novo usuário</Link>
                </View>
            </View>
            </section>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    center:{
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column"
    },
    texto:{
        textAlign:"center"
    },
    input: {
     width: 200,
     height: 30,
     textAlign:"center",   
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: "#090909"
   },
   button: {
    textAlign:"center"
   },
   btnText: {
    color: "green",
    textAlign:"center"
   }
})