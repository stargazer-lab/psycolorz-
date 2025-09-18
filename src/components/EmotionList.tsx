// src/components/EmotionList.tsx

type Emotion = { id: number; created_at: string; content: string; };

// selectedDateとemotionsを受け取るように変更
export default function EmotionList({ selectedDate, emotions }: { selectedDate: Date | null, emotions: Emotion[] }) {
  
  // 日付が選択されていない場合は何も表示しない
  if (!selectedDate) {
    return null; 
  }

  return (
    <div>
      {/* 選択された日付を見出しとして表示 */}
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">
        {selectedDate.toLocaleDateString()} の記録
      </h2>
      
      {/* 記録がなければメッセージを表示 */}
      {emotions.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">この日の記録はありません。</p>
      ) : (
        <ul className="space-y-2 mt-4">
          {emotions.map((emotion) => (
            <li key={emotion.id} className="p-4 bg-gray-50 border rounded-md">
              <p className="text-gray-800">{emotion.content}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(emotion.created_at).toLocaleTimeString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}