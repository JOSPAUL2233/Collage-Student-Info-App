import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

function Notes() {
  const [data, setData] = useState([]);
  // const [myUser, setMyUser] = useState({});

  async function getData() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        params: { username: "Bret" },
      });
      setData(response.data[0]);
      // for (let user in data) {
      //   if (data[user].username == "Bret") {
      //     setMyUser(data[user]);
      //   }
      // }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>Notes - </Text>
        <Text>ID: {data.id}</Text>
        <Text>Name: {data.name}</Text>
        <Text>Email: {data.email}</Text>
        <Text>Website: {data.website}</Text>
        <Text>Phone: {data.phone}</Text>
      </View>
    </View>
  );
}

export default Notes;

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
