import EmotionForm from '@/components/EmotionForm';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">PsyColorZ</h1>
        <EmotionForm />
      </div>
    </main>
  );
}