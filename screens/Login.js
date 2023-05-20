import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { UsersContext } from "../context/user-context";

function Login({ navigation }) {
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const [credentials, setCredentials] = useState({
  //   userName: "1234",
  //   password: "1234",
  //   name: "ABC",
  // });
  const [userData, setUserData] = useContext(UsersContext);

  const users = [
    { userName: "1234", password: "1234", name: "Jayanta" },
    { userName: "", password: "", name: "Jos Paul" },
    { userName: "222", password: "222", name: "Abhay" },
  ];

  // let credentials = {
  //   userName: "1234",
  //   password: "1234",
  //   name: "ABC",
  // };

  useEffect(() => {
    // for (let user in users) {
    //   if (reg == users[user].userName && password == users[user].password) {
    //     credentials = { ...users[user] };
    //   }
    // }
    if (loggedIn) {
      navigation.navigate("DrawerNavigator", {
        screen: "Profile",
        // userData: credentials,
      });
      setLoggedIn(false);
      setReg("");
      setPassword("");
    }
  }, [loggedIn]);

  function onSignIn() {
    for (let user in users) {
      if (reg == users[user].userName && password == users[user].password) {
        // setCredentials(users[user]);
        setUserData(users[user]);
        setLoggedIn(true);
        return;
      } else {
        setLoggedIn(false);
      }
    }

    // if (reg == credentials.userName && password == credentials.password) {
    //   setLoggedIn(true);
    // } else {
    //   setLoggedIn(false);
    // }
    // if (loggedIn) {
    //   setReg("");
    //   setPassword("");
    //   navigation.navigate("DrawerNavigator", {
    //     screen: "Profile",
    //   });
    //   setLoggedIn(false)
    // }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.inputView}>
        <TextInput
          value={reg}
          style={styles.TextInput}
          placeholder="Reg. No"
          onChangeText={(regNo) => setReg(regNo)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Pressable
        style={styles.loginBtn}
        android_ripple={{ color: "#ccc" }}
        onPress={onSignIn}
      >
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#73C2FB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 25,
    height: 50,
    width: 250,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#008ECC",
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
  },
});
