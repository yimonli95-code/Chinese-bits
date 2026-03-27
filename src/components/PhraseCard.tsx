'use client';

import { Phrase } from '@/data/phrases';

interface PhraseCardProps {
  phrase: Phrase;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phrase.chinese);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          {phrase.scene}
        </span>
        <button
          onClick={speak}
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          title="Listen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {phrase.chinese}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {phrase.pinyin}
        </p>
      </div>
      
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-700 dark:text-gray-300">
          {phrase.english}
        </p>
      </div>
    </div>
  );
}
