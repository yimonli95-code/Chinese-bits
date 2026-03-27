'use client';

import { useState } from 'react';
import { phrases, scenes } from '@/data/phrases';
import PhraseCard from '@/components/PhraseCard';

export default function Home() {
  const [selectedScene, setSelectedScene] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPhrases = phrases.filter(phrase => {
    const matchesScene = selectedScene === 'All' || phrase.scene === selectedScene;
    const matchesSearch = 
      phrase.chinese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.pinyin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesScene && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Chinese Bits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn 1000 commonly used Chinese phrases
          </p>
        </header>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search Chinese, Pinyin, or English..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            {/* Scene Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedScene('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedScene === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              {scenes.map(scene => (
                <button
                  key={scene}
                  onClick={() => setSelectedScene(scene)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedScene === scene
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {scene}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Phrases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhrases.map(phrase => (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPhrases.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No phrases found. Try a different search or filter.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Click the speaker icon to hear pronunciation
          </p>
        </footer>
      </div>
    </div>
  );
}
