'use client';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // カレンダーの基本デザインを読み込む

// カレンダーの日付の型を定義
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EmotionCalendar() {
  // とりあえず、今日の日付でカレンダーを表示する
  const today = new Date();

  return (
    <div>
      <Calendar value={today} />
    </div>
  );
}