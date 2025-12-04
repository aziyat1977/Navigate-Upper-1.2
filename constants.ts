import { VocabItem, QuizQuestion, GapFillExercise, TimelineEvent } from './types';

// Data from "Navigate B2 Wordlist Unit 1" images
export const VOCABULARY_LIST: VocabItem[] = [
  {
    id: 'v1',
    word: 'adapt',
    pronunciation: "/ə'dæpt/",
    pos: 'v',
    definition: 'change your behaviour in order to deal more successfully with a new situation',
    example: 'The locals adapted the whistling language to Spanish.',
    translation_ru: 'адаптировать',
    translation_uz: 'moslashtirmoq'
  },
  {
    id: 'v2',
    word: 'ages',
    pronunciation: "/'eɪdʒɪz/",
    pos: 'n',
    definition: 'a very long time',
    example: 'It seems like ages since we were in touch.',
    translation_ru: 'вечность',
    translation_uz: 'juda uzoq vaqt'
  },
  {
    id: 'v3',
    word: 'appreciate',
    pronunciation: "/ə'priːʃieɪt/",
    pos: 'v',
    definition: 'to recognize the good qualities of somebody/something',
    example: 'There is so much to appreciate when you receive a handwritten letter.',
    translation_ru: 'ценить',
    translation_uz: 'qadrlamoq'
  },
  {
    id: 'v4',
    word: 'awkward',
    pronunciation: "/'ɔːkwəd/",
    pos: 'adj',
    definition: 'making you feel embarrassed',
    example: 'Stand too close and you might make someone feel awkward.',
    translation_ru: 'неловкий',
    translation_uz: 'noqulay'
  },
  {
    id: 'v5',
    word: 'ban',
    pronunciation: "/bæn/",
    pos: 'v',
    definition: 'to decide or say officially that something is not allowed',
    example: 'Henry Ford banned his employees from whistling.',
    translation_ru: 'запрещать',
    translation_uz: 'taqiqlamoq'
  },
  {
    id: 'v6',
    word: 'bear with',
    pronunciation: "/'beə wɪð/",
    pos: 'phr v',
    definition: 'to be patient with somebody/something',
    example: 'Just bear with me a moment.',
    translation_ru: 'потерпеть',
    translation_uz: 'sabr qilmoq'
  },
  {
    id: 'v7',
    word: 'catch up',
    pronunciation: "/kætʃ ʌp/",
    pos: 'phr v',
    definition: 'to find out what people have been doing',
    example: 'It would be great if we could catch up properly soon.',
    translation_ru: 'наверстать упущенное (пообщаться)',
    translation_uz: 'yetib olmoq (yangiliklarni bilish)'
  },
  {
    id: 'v8',
    word: 'confidential',
    pronunciation: "/ˌkɒnfɪ'denʃl/",
    pos: 'adj',
    definition: 'meant to be kept secret and not told to or seen by other people',
    example: 'If an email is confidential, you shouldn’t share it with anyone.',
    translation_ru: 'конфиденциальный',
    translation_uz: 'maxfiy'
  },
  {
    id: 'v9',
    word: 'die out',
    pronunciation: "/daɪ aʊt/",
    pos: 'phr v',
    definition: 'to stop existing',
    example: 'If letters died out completely, that would be the greatest loss to our culture.',
    translation_ru: 'вымереть',
    translation_uz: 'yo‘qolib ketmoq'
  },
  {
    id: 'v10',
    word: 'distinguish',
    pronunciation: "/dɪ'stɪŋɡwɪʃ/",
    pos: 'v',
    definition: 'to recognize the difference between two people or things',
    example: 'It can be hard to distinguish between the different whistles.',
    translation_ru: 'различать',
    translation_uz: 'farqlamoq'
  },
  {
    id: 'v11',
    word: 'dominate',
    pronunciation: "/'dɒmɪneɪt/",
    pos: 'v',
    definition: 'to control or have a lot of influence over',
    example: 'I don’t like the way she always dominates the conversation.',
    translation_ru: 'доминировать',
    translation_uz: 'hukmronlik qilmoq'
  },
  {
    id: 'v12',
    word: 'extraordinary',
    pronunciation: "/ɪk'strɔːdnri/",
    pos: 'adj',
    definition: 'unexpected, surprising or strange',
    example: 'Silbo is an extraordinary language which is whistled rather than spoken.',
    translation_ru: 'необычайный',
    translation_uz: 'g‘ayrioddiy'
  },
  {
    id: 'v13',
    word: 'gesture',
    pronunciation: "/'dʒestʃə(r)/",
    pos: 'n',
    definition: 'a movement that you make with your hands, head or face',
    example: 'I’d like to talk about gestures – the signs we make with our hands.',
    translation_ru: 'жест',
    translation_uz: 'imo-ishora'
  },
  {
    id: 'v14',
    word: 'handwriting',
    pronunciation: "/'hændraɪtɪŋ/",
    pos: 'n',
    definition: 'writing with a pen or pencil',
    example: 'I’ve always had terrible handwriting.',
    translation_ru: 'почерк',
    translation_uz: 'husnixat'
  },
  {
    id: 'v15',
    word: 'misunderstanding',
    pronunciation: "/ˌmɪsʌndə'stændɪŋ/",
    pos: 'n',
    definition: 'a situation where a person does not understand something correctly',
    example: 'People from different cultures can have a misunderstanding.',
    translation_ru: 'недопонимание',
    translation_uz: 'tushunmovchilik'
  }
];

