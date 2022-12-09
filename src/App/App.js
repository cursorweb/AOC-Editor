import './App.css';
import Editor from "@monaco-editor/react";
import { useRef } from 'react';

const file = `
/**
 * The input, split by lines.
 */
const lines: string[];

/**
 * The raw input.
 */
const text: string;`;

export function App() {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  function editorMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;

    const jsDefs = monaco.languages.typescript.javascriptDefaults;

    jsDefs.addExtraLib(file, 'file.d.ts');

    fetch("/api/types").then(r => r.json()).then(async files => {
      for (const path of files) {
        const text = await fetch("/lib/dist/" + path).then(x => x.text());
        jsDefs.addExtraLib(text, path);
      }
    });
  }

  function evalIt(e) {
    const text = "some\nrandom\ninput";
    const lines = text.split("\n");

    // eslint-disable-next-line
    new Function("lines", "text", e)(lines, text);
  }

  return (
    <div className="App">
      <h1>My IDE</h1>
      <p>Filler text, yeah i'm real</p>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme='vs-dark'
        options={{
          fontSize: 22,
          cursorSmoothCaretAnimation: true,
          scrollBeyondLastLine: true,
          smoothScrolling: true,
        }}
        onMount={editorMount}
        onChange={evalIt}
        defaultValue=""
      />
    </div>
  );
}
