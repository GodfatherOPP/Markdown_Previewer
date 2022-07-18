import { useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const initialState = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  const [text, setText] = useState(initialState);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <Row className="top_row">
        <Col xs={12} md={12} lg={12} className="column">
          <h1>Markdown Previewer</h1>
        </Col>
      </Row>
      <Row className="bottom_row">
        <Col xs={12} md={12} lg={6} className="column">
          <h4 className="heading">Editor</h4>
          <textarea id="editor" value={text} onChange={handleChange} />
        </Col>
        <Col xs={12} md={12} lg={6} className="column">
          <h4 className="heading">Previewer</h4>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
