import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  Dimensions, Alert } from 'react-native';

import {Button} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

// get array of length 25
var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {
  
  constructor(props){
    super(props);
     this.state = {
        randomNumber: "",
        count: 0,
        game: "notWon"

     };
    
  }

// when app loads up
componentDidMount(){
  // call generate random number function
this.setState({randomNumber: this.generateRandomNumber()})

}

generateRandomNumber = () => {
// generate random number
let randomNumber = Math.floor(Math.random() * 25)
this.setState({randomNumber: randomNumber, isScratched: true});
return randomNumber;
};

scratchItemMethod = (itemNumber) => {
// decide lucky or unlucky
if(this.state.game === "notWon"){
if(this.state.count < 5){
  this.setState({count: this.state.count+1});
if(this.state.randomNumber === itemNumber){
  itemArray[itemNumber] = "lucky";
  this.setState({game: "Won"})
} else{
  itemArray[itemNumber] = "unlucky";
}
this.forceUpdate();
} else {

  Alert.alert("Game Over!!!! You Cannot Play Any Further. Reset");
}
} else if(this.state.game==="Won" || this.state.game==="shown"){

  Alert.alert("Reset The Game");
}
}

scratchItemIcon = (itemNumber) => {
// find right icon
if(itemArray[itemNumber] === "lucky"){
  return "dollar";

} else if(itemArray[itemNumber] === "unlucky"){

  return "frown-o";
}
return "circle";

}


scratchItemColor = (itemNumber) => {
// find right color
if(itemArray[itemNumber] === "lucky"){
  return "green";

} else if(itemArray[itemNumber] === "unlucky"){

  return "red";
}
return "black";

}

showAllItem = () => {
// button to reveal all icons

itemArray.fill('unlucky');
itemArray[this.state.randomNumber]='lucky';
this.setState({game: "shown"})
this.forceUpdate();
}


resetGame = () => {
//button to reset the game
this.setState({randomNumber: this.generateRandomNumber(), count: 0, game: "notWon"}, () => {
  itemArray.fill('empty');
  this.forceUpdate();
})

}

  render(){
    return (
        <View style={styles.container}>

          <View style={[styles.topBar, {marginBottom: 20}]}>
          <Text style={styles.topText}>Scratch That!!!</Text>

          </View>

          <View style={styles.grid}>
            <View style={styles.itemRow}>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(0)} size={50} color={this.scratchItemColor(0)} onPress={()=> {
                    this.scratchItemMethod(0)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(1)} size={50} color={this.scratchItemColor(1)} onPress={()=> {
                    this.scratchItemMethod(1)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(2)} size={50} color={this.scratchItemColor(2)} onPress={()=> {
                    this.scratchItemMethod(2)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(3)} size={50} color={this.scratchItemColor(3)} onPress={()=> {
                    this.scratchItemMethod(3)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(4)} size={50} color={this.scratchItemColor(4)} onPress={()=> {
                    this.scratchItemMethod(4)

                }}/>
              </TouchableOpacity>


            </View>




            <View style={styles.itemRow}>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(5)} size={50} color={this.scratchItemColor(5)} onPress={()=> {
                    this.scratchItemMethod(5)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(6)} size={50} color={this.scratchItemColor(6)} onPress={()=> {
                    this.scratchItemMethod(6)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(7)} size={50} color={this.scratchItemColor(7)} onPress={()=> {
                    this.scratchItemMethod(7)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(8)} size={50} color={this.scratchItemColor(8)} onPress={()=> {
                    this.scratchItemMethod(8)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(9)} size={50} color={this.scratchItemColor(9)} onPress={()=> {
                    this.scratchItemMethod(9)

                }}/>
              </TouchableOpacity>


            </View>






            <View style={styles.itemRow}>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(10)} size={50} color={this.scratchItemColor(10)} onPress={()=> {
                    this.scratchItemMethod(10)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(11)} size={50} color={this.scratchItemColor(11)} onPress={()=> {
                    this.scratchItemMethod(11)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(12)} size={50} color={this.scratchItemColor(12)} onPress={()=> {
                    this.scratchItemMethod(12)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(13)} size={50} color={this.scratchItemColor(13)} onPress={()=> {
                    this.scratchItemMethod(13)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(14)} size={50} color={this.scratchItemColor(14)} onPress={()=> {
                    this.scratchItemMethod(14)

                }}/>
              </TouchableOpacity>


            </View>






            <View style={styles.itemRow}>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(15)} size={50} color={this.scratchItemColor(15)} onPress={()=> {
                    this.scratchItemMethod(15)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(16)} size={50} color={this.scratchItemColor(16)} onPress={()=> {
                    this.scratchItemMethod(16)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(17)} size={50} color={this.scratchItemColor(17)} onPress={()=> {
                    this.scratchItemMethod(17)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(18)} size={50} color={this.scratchItemColor(18)} onPress={()=> {
                    this.scratchItemMethod(18)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(19)} size={50} color={this.scratchItemColor(19)} onPress={()=> {
                    this.scratchItemMethod(19)

                }}/>
              </TouchableOpacity>


            </View>






            <View style={styles.itemRow}>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(20)} size={50} color={this.scratchItemColor(20)} onPress={()=> {
                    this.scratchItemMethod(20)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(21)} size={50} color={this.scratchItemColor(21)} onPress={()=> {
                    this.scratchItemMethod(21)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(22)} size={50} color={this.scratchItemColor(22)} onPress={()=> {
                    this.scratchItemMethod(22)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(23)} size={50} color={this.scratchItemColor(23)} onPress={()=> {
                    this.scratchItemMethod(23)

                }}/>
              </TouchableOpacity>


              <TouchableOpacity style={styles.item}>
                <FontAwesome name={this.scratchItemIcon(24)} size={50} color={this.scratchItemColor(24)} onPress={()=> {
                    this.scratchItemMethod(24)

                }}/>
              </TouchableOpacity>


            </View>
            
          </View>
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Button onPress={()=>{
              this.showAllItem()
            }}  success style={styles.button}>
              <Text style={styles.buttonText}>
                Show All Coupons
              </Text>
            </Button>

            <Button onPress={()=> {
              this.resetGame()
            }}  primary style={styles.button}>
              <Text style={styles.buttonText}>
                Reset
              </Text>
            </Button>

          </View>
        </View>
          );
    }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {


  },
  itemRow: {
    flexDirection: "row"

  },
  item:{
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#dedbda",
    minWidth: 70
  },
  button: {
    marginTop: 10,
    minWidth: "70%",
    justifyContent:"center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"

  },
  topBar:{
    backgroundColor: "#8b78e6",
    height: 50,
    
    justifyContent: "center",
    width: Dimensions.get('window').width,
    
  },
  topText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20

  }
});
