import { Text, View ,StyleSheet,ScrollView} from "react-native";
import { useContext } from "react";
import { UsersContext } from "../context/user-context";

function Attendance() {
  const [userData, setUserData] = useContext(UsersContext);

  return (

<ScrollView style={{backgroundColor: '#e2edff'}}>

    <View style={styles.container}>
      <Text style={styles.title}>My Attendance</Text>
            
        <View style={styles.row}>
          <Text style={styles.subject}>IT1601 : JAVA PROGRAMMING(T)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1602 : COMPUTER NETWORKS(T)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1607 : SOFTWARE ENGINEERING(T)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1637 : LATEST TRENDS IN INFORMATION TECHNOLOGY(E)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1646 : DIGITAL IMAGE PROCESSING(E)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1661 : JAVA PROGRAMMING LAB(L)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subject}>IT1662 : COMPUTER NETWORKS LAB(L)</Text>
              <Text style={styles.percentage}>70%{"\n"}
              <Text style = {styles.classCount}>38/40</Text>
          </Text>
        </View>
        
        
        
     
    </View>


</ScrollView>

    // <View>
    //   <Text>View Attendance</Text>
    //   <Text>Name: {userData.name}</Text>
    //   <Text>Registration Number: {userData.userName}</Text>
    // </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e2edff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    color:'#3d43a7'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    
    backgroundColor: '#5560da',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  subject: {
    fontSize: 16,
    width: '50%',
    color:"white"
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'right',
    color:"white"
  },
  classCount: {
    fontSize: 14,
    color: '#c4c4c4',
  },

  
});






export default Attendance;
