import React from "react"
import { StyleSheet, Dimensions } from "react-native";

import Colors from "../../../../assets/colors"

export default StyleSheet.create({
  totalView: {
    padding: 20
  },
  name:{
    color: Colors.black,
    fontSize: 25,
    fontWeight: "bold"
  },
  stars: {
    alignItems: "baseline",
    alignSelf: "baseline",
    marginVertical: 20
  },
  title: {
    padding: 10,
    paddingLeft: 20,
    backgroundColor: Colors.blue,
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold"
  },
  starStyle: {
    color: Colors.amarelo,
  },
  emptystarStyle: {
    color: Colors.gray,
  },
  moneyStarStyle: {
    color: Colors.blue,
  },
  moneyEmptyStarStyle: {
    color: Colors.gray,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width/2,
  },
})
