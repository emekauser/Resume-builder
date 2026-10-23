'use client';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Text from '@tiptap/extension-text';
import EditorControl from './editorControl';
import styles from './editor.module.css';
import BulletList from '@tiptap/extension-bullet-list';
import Typography from '@tiptap/extension-typography';
// import StarterKit from '@tiptap/starter-kit';
import History from '@tiptap/extension-history';
import TextAlign from '@tiptap/extension-text-align';
import Strike from '@tiptap/extension-strike';
import Italic from '@tiptap/extension-italic';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Blockquote from '@tiptap/extension-blockquote';
import { FC } from 'react';
import Link from '@tiptap/extension-link';
import InputErrorMessage from '../InputElement/InputErrorMessage/InputError';

type Props = {
  getEditorContent?: (editor: Editor) => void;
  content?: string;
  errorMessage?: string;
};

const TextEditor: FC<Props> = ({ getEditorContent, content, errorMessage }) => {
  const editor = useEditor({
    content,
    onUpdate({ editor }) {
      getEditorContent && getEditorContent(editor);
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      Typography,
      Italic,
      Bold,
      Strike,
      Blockquote,
      History,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: styles.list,
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: styles.bulletList,
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: styles.list,
        },
      }),
      Code.configure({
        HTMLAttributes: {
          class: styles.codeStyle,
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: styles.heading,
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: styles.link,
        },
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':')
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto'];
            const protocol = parsedUrl.protocol.replace(':', '');

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === 'string' ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
      }),
    ],
    editable: true,
    editorProps: {
      attributes: {
        class: `${styles.editorBody} prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none`,
      },
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorControl editor={editor} />
      <EditorContent editor={editor} />
      <InputErrorMessage  errorMessage={errorMessage as string} />
    </>
  );
};

export default TextEditor;
