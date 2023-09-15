/*
filename: App.js 
*/

import React, { useCallback, useState } from "react";
// Import the dropzone component
import Dropzone from "./DropZone";
import ImageList from "./ImageList";
// cuid is a simple library to generate unique IDs
import cuid from "cuid";

import "../../App.css";

function App() {
    // Create a state called images using useState hooks and pass the initial value as empty array
    const [images, setImages] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function(e) {
            // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
                setImages(prevState => [
                    ...prevState,
                    { id: cuid(), src: e.target.result }
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
        console.log(acceptedFiles);
  }, []);

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
    <main className="App">
      <h1 className="text-center">Drag and Drop Example</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageList images={images}/>
    </main>
  );
}

export default App;