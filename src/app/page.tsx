import EmotionForm from '@/components/EmotionForm';
import EmotionList from '@/components/EmotionList';
import { supabase } from '@/lib/supabaseClient';

export const revalidate = 0;

export default async function HomePage() {
  const { data: emotions } = await supabase
    .from('emotions')
    .select('*')
    .order('created_at', { ascending: false });

  const groupedEmotions = (emotions || []).reduce((acc, emotion) => {
    const date = new Date(emotion.created_at).toLocaleDateString();

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(emotion);

    return acc;
  }, {} as Record<string, any[]>);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">PsyColorZ</h1>
          <p className="text-center text-gray-500">What color is your mind today?</p>
        </div>

        <EmotionForm />

        <div className="border-t border-gray-200 pt-8">
          <EmotionList groupedEmotions={groupedEmotions} />
        </div>
      </div>
    </main>
  );
}