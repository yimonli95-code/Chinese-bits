export interface Phrase {
  id: number;
  chinese: string;
  pinyin: string;
  english: string;
  scene: string;
}

export const phrases: Phrase[] = [
  // Greetings
  { id: 1, chinese: "你好", pinyin: "nǐ hǎo", english: "Hello", scene: "Greetings" },
  { id: 2, chinese: "早上好", pinyin: "zǎo shang hǎo", english: "Good morning", scene: "Greetings" },
  { id: 3, chinese: "晚上好", pinyin: "wǎn shang hǎo", english: "Good evening", scene: "Greetings" },
  { id: 4, chinese: "再见", pinyin: "zài jiàn", english: "Goodbye", scene: "Greetings" },
  { id: 5, chinese: "谢谢", pinyin: "xiè xie", english: "Thank you", scene: "Greetings" },
  { id: 6, chinese: "不客气", pinyin: "bù kè qi", english: "You're welcome", scene: "Greetings" },
  { id: 7, chinese: "对不起", pinyin: "duì bu qǐ", english: "Sorry", scene: "Greetings" },
  { id: 8, chinese: "没关系", pinyin: "méi guān xi", english: "It's okay", scene: "Greetings" },
  { id: 9, chinese: "请问", pinyin: "qǐng wèn", english: "Excuse me, may I ask", scene: "Greetings" },
  { id: 10, chinese: "你好吗？", pinyin: "nǐ hǎo ma?", english: "How are you?", scene: "Greetings" },

  // Shopping
  { id: 11, chinese: "多少钱？", pinyin: "duō shao qián?", english: "How much is it?", scene: "Shopping" },
  { id: 12, chinese: "太贵了", pinyin: "tài guì le", english: "It's too expensive", scene: "Shopping" },
  { id: 13, chinese: "可以便宜一点吗？", pinyin: "kě yǐ pián yi yì diǎn ma?", english: "Can you give me a discount?", scene: "Shopping" },
  { id: 14, chinese: "我买了", pinyin: "wǒ mǎi le", english: "I'll take it", scene: "Shopping" },
  { id: 15, chinese: "可以刷卡吗？", pinyin: "kě yǐ shuā kǎ ma?", english: "Can I pay with a card?", scene: "Shopping" },

  // Dining
  { id: 16, chinese: "菜单", pinyin: "cài dān", english: "Menu", scene: "Dining" },
  { id: 17, chinese: "我要点菜", pinyin: "wǒ yào diǎn cài", english: "I'd like to order", scene: "Dining" },
  { id: 18, chinese: "这个是什么？", pinyin: "zhè ge shì shén me?", english: "What is this?", scene: "Dining" },
  { id: 19, chinese: "买单", pinyin: "mǎi dān", english: "Check please", scene: "Dining" },
  { id: 20, chinese: "好吃", pinyin: "hǎo chī", english: "Delicious", scene: "Dining" },

  // Transportation
  { id: 21, chinese: "去机场", pinyin: "qù jī chǎng", english: "To the airport", scene: "Transportation" },
  { id: 22, chinese: "多少钱？", pinyin: "duō shao qián?", english: "How much?", scene: "Transportation" },
  { id: 23, chinese: "在这里停车", pinyin: "zài zhè lǐ tíng chē", english: "Stop here", scene: "Transportation" },
  { id: 24, chinese: "地铁站在哪里？", pinyin: "dì tiě zhàn zài nǎ lǐ?", english: "Where is the subway station?", scene: "Transportation" },
  { id: 25, chinese: "我迷路了", pinyin: "wǒ mí lù le", english: "I'm lost", scene: "Transportation" },

  // Accommodation
  { id: 26, chinese: "我有预订", pinyin: "wǒ yǒu yù dìng", english: "I have a reservation", scene: "Accommodation" },
  { id: 27, chinese: "入住", pinyin: "rù zhù", english: "Check in", scene: "Accommodation" },
  { id: 28, chinese: "退房", pinyin: "tuì fáng", english: "Check out", scene: "Accommodation" },
  { id: 29, chinese: "房间号", pinyin: "fáng jiān hào", english: "Room number", scene: "Accommodation" },
  { id: 30, chinese: "钥匙", pinyin: "yào shi", english: "Key", scene: "Accommodation" },
];

export const scenes = Array.from(new Set(phrases.map(p => p.scene)));
