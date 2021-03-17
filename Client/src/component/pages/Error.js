import React, { Component, useEffect } from "react";
import axios from "axios";
const Error = (props) => {

  const { message } = props.error;
  const { url } = props;
  useEffect(() => {
    let mailAt = axios.post("http://85.105.113.179:3000/api/v1.0.1/Mailgonder", {
      subject: `magazasiparis.error`, mailTo: `emreatessoy@gmail.com`, message: `Hata bilgisi ${message} linki bilgisi ${window.location}
      Sepet Bilgisi ${localStorage.getItem("Sepet")}`
    });
    localStorage.clear();
  })
  return <div><a href="#" onClick={() => window.location.reload()}>Baglantinizda bir hata olustu lutfen baglantiya tiklayiniz</a></div>;

  const { message } = props.error;  
  const {url}   = props;  
  useEffect(()=>{
    let mailAt = axios.post("http://85.105.113.179:3000/api/v1.0.1/Mailgonder",{
      subject:`magazasiparis.error`, mailTo:`emreatessoy@gmail.com`, message:`Hata bilgisi ${message} linki bilgisi ${window.location}`
    });
    console.log(mailAt)

    
  })
  return <div><a href="#" onClick={()=>window.location.reload()}>Baglantinizda bir hata olustu lutfen tekrar deneyiniz</a></div>;

};

export default Error;
