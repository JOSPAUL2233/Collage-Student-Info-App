import { useContext } from "react";
import { Text, View, StyleSheet, Pressable} from "react-native";
import { UsersContext } from "../context/user-context";

function Profile({ route, navigation }) {
  // console.log(route.params.params.userData);
  // let userData = route.params.params.userData;
  function signOutHandler() {
    navigation.navigate("Login");
  }

  const [userData, setUserData] = useContext(UsersContext);


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Text style={styles.gridItemTitle}>Name:</Text>
          <Text style={styles.gridItemValue}>{userData.name}</Text>
        </View>
        
        <View style={styles.gridItem}>
          <Text style={styles.gridItemTitle}>Reg no:</Text>
          <Text style={styles.gridItemValue}>{/*{userData.userName}*/}20200196</Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>Collage id:</Text>
          <Text style={styles.gridItemValue}>jos_202000196@smit.smu.edu.in</Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>TG Name:</Text>
          <Text style={styles.gridItemValue}>Rustam Ali Ahmed{"\n"}</Text>

          <Text style={styles.gridItemTitle}>TG Phone:</Text>
          <Text style={styles.gridItemValue}>XXX-XXXX XXXX</Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>Phone:</Text>
          <Text style={styles.gridItemValue}>7025081486</Text>
        </View>

      </View>

      <View style={styles.buttonContainer}>
           <Pressable
             onPress={signOutHandler}
             android_ripple={{ color: "#bcdef2" }}
           >
             <Text style={styles.message}>Log Out</Text>

           </Pressable>

           {/* <Image
          source={require("../assets/images/logout-arrow.png")}
          style={styles.image}
        /> */}
        </View>

    </View>
  );


  //--------------------------------------------------OLD LAYOUT---------------------------------------------


    // <View>
    //   <View style={styles.container}>
    //     <View style={styles.items}>

    //       <Text style={styles.heading}>{userData.name} </Text>
    //       <Text style={styles.items}>Reg No: {userData.userName}</Text>
    //       <Text style={styles.items}>Semester: 6</Text>
    //       <Text style={styles.items}>Email: abcd123@gmai.com</Text>
    //       <Text style={styles.items}>Phone: XXXXXXXXXX</Text>
    //       <Text style={styles.items}>
    //         TG Name: Dr. Rustam Ali Ahmed
    //       </Text>
    //       <Text style={styles.items}>Tg Phone: XXXXXXXXX{"\n\n"}</Text>
    //     </View>
    //     <View style={styles.buttonContainer}>
    //       <Pressable
    //         onPress={signOutHandler}
    //         android_ripple={{ color: "#bcdef2" }}
    //       >
    //         <Text style={styles.message}>Log Out</Text>
    //       </Pressable>
    //     </View>
    //   </View>
    // </View>
  // );
  //--------------------------------------------------------------------------------------------------------------
}

export default Profile;


const styles = StyleSheet.create({


  
  container: {
    flex: 1,
    backgroundColor: '#e2edff',//e2edff
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom:50,
    paddingTop:50,
    color:'#3e1eb2'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#5560da',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },

  gridItemLong: {
    width: '100%',
    backgroundColor: '#5560da',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },

  image: {
    marginBottom: 100,
    height: 75,
    width: 300,
  },

  gridItemTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#f4f5fb'
  },
  
  gridItemValue: {
    fontSize: 16,
    color:'#f4f5fb'
  },

    buttonContainer: {
    // backgroundColor:'#b3b3b3',
    // borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 75,

    textAlign: "center",


    // padding:10,
    paddingHorizontal:5,
    paddingVertical:8,

    marginVertical: 20,
    backgroundColor: "#3d43a7",
  },

   message: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color:'#f4f5fb'
  },

  //----------------------------------------------OLD DESIGN---------------------------------------------

  // items: {
  //   marginLeft: 17,
  //   fontSize: 20,
  // },

  // heading: {
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   fontSize: 25,
  //   paddingBottom: 12,
  // },

  // container: {
  //   padding: 10,
  //   paddingTop: 100,
  //   paddingBottom: 100,
  //   margin: 10,
  //   marginTop: 50,
  //   borderWidth: 1,
  //   borderColor: 0,
  //   borderRadius: 10,
  //   elevation: 10,
  //   shadowColor: "#000",
    

  //   // shadowOpacity: 0.8,
  //   // shadowRadius: 5,
  // },

 

  //-----------------------------------------------------------------------------------------------

});
