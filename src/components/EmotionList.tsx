// src/components/EmotionList.tsx
type Emotion = { id: number; created_at: string; content: string; };
export default function EmotionList({ groupedEmotions }: { groupedEmotions: Record<string, Emotion[]> }) {
  if (Object.keys(groupedEmotions).length === 0) {
    return <p className="text-center text-gray-500 mt-8">まだ記録された感情はありません。</p>;
  }
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">記録された彩</h2>
      {Object.entries(groupedEmotions).map(([date, emotions]) => (
        <div key={date} className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 border-b pb-2 mb-3">{date}</h3>
          <ul className="space-y-2">
            {emotions.map((emotion) => (
              <li key={emotion.id} className="p-4 bg-white border rounded-md shadow-sm">
                <p className="text-gray-800">{emotion.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(emotion.created_at).toLocaleTimeString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}