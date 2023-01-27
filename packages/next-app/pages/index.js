import Header from "./Header";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecievedMemos from "./components/RecievedMemos"
import CTA from "./components/CTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CTA/>
      <RecievedMemos/>
 
      
      <Footer />
    </>
  );
}
