'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation'; // ★ 1. useRouterをインポート

export default function EmotionForm() {
  const [text, setText] = useState('');
  const router = useRouter(); // ★ 2. useRouterの準備

  const handleSubmit = async () => {
    if (text.trim() === '') return;

    const { error } = await supabase
      .from('emotions')
      .insert([{ content: text }]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('データの保存に失敗しました。');
    } else {
      setText('');
      // データ保存が成功したら、ページをリフレッシュする信号を送る
      router.refresh();
      console.log('データが正常に保存され、リストが更新されました！');
    }
  };

  return (
    <div className="p-4">
      {/* ... テキストエリアとボタンの部分は変更なし ... */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="今の気持ちを、言葉にしてみてください..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        彩を記録する
      </button>
    </div>
  );
}