import React from "react";
import AudioToText from "./AudioToText";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="py-5 text-center">
      <h3>Google Speech-to-text demo</h3>
      <p>It processes medical terminology and recognizes punctuation and commands within square brackets. <a href="https://cloud.google.com/speech-to-text/v2/docs/medical-models">docs</a></p>
      <AudioToText />
    </Container>
  );
}

export default App;
