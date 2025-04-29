import EditorWrapper from '@/components/EditorWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Civic Frontend Assignment 2 - Emotion Editor</h1>
      <EditorWrapper />
    </main>
  );
}
