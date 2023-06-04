import React from "react";
import AppLayout from "../components/common/AppLayout";
import ChatRoom from "../components/Contact/ChatRoom";
import BottomNav from "../components/common/BottomNav";




const ContactPage = () => {

  return (
    <>
    <AppLayout>
      <ChatRoom/>
      </AppLayout>
     <BottomNav/>
     </>
  );
}

export default ContactPage;