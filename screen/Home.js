import { View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { PdfCode } from "../components/PdfCode";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

const Home = () => {
  const [pname, setPname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [course, setCourse] = useState("");
  const [project, setProject] = useState("");
  const [projectDes, setProjectDesc] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [career, setCareer] = useState("");
  const [image, setImage] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const printToFile = async () => {
    let html = PdfCode(
      pname,
      lname,
      email,
      phone,
      skills,
      collegeName,
      course,
      project,
      projectDes,
      hobbies,
      career,
      image
    );
    try {
      const { uri } = await Print.printToFileAsync({
        html,
      });
      console.log("File has been saved to:", uri);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
      setPname("");
      setLname("");
      setPhone("");
      setCareer("");
      setEmail("");
      setCourse("");
      setPhone("");
      setSkills("");
      setProject("");
      setProjectDesc("");
      setHobbies("");
      setcollegeName("");
    } catch (err) {
      Alert.alert("Make shure You have Internet Connection");
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width: responsiveWidth(90),
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Input
          style={{ margin: 5 }}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="person" color="#f4b63e" size={20} />
          }
          placeholder="First Name"
          value={pname}
          onChangeText={(value) => setPname(value)}
        />
        <Input
          style={{ margin: 5 }}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="person" color="#f4b63e" size={20} />
          }
          placeholder="Last Name"
          value={lname}
          onChangeText={(value) => setLname(value)}
        />

        <Input
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={{ margin: 5 }}
          placeholder="example@exmple.com"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="mail" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={phone}
          onChangeText={(value) => setPhone(value)}
          style={{ margin: 5 }}
          placeholder="0123456789"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="phone" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={collegeName}
          onChangeText={(value) => setcollegeName(value)}
          style={{ margin: 5 }}
          placeholder="College Name"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="book" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={course}
          onChangeText={(value) => setCourse(value)}
          style={{ margin: 5 }}
          placeholder="Course"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="font-awesome" name="book" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={skills}
          onChangeText={(value) => setSkills(value)}
          style={{ margin: 5 }}
          placeholder="Skills"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="computer" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={project}
          onChangeText={(value) => setProject(value)}
          style={{ margin: 5 }}
          placeholder="Project Name"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="font-awesome" name="laptop" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={projectDes}
          onChangeText={(value) => setProjectDesc(value)}
          style={{ margin: 5 }}
          placeholder="Abour Project"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="create" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={career}
          onChangeText={(value) => setCareer(value)}
          style={{ margin: 5 }}
          placeholder="Career Objective"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
          leftIcon={
            <Icon type="ionicons" name="note" color="#f4b63e" size={20} />
          }
        />
        <Input
          value={hobbies}
          onChangeText={(value) => setHobbies(value)}
          style={{ margin: 5 }}
          placeholder="Hobbies"
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{ borderBottomWidth: 1, borderColor: "#f4b63e" }}
        />
        {/* <Button
          buttonStyle={{
            width: responsiveWidth(32),
            alignSelf: "center",
            backgroundColor: "green",
            marginBottom: 20,
          }}
          onPress={pickImage}
        >
          <Icon name="photo" color="white" marginRight={5} />
          Upload Photo
        </Button>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200,alignSelf:"center",marginBottom:20 }} />
        )}
        {console.log(image)} */}

        <Button
          buttonStyle={{ backgroundColor: "#f4b63e", marginBottom: 20 }}
          radius={"sm"}
          type="solid"
          onPress={printToFile}
        >
          Save
          <Icon name="save" color="white" marginHorizontal={5} />
        </Button>
      </View>
    </ScrollView>
  );
};

export default Home;
