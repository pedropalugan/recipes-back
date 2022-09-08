import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';
import { launchImageLibrary, ImagePicker } from 'react-native-image-picker';
import { useState } from 'react';
import Axios from 'axios'

export default function App() {

  const [img, setImg] = useState(null)




  const upload = () => {
    console.log(img)

    const form = new FormData()

    //Append the rest of the items to fill all the collumns on the database
      
    form.append('image', img)

    fetch('http://localhost:3000/uploadMealPic', {
      method : 'POST',
      body : form
    }).then((response) => console.log(response))
    .catch((error) => console.log(error))
  }


  return (
    <SafeAreaView style={styles.container}>
      <Button title="Submit" onPress={upload}/>
      <input type='file' onChange={e => setImg(e.target.files[0])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
