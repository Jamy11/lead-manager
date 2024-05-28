"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, SetData] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leads/")
      .then(function (response) {
        // handle success
        SetData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return <>{data.name}</>;
}
