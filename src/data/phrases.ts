export interface Phrase {
  id: number;
  chinese: string;
  pinyin: string;
  english: string;
  scene: string;
}

export const phrases: Phrase[] = [
  // ==========================================
  // Greetings (问候与介绍) - 20 sentences
  // ==========================================
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
  { id: 11, chinese: "我很好，谢谢", pinyin: "wǒ hěn hǎo, xiè xie", english: "I'm fine, thank you", scene: "Greetings" },
  { id: 12, chinese: "我叫李明", pinyin: "wǒ jiào lǐ míng", english: "My name is Li Ming", scene: "Greetings" },
  { id: 13, chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shí nǐ", english: "Nice to meet you", scene: "Greetings" },
  { id: 14, chinese: "您是哪里人？", pinyin: "nín shì nǎ lǐ rén?", english: "Where are you from?", scene: "Greetings" },
  { id: 15, chinese: "我来自美国", pinyin: "wǒ lái zì měi guó", english: "I'm from the United States", scene: "Greetings" },
  { id: 16, chinese: "欢迎来到中国", pinyin: "huān yíng lái dào zhōng guó", english: "Welcome to China", scene: "Greetings" },
  { id: 17, chinese: "好久不见", pinyin: "hǎo jiǔ bù jiàn", english: "Long time no see", scene: "Greetings" },
  { id: 18, chinese: "生日快乐", pinyin: "shēng rì kuài lè", english: "Happy birthday", scene: "Greetings" },
  { id: 19, chinese: "新年快乐", pinyin: "xīn nián kuài lè", english: "Happy New Year", scene: "Greetings" },
  { id: 20, chinese: "请坐", pinyin: "qǐng zuò", english: "Please sit down", scene: "Greetings" },

  // ==========================================
  // Transportation (出行) - 20 sentences
  // ==========================================
  { id: 21, chinese: "去机场", pinyin: "qù jī chǎng", english: "To the airport", scene: "Transportation" },
  { id: 22, chinese: "去火车站", pinyin: "qù huǒ chē zhàn", english: "To the train station", scene: "Transportation" },
  { id: 23, chinese: "请问多少钱？", pinyin: "qǐng wèn duō shao qián?", english: "How much is it?", scene: "Transportation" },
  { id: 24, chinese: "可以打表吗？", pinyin: "kě yǐ dǎ biǎo ma?", english: "Can you use the meter?", scene: "Transportation" },
  { id: 25, chinese: "在这里停车", pinyin: "zài zhè lǐ tíng chē", english: "Stop here", scene: "Transportation" },
  { id: 26, chinese: "我赶时间", pinyin: "wǒ gǎn shí jiān", english: "I'm in a hurry", scene: "Transportation" },
  { id: 27, chinese: "地铁站在哪里？", pinyin: "dì tiě zhàn zài nǎ lǐ?", english: "Where is the subway station?", scene: "Transportation" },
  { id: 28, chinese: "我迷路了", pinyin: "wǒ mí lù le", english: "I'm lost", scene: "Transportation" },
  { id: 29, chinese: "怎么去那里？", pinyin: "zěn me qù nà lǐ?", english: "How do I get there?", scene: "Transportation" },
  { id: 30, chinese: "我应该坐几路车？", pinyin: "wǒ yīng gāi zuò jǐ lù chē?", english: "Which bus should I take?", scene: "Transportation" },
  { id: 31, chinese: "我需要转车吗？", pinyin: "wǒ xū yào zhuǎn chē ma?", english: "Do I need to transfer?", scene: "Transportation" },
  { id: 32, chinese: "还有几站？", pinyin: "hái yǒu jǐ zhàn?", english: "How many stops left?", scene: "Transportation" },
  { id: 33, chinese: "我要在这里下车", pinyin: "wǒ yào zài zhè lǐ xià chē", english: "I want to get off here", scene: "Transportation" },
  { id: 34, chinese: "单程票多少钱？", pinyin: "dān chéng piào duō shao qián?", english: "How much is a one-way ticket?", scene: "Transportation" },
  { id: 35, chinese: "我要买一张票", pinyin: "wǒ yào mǎi yī zhāng piào", english: "I'd like to buy a ticket", scene: "Transportation" },
  { id: 36, chinese: "我的航班号是CA123", pinyin: "wǒ de háng bān hào shì CA123", english: "My flight number is CA123", scene: "Transportation" },
  { id: 37, chinese: "办理登机手续在哪里？", pinyin: "bàn lǐ dēng jī shǒu xù zài nǎ lǐ?", english: "Where is check-in?", scene: "Transportation" },
  { id: 38, chinese: "登机口在哪里？", pinyin: "dēng jī kǒu zài nǎ lǐ?", english: "Where is the gate?", scene: "Transportation" },
  { id: 39, chinese: "请问卫生间在哪里？", pinyin: "qǐng wèn wèi shēng jiān zài nǎ lǐ?", english: "Where is the restroom?", scene: "Transportation" },
  { id: 40, chinese: "谢谢你的帮助", pinyin: "xiè xie nǐ de bāng zhù", english: "Thank you for your help", scene: "Transportation" },

  // ==========================================
  // Accommodation (住宿) - 15 sentences
  // ==========================================
  { id: 41, chinese: "我有预订", pinyin: "wǒ yǒu yù dìng", english: "I have a reservation", scene: "Accommodation" },
  { id: 42, chinese: "我想办理入住", pinyin: "wǒ xiǎng bàn lǐ rù zhù", english: "I'd like to check in", scene: "Accommodation" },
  { id: 43, chinese: "退房", pinyin: "tuì fáng", english: "Check out", scene: "Accommodation" },
  { id: 44, chinese: "退房时间是几点？", pinyin: "tuì fáng shí jiān shì jǐ diǎn?", english: "What time is check-out?", scene: "Accommodation" },
  { id: 45, chinese: "房间号是多少？", pinyin: "fáng jiān hào shì duō shao?", english: "What's the room number?", scene: "Accommodation" },
  { id: 46, chinese: "电梯在哪里？", pinyin: "diàn tī zài nǎ lǐ?", english: "Where is the elevator?", scene: "Accommodation" },
  { id: 47, chinese: "我的房间在几楼？", pinyin: "wǒ de fáng jiān zài jǐ lóu?", english: "Which floor is my room on?", scene: "Accommodation" },
  { id: 48, chinese: "我想要一个单人间", pinyin: "wǒ xiǎng yào yī gè dān rén jiān", english: "I'd like a single room", scene: "Accommodation" },
  { id: 49, chinese: "有WiFi吗？", pinyin: "yǒu WiFi ma?", english: "Is there WiFi?", scene: "Accommodation" },
  { id: 50, chinese: "WiFi密码是什么？", pinyin: "WiFi mì mǎ shì shén me?", english: "What's the WiFi password?", scene: "Accommodation" },
  { id: 51, chinese: "有早餐吗？", pinyin: "yǒu zǎo cān ma?", english: "Is breakfast included?", scene: "Accommodation" },
  { id: 52, chinese: "可以帮我叫一辆出租车吗？", pinyin: "kě yǐ bāng wǒ jiào yī liàng chū zū chē ma?", english: "Can you help me call a taxi?", scene: "Accommodation" },
  { id: 53, chinese: "附近有超市吗？", pinyin: "fù jìn yǒu chāo shì ma?", english: "Is there a supermarket nearby?", scene: "Accommodation" },
  { id: 54, chinese: "附近有药店吗？", pinyin: "fù jìn yǒu yào diàn ma?", english: "Is there a pharmacy nearby?", scene: "Accommodation" },
  { id: 55, chinese: "这里安全吗？", pinyin: "zhè lǐ ān quán ma?", english: "Is it safe here?", scene: "Accommodation" },

  // ==========================================
  // Dining (用餐) - 15 sentences
  // ==========================================
  { id: 56, chinese: "菜单", pinyin: "cài dān", english: "Menu", scene: "Dining" },
  { id: 57, chinese: "请给我菜单", pinyin: "qǐng gěi wǒ cài dān", english: "Please give me the menu", scene: "Dining" },
  { id: 58, chinese: "有英文菜单吗？", pinyin: "yǒu yīng wén cài dān ma?", english: "Do you have an English menu?", scene: "Dining" },
  { id: 59, chinese: "我要点菜", pinyin: "wǒ yào diǎn cài", english: "I'd like to order", scene: "Dining" },
  { id: 60, chinese: "这个是什么？", pinyin: "zhè ge shì shén me?", english: "What is this?", scene: "Dining" },
  { id: 61, chinese: "这个辣吗？", pinyin: "zhè ge là ma?", english: "Is this spicy?", scene: "Dining" },
  { id: 62, chinese: "有什么推荐？", pinyin: "yǒu shén me tuī jiàn?", english: "What do you recommend?", scene: "Dining" },
  { id: 63, chinese: "我不吃辣", pinyin: "wǒ bù chī là", english: "I don't eat spicy food", scene: "Dining" },
  { id: 64, chinese: "我是素食者", pinyin: "wǒ shì sù shí zhě", english: "I'm a vegetarian", scene: "Dining" },
  { id: 65, chinese: "我要一碗米饭", pinyin: "wǒ yào yī wǎn mǐ fàn", english: "I'd like a bowl of rice", scene: "Dining" },
  { id: 66, chinese: "我要一杯茶", pinyin: "wǒ yào yī bēi chá", english: "I'd like a cup of tea", scene: "Dining" },
  { id: 67, chinese: "这个很好吃", pinyin: "zhè ge hěn hǎo chī", english: "This is delicious", scene: "Dining" },
  { id: 68, chinese: "我吃饱了", pinyin: "wǒ chī bǎo le", english: "I'm full", scene: "Dining" },
  { id: 69, chinese: "买单", pinyin: "mǎi dān", english: "Check please", scene: "Dining" },
  { id: 70, chinese: "请问多少钱？", pinyin: "qǐng wèn duō shao qián?", english: "How much is it?", scene: "Dining" },

  // ==========================================
  // Travel (旅行) - 10 sentences
  // ==========================================
  { id: 71, chinese: "这里有什么好玩的？", pinyin: "zhè lǐ yǒu shén me hǎo wán de?", english: "What's fun to do here?", scene: "Travel" },
  { id: 72, chinese: "我想去长城", pinyin: "wǒ xiǎng qù cháng chéng", english: "I want to go to the Great Wall", scene: "Travel" },
  { id: 73, chinese: "门票多少钱？", pinyin: "mén piào duō shao qián?", english: "How much is the ticket?", scene: "Travel" },
  { id: 74, chinese: "可以拍照吗？", pinyin: "kě yǐ pāi zhào ma?", english: "Can I take photos?", scene: "Travel" },
  { id: 75, chinese: "可以帮我拍张照吗？", pinyin: "kě yǐ bāng wǒ pāi zhāng zhào ma?", english: "Can you take a photo of me?", scene: "Travel" },
  { id: 76, chinese: "这里真美", pinyin: "zhè lǐ zhēn měi", english: "It's beautiful here", scene: "Travel" },
  { id: 77, chinese: "有导游吗？", pinyin: "yǒu dǎo yóu ma?", english: "Is there a tour guide?", scene: "Travel" },
  { id: 78, chinese: "有旅游手册吗？", pinyin: "yǒu lǚ yóu shǒu cè ma?", english: "Is there a tourist brochure?", scene: "Travel" },
  { id: 79, chinese: "今天天气怎么样？", pinyin: "jīn tiān tiān qì zěn me yàng?", english: "What's the weather like today?", scene: "Travel" },
  { id: 80, chinese: "明天会下雨吗？", pinyin: "míng tiān huì xià yǔ ma?", english: "Will it rain tomorrow?", scene: "Travel" },

  // ==========================================
  // Shopping (购物) - 10 sentences
  // ==========================================
  { id: 81, chinese: "多少钱？", pinyin: "duō shao qián?", english: "How much is it?", scene: "Shopping" },
  { id: 82, chinese: "太贵了", pinyin: "tài guì le", english: "It's too expensive", scene: "Shopping" },
  { id: 83, chinese: "可以便宜一点吗？", pinyin: "kě yǐ pián yi yì diǎn ma?", english: "Can you give me a discount?", scene: "Shopping" },
  { id: 84, chinese: "我买了", pinyin: "wǒ mǎi le", english: "I'll take it", scene: "Shopping" },
  { id: 85, chinese: "可以刷卡吗？", pinyin: "kě yǐ shuā kǎ ma?", english: "Can I pay with a card?", scene: "Shopping" },
  { id: 86, chinese: "可以用支付宝吗？", pinyin: "kě yǐ yòng zhī fù bǎo ma?", english: "Can I use Alipay?", scene: "Shopping" },
  { id: 87, chinese: "有其他颜色吗？", pinyin: "yǒu qí tā yán sè ma?", english: "Are there other colors?", scene: "Shopping" },
  { id: 88, chinese: "有大号吗？", pinyin: "yǒu dà hào ma?", english: "Do you have a large size?", scene: "Shopping" },
  { id: 89, chinese: "可以试一下吗？", pinyin: "kě yǐ shì yī xià ma?", english: "Can I try this on?", scene: "Shopping" },
  { id: 90, chinese: "谢谢，我再看看", pinyin: "xiè xie, wǒ zài kàn kàn", english: "Thanks, I'll look around more", scene: "Shopping" },

  // ==========================================
  // Healthcare (看病) - 10 sentences
  // ==========================================
  { id: 91, chinese: "我不舒服", pinyin: "wǒ bù shū fu", english: "I don't feel well", scene: "Healthcare" },
  { id: 92, chinese: "我头疼", pinyin: "wǒ tóu téng", english: "I have a headache", scene: "Healthcare" },
  { id: 93, chinese: "我发烧了", pinyin: "wǒ fā shāo le", english: "I have a fever", scene: "Healthcare" },
  { id: 94, chinese: "我肚子疼", pinyin: "wǒ dù zi téng", english: "I have a stomachache", scene: "Healthcare" },
  { id: 95, chinese: "请问医院在哪里？", pinyin: "qǐng wèn yī yuàn zài nǎ lǐ?", english: "Where is the hospital?", scene: "Healthcare" },
  { id: 96, chinese: "请问药店在哪里？", pinyin: "qǐng wèn yào diàn zài nǎ lǐ?", english: "Where is the pharmacy?", scene: "Healthcare" },
  { id: 97, chinese: "我需要看医生", pinyin: "wǒ xū yào kàn yī shēng", english: "I need to see a doctor", scene: "Healthcare" },
  { id: 98, chinese: "有感冒药吗？", pinyin: "yǒu gǎn mào yào ma?", english: "Do you have cold medicine?", scene: "Healthcare" },
  { id: 99, chinese: "这个药怎么吃？", pinyin: "zhè ge yào zěn me chī?", english: "How do I take this medicine?", scene: "Healthcare" },
  { id: 100, chinese: "谢谢医生", pinyin: "xiè xie yī shēng", english: "Thank you, doctor", scene: "Healthcare" }
];

export const scenes = Array.from(new Set(phrases.map(p => p.scene)));
