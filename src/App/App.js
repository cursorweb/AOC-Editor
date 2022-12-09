import './App.css';
import Editor from "@monaco-editor/react";
import { useRef } from 'react';

export function App() {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  function editorMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;

    monaco.languages.typescript.javascriptDefaults.addExtraLib([
      'declare class Facts {',
      '    /**',
      '     * Returns the next fact',
      '     */',
      '    static next():string',
      '}',
    ].join('\n'), 'filename/facts.d.ts');
  }


  return (
    <div className="App">
      <h1>My IDE</h1>
      <p>Filler text</p>
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
        defaultValue="// some comment"
      />
    </div>
  );
}
