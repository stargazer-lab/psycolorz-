'use client';

import { useState } from 'react';
// 1. 作成したSupabaseクライアントを読み込む
import { supabase } from '@/lib/supabaseClient';

export default function EmotionForm() {
  const [text, setText] = useState('');

  // 2. ボタンが押されたときの関数を改造する
  const handleSubmit = async () => {
    if (text.trim() === '') return; // 文字が空なら何もしない

    // 3. Supabaseの'emotions'テーブルにデータを挿入（insert）する
    const { error } = await supabase
      .from('emotions')
      .insert([
        { content: text } // content列に、記憶しているtextを入れる
      ]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('データの保存に失敗しました。');
    } else {
      console.log('データが正常に保存されました！');
      setText(''); // 保存が成功したら入力欄を空にする
    }
  };

  return (
    <div className="p-4">
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