import React from 'react'
import { Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const INJECTED_JAVASCRIPT = (window, document) => {
  let submitBtn = undefined
  function getSelectedSeats(){
    submitBtn = document.getElementById("submitBtn")
    if(submitBtn){
      submitBtn.onclick = (e)=>{
        const seats = []
        document.querySelectorAll(".seat_selected").forEach(element => {
          seats.push(element.getAttribute("name"))
        });
        window.ReactNativeWebView.postMessage(seats.join(","))
        e.preventDefault()
        e.stopPropagation()
      }
    } else {
      setTimeout(()=>{
        getSelectedSeats()
      },2000) 
    }
  }
  getSelectedSeats()
}

// 技术为生活服务
const WebViewPage = () => {
  return (
    <WebView 
      source={{uri:'https://m.mtime.cn/#!/onlineticket/626282285/'}}
      injectedJavaScript={`(${INJECTED_JAVASCRIPT.toString()})(window, document)`}
      onMessage={(msg)=>{
        Alert.alert("你选择的座位是："+msg.nativeEvent.data)
      }}
    ></WebView>
  );
}

export default WebViewPage