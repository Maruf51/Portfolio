import { useState } from "react";

const url = 'https://api.cloudinary.com/v1_1/dltuyk98s/image/upload';
const unsignedUploadPreset = 'chat_app';

const Blog = ({ selected }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  const uploadImage = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      console.error('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('upload_preset', unsignedUploadPreset);
    formData.append('tags', 'browser_upload'); // Optional - add tags for image admin in Cloudinary
    formData.append('file', selectedImage);

    try {
      const response = await fetch(url, {
        method: 'POST', // Fixed HTTP method
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className={`duration-300 hidden ${selected === 'Blog' && 'nav-active'}`}>
      <h1>Blog</h1>
      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default Blog;