// Data from "Grammar Reference 1.2" and "Letters of Note" (Page 8, 9, 137)
export const KAHOOT_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Do you know if Peter ______?",
    options: ["has called", "has been calling", "called", "calling"],
    correctAnswer: 0,
    explanation: "Simple Present Perfect: Focus on the result (is there a call?)."
  },
  {
    id: 2,
    question: "She ______ here for six months.",
    options: ["lives", "is living", "has been living", "live"],
    correctAnswer: 2,
    explanation: "Continuous: Focus on 'how long' something has been happening."
  },
  {
    id: 3,
    question: "We're exhausted. We ______ all night.",
    options: ["drove", "have driven", "have been driving", "driving"],
    correctAnswer: 2,
    explanation: "Continuous: Explains a present result (exhaustion) via recent ongoing activity."
  },
  {
    id: 4,
    question: "I ______ three assignments since the start of term.",
    options: ["have been writing", "have written", "wrote", "writing"],
    correctAnswer: 1,
    explanation: "Simple: Focus on 'how many' (quantity/completion)."
  },
  {
    id: 5,
    question: "We ______ each other since university.",
    options: ["have known", "have been knowing", "know", "knew"],
    correctAnswer: 0,
    explanation: "Stative verbs (know, be, have, seem) typically use the Simple form, not Continuous."
  },
  {
    id: 6,
    question: "Shaun Usher ______ letters written by famous people since 2009.",
    options: ["collected", "is collecting", "has been collecting", "collects"],
    correctAnswer: 2,
    explanation: "Letters of Note text: An action starting in the past and continuing to now (for a duration)."
  }
];

// Exercise from Page 137 (Ex 2)
export const GAP_FILL_DATA: GapFillExercise = {
  id: "ex137",
  title: "Research on Digital Language",
  textParts: [
    "Research ", // 1. predict -> has predicted
    " that about half of the languages spoken on Earth today will be extinct by the end of the century. Globalization and online communication, both of which ", // 2. increase -> have increased
    " at an unprecedented rate in recent years, are usually blamed. However, these aspects of the modern world may also help to save many of these endangered languages. For example, linguists ", // 3. develop -> have developed
    " a smartphone app to teach Tuvan. In fact, for some time now a number of endangered languages ", // 4. use -> have been using
    " social media to keep themselves alive. And while globalization ", // 5. be -> has been
    " responsible for a lot of negative pressures, a positive effect is that digital technology ", // 6. bring back -> has brought back/has been bringing back
    " some languages from extinction."
  ],
  answers: ["has predicted", "have increased", "have developed", "have been using", "has been", "has brought back"],
  hints: ["predict", "increase", "develop", "use", "be", "bring back"]
};

export const TIMELINE_RULES: TimelineEvent[] = [
  {
    id: 'r1',
    type: 'SIMPLE',
    label: 'RESULT / COMPLETION',
    description: "Focus on the finished product. 'I have written the email.'",
    translation_ru: "Результат / Завершение",
    translation_uz: "Natija / Tugallanish"
  },
  {
    id: 'r2',
    type: 'CONTINUOUS',
    label: 'ACTIVITY / DURATION',
    description: "Focus on the action itself and time spent. 'I have been writing all morning.'",
    translation_ru: "Действие / Длительность",
    translation_uz: "Harakat / Davomiylik"
  },
  {
    id: 'r3',
    type: 'SIMPLE',
    label: 'QUANTITY',
    description: "How many? 'I have written 3 letters.'",
    translation_ru: "Количество",
    translation_uz: "Miqdor"
  },
  {
    id: 'r4',
    type: 'CONTINUOUS',
    label: 'TEMPORARY',
    description: "Short term situation. 'I have been staying here for a week.'",
    translation_ru: "Временная ситуация",
    translation_uz: "Vaqtinchalik holat"
  }
];