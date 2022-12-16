import './App.css';

import Editor from "@monaco-editor/react";
import { useRef, useState } from 'react';

import { Nav } from '../components/Nav/Nav.js';
import { Modal } from '../components/Modal/Modal.js';

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

    const [modals, _setModal] = useState({});
    function setModal(id, fel) {
        _setModal(m => {
            let iRef = useRef(m.length);

            const el = fel({
                // close modal
                // indexRef
                closeModal,
                iRef
            });

            m.push(el);
        });
    }

    function closeModal(iRef) {
        const i = iRef.current;
        
    }

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
            id: 'run-code',
            label: 'Run Code',

            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS
            ],
            run: () => {
                evalIt();
            }
        });

        monaco.editor.defineTheme('vs-dark-plus', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: "identifier.js", foreground: "9cdcfe" }
            ],
            colors: {}
        });

        editor.updateOptions({
            theme: "vs-dark-plus"
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
            <Nav
                editorRef={editorRef}
                setModal={setModal}
                closeModal={closeModal}
            />

            <Editor
                height="90vh"
                defaultLanguage="javascript"
                theme='vs-dark'
                options={{
                    fontSize: 22,
                    cursorSmoothCaretAnimation: true,
                    scrollBeyondLastLine: true,
                    smoothScrolling: true,
                    // todo: this might be bug
                    // https://github.com/microsoft/monaco-editor/issues/3013
                    'bracketPairColorization.enabled': true,
                }}
                onMount={editorMount}
                defaultValue=""
            />

            <div>
                {modals}
            </div>

            {
                process.env.NODE_ENV === 'production' ?
                    <iframe src="/lib/docs" title="Docs"></iframe> :
                    <iframe srcDoc='docs in production only' title='Docs'></iframe>
            }
        </div>
    );
}
