import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "../shared";
import { lowlight } from "lowlight/lib/core";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
} from "react-icons/rx";

import "highlight.js/styles/atom-one-dark.css";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose"
        editor={editor}
      />

      {editor && (
        <FloatingMenu
          className="bg-red-200 py-2 px-1 shadow-xl border gap-1 border-red-200 shadow-black/20 rounded-lg overflow-hidden flex flex-col"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            return $from.nodeBefore?.textContent === "/";
          }}
        >
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-red-300"
          >
            <img
              className="w-12 border border-red-50 rounded"
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="text"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-600">
                Just start writing with plain text
              </span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-red-300"
          >
            <img
              className="w-12 border border-red-50 rounded"
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="text"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-600">Big section heading</span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bg-red-200 shadow-xl border border-red-200 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-neutral-50"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
