import React, { useState } from "react";
import axios from "axios";

const UploadImage = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/images/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      setFile(null);
      onUploadSuccess(); // Refresh image list
    } catch (error) {
      setMessage("Error uploading image.");
      console.error(error);
    }
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="file" onChange={handleFileChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Upload Image</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default ImageUpload;
