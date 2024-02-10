// Import the necessary modules
import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Your code here

// Define your component
const Home = () => {
  const navigation = useNavigation();
  const [dataObject, setDataObject] = useState({
    order_id: "ticketData.qrID",
    visitor_name: "ticketData.name",
    visitor_phone: "ticketData.phoneNo",
    total_payable_amount: 130,
    visitor_address: "mahmoorganj",
  });

  // Function to handle sending the data object
  const sendData = async () => {
    try {
      // Define the URL to post the data to
      const url = "https://divyayodhya.com/newdivya/frontend/home/testpayment";

      // Define the fetch options
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(dataObject), // Convert the data object to JSON
      };

      // Send the POST request
      const response = await fetch(url, options);

      // Check the response status
      if (response.ok) {
        // Request was successful
        const responseData = await response.text(); // Parse the response data as text
        // Handle the response data as needed
        console.log(responseData);
        navigation.navigate("Response", { htmlContent: responseData });
      } else {
        // Request failed
        Alert.alert("Error", "Failed to send data");
      }
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
      Alert.alert("Error", "Failed to send data");
    }
  };

  return (
    <View>
      {/* Button to trigger sending the data */}
      <Button title="Send Data" onPress={sendData} />
    </View>
  );
};

// Export your component
export default Home;
