// src/app/page.tsx

import EmotionForm from '@/components/EmotionForm';
import EmotionCalendar from '@/components/EmotionCalendar';
import { supabase } from '@/lib/supabaseClient';

export const revalidate = 0;

export default async function HomePage() {
  const { data: emotions } = await supabase
    .from('emotions')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg mx-4">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">PsyColorZ</h1>
          <p className="text-center text-gray-500">What color is your mind today?</p>
        </div>
        
        <EmotionForm />
        
        <div className="border-t border-gray-200 pt-8">
          <EmotionCalendar emotions={emotions} />
        </div>
      </div>
    </main>
  );
}