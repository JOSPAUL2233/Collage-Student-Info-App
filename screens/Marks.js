import { Text, View , StyleSheet, ScrollView} from "react-native";
import { useContext } from "react";
import { UsersContext } from "../context/user-context";

function Marks() {
  const [userData, setUserData] = useContext(UsersContext);

  return (
    
    
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>

      <View style={styles.gridContainer}>
        
        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1601 : JAVA PROGRAMMING(T){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1602 : COMPUTER NETWORKS(T){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1607 : SOFTWARE ENGINEERING(T){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1637 : LATEST TRENDS IN INFORMATION TECHNOLOGY(E){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1646 : DIGITAL IMAGE PROCESSING(E){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1661 : JAVA PROGRAMMING LAB(L){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

        <View style={styles.gridItemLong}>
          <Text style={styles.gridItemTitle}>IT1662 : COMPUTER NETWORKS LAB(L){"\n"}</Text>
          <Text style={styles.gridItemValue}>Quiz I : </Text>
          <Text style={styles.gridItemValue}>Sessional I : </Text>
          <Text style={styles.gridItemValue}>Quiz II : </Text>
          <Text style={styles.gridItemValue}>Sessional II : </Text>
        </View>

      </View>

    </ScrollView>
  );
}




const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#e2edff',//e2edff
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    // marginBottom: 20,
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   // paddingBottom:50,
  //   // paddingTop:50,
  //   color:'#3e1eb2'
  // },
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
    marginBottom: 23,
    padding: 10,
    paddingBottom:30,
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

});

export default Marks;