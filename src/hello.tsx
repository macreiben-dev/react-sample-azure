import React, { useEffect, useState } from "react";
import axios from "axios";

const Hello: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      try {
        // const response = await axios.get(
        //   "https://demo-api-node-raccoon-gygyh7dwbnhpadgy.westeurope-01.azurewebsites.net/hello"
        // );

        const current = await fetch(
          "https://demo-api-node-raccoon-gygyh7dwbnhpadgy.westeurope-01.azurewebsites.net/hello"
        );

        const data = await current.text();

        console.info("data", data);

        setMessage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the react from azure static webapp!</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default Hello;
