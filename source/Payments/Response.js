import React from "react";
import { WebView } from "react-native-webview";
import { useWindowDimensions, StyleSheet } from "react-native";

const Response = ({ route }) => {
  const { width } = useWindowDimensions();
  const ticketData = {
    qrID: "ticketData.qrID",
    name: "ticketData.name",
    phoneNo: "ticketData.phoneNo",
  };

  const body = `order_id=${ticketData.qrID}&visitor_name=${ticketData.name}&visitor_phone=${ticketData.phoneNo}&total_payable_amount=130&visitor_address=mahmoorganj`;

  return (
    <WebView
      source={{
        uri: "https://divyayodhya.com/newdivya/frontend/home/testpayment",
        headers: "",
        body: body,
        method: "POST",
      }}
      javaScriptEnabled={true}
      javaScriptEnabledAndroid={true}
    />
  );
};

export default Response;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
