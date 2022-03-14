# asyncStorage

I want to store object(players) in AsyncStorage
when I console.log(players) => 
Array [
  Object {
    "id": 1647250025146,
    "number": "9",
    "points": 3,
  },
]
Now when I try to store data:
const saveData = async (players) => {
    try {
      await AsyncStorage.setItem("scorers", JSON.stringify(players));
    } catch (e) {
      console.log(e);
    }
  };
and onAdd =()=>{
saveData(players)
}
nothing get stored in "scorers"
