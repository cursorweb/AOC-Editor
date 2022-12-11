import './App.css';

import Editor from "@monaco-editor/react";
import { useRef } from 'react';

import { Nav } from '../components/Nav/Nav.js';

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

        if (path === "utils.d.ts") {
          /*
          export declare function...
          export {};
          */
          jsDefs.addExtraLib(text.replace(/export declare/g, "").replace(/export \{\};/g, "").replace(/export /g, ""), "global.d.ts");
        }
      }
    });

    editor.addAction({
      // An unique identifier of the contributed action.
      id: 'run-code',

      // A label of the action that will be presented to the user.
      label: 'Run Code',

      // An optional array of keybindings for the action.
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS
      ],
      run: () => {
        evalIt();
      }
    });
  }

  function evalIt() {
    const code = editorRef.current.getValue();
    const text = "some\nrandom\ninput";
    const lines = text.split("\n");

    // eslint-disable-next-line
    new Function("lines", "text", code)(lines, text);
  }

  return (
    <div>
      {/* <h1>{process.env.NODE_ENV === 'production' ? "This is production!" : "Development"}</h1> */}
      <Nav />
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
        defaultValue=""
      />

      {
        process.env.NODE_ENV === 'production' ?
          <iframe src="/lib/docs" title="Docs"></iframe> :
          <iframe srcDoc='docs in production only' title='Docs'></iframe>
      }
    </div>
  );
}
