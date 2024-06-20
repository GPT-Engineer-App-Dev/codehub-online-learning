import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import '@uiw/react-codemirror/dist/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your JavaScript code here\n');

  const handleEditorChange = (editor, data, value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
          handleEditorChange(editor, data, value);
        }}
      />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default CodeEditor;