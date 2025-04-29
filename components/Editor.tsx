'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { KeywordHoverCard } from './KeywordHoverCard';

const keywords = {
  happy: "Keep smiling! You're awesome!",
  sad: "Stay strong! Better days are ahead!",
};

function decorateText(text: string) {
    const parts = text.split(/(happy|sad)/gi);
    return parts.map((part, index) => {
      const keyword = part.toLowerCase() as keyof typeof keywords;
      if (keywords[keyword]) {
        return (
          <KeywordHoverCard key={index} message={keywords[keyword]}>
            <span className="bg-yellow-100 text-gray-800 px-2 py-1 rounded-lg font-semibold text-sm hover:bg-yellow-200 transition-colors">
              {part}
            </span>
          </KeywordHoverCard>
        );
      }
      return <span key={index} className="text-gray-900">{part}</span>; // darker text for normal parts too
    });
  }  

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Type something with happy or sad!</p>',
  });

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="border border-gray-300 bg-white rounded-2xl p-6 shadow-sm">
      <EditorContent editor={editor} className="prose prose-sm text-gray-900" />
      </div>

      <div className="border border-dashed border-gray-400 bg-gray-50 rounded-2xl p-6 min-h-[120px]">
        {editor && decorateText(editor.getText())}
      </div>
    </div>
  );
}
