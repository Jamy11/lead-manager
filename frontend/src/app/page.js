"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "@/components/layouts/Header";
import Dashboards from "@/components/leads/Dashboards";
export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Dashboards />
      </div>
    </>
  );
}
