import { StyleSheet } from "react-native";
import Colors from "../../assets/colors"

export default StyleSheet.create({
   totalView: {},
   image: {
      width: 263,
      height: 50,
      marginBottom: 25,
      alignSelf: "center"
   },
   formView: {
      margin: 40,
   },
   esqueciSenhaTexto: {
      textAlign: "center",
   },
   esqueciSenhaButton: {
      marginTop: 10,
      alignItems: "center"
   },
   buttonsView: {
      marginTop: 30,
   },
   text: {
      textAlign: "center",
      color: Colors.black,
      marginVertical: 10
   },
   button: {
      marginVertical: 30,
      backgroundColor: Colors.blue,
      color: Colors.white
   },
   withButton: {
      marginBottom: 15,
      backgroundColor: Colors.blue,
      color: Colors.white
   },
   buttonText: {
      fontWeight: "bold",
      textAlign: "center",
   },
   singUpText: {
      fontWeight: "bold",
      textAlign: "center",
   }
});