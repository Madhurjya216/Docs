import React, { useEffect, useState } from "react";
import "../style/Fg.css";
import axios from "axios";
import { BsTrash3Fill } from "react-icons/bs";

function Foreground() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://docs-server-zkdf.onrender.com/get`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`https://docs-server-zkdf.onrender.com/delete/${_id}`);
      console.log("Deleted todo with ID:", _id);
      // Fetch updated data after deletion
      const res = await axios.get("https://docs-server-zkdf.onrender.com/get");
      setData(res.data); // Update state with the updated data
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="foregrd_container">
      {data.map((item) => (
        <div className="note_box" key={item._id}>
          <div className="contain1">
            <span id="bin">
              <BsTrash3Fill onClick={() => deleteTodo(item._id)} />
            </span>
            <h3>{item.title}</h3>
          </div>
          <div className="contain2">
            <p>{item.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Foreground;
