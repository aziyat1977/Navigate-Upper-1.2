import { VocabItem, QuizQuestion, GapFillExercise, TimelineEvent } from './types';

// TBL/TTT Target Vocabulary: Written Communication
export const VOCABULARY_LIST: VocabItem[] = [
  {
    id: 'v1',
    word: 'confidential',
    pronunciation: "/ˌkɒnfɪ'denʃl/",
    pos: 'adj',
    definition: 'meant to be kept secret and not told to or seen by other people',
    example: 'Please do not forward this email, it is confidential.',
    translation_ru: 'конфиденциальный',
    translation_uz: 'maxfiy'
  },
  {
    id: 'v2',
    word: 'cross out',
    pronunciation: "/krɒs aʊt/",
    pos: 'phr v',
    definition: 'to draw a line through a word or phrase because it is wrong or not needed',
    example: 'If you make a mistake, just cross it out.',
    translation_ru: 'вычеркнуть',
    translation_uz: 'ustidan chizmoq'
  },
  {
    id: 'v3',
    word: 'inbox',
    pronunciation: "/'ɪnbɒks/",
    pos: 'n',
    definition: 'the place on a computer where new emails arrive',
    example: 'My inbox is always full of spam.',
    translation_ru: 'входящие (почта)',
    translation_uz: 'kiruvchi xatlar (quti)'
  },
  {
    id: 'v4',
    word: 'punctuation',
    pronunciation: "/ˌpʌŋktʃu'eɪʃn/",
    pos: 'n',
    definition: 'marks used in writing to divide sentences (e.g., . , ! ?)',
    example: 'Texting has ruined his use of punctuation.',
    translation_ru: 'пунктуация',
    translation_uz: 'tinish belgilari'
  },
  {
    id: 'v5',
    word: 'cc somebody into',
    pronunciation: "/siː siː/",
    pos: 'v phr',
    definition: 'to send a copy of an email to another person',
    example: 'Please cc the manager into our conversation.',
    translation_ru: 'поставить в копию',
    translation_uz: 'nusxasini yubormoq (cc)'
  },
  {
    id: 'v6',
    word: 'delete',
    pronunciation: "/dɪ'liːt/",
    pos: 'v',
    definition: 'to remove something that has been written or stored',
    example: 'I accidentally deleted the message.',
    translation_ru: 'удалить',
    translation_uz: 'o‘chirmoq'
  },
  {
    id: 'v7',
    word: 'emoticon',
    pronunciation: "/ɪ'məʊtɪkɒn/",
    pos: 'n',
    definition: 'a symbol of a face made from keyboard characters, e.g. :)',
    example: 'He uses too many emoticons in formal emails.',
    translation_ru: 'смайлик',
    translation_uz: 'smaylik'
  },
  {
    id: 'v8',
    word: 'handwriting',
    pronunciation: "/'hændraɪtɪŋ/",
    pos: 'n',
    definition: 'writing with a pen or pencil; your personal style of writing',
    example: 'Her handwriting is beautiful and easy to read.',
    translation_ru: 'почерк',
    translation_uz: 'husnixat'
  },
  {
    id: 'v9',
    word: 'handwritten',
    pronunciation: "/ˌhænd'rɪtn/",
    pos: 'adj',
    definition: 'written by hand, not typed',
    example: 'A handwritten letter feels more personal.',
    translation_ru: 'рукописный',
    translation_uz: 'qo‘lda yozilgan'
  },
  {
    id: 'v10',
    word: 'instant',
    pronunciation: "/'ɪnstənt/",
    pos: 'adj',
    definition: 'happening immediately',
    example: 'We are used to instant communication like WhatsApp.',
    translation_ru: 'мгновенный',
    translation_uz: 'tezkor / bir zumda'
  },
  {
    id: 'v11',
    word: 'in tray',
    pronunciation: "/'ɪn treɪ/",
    pos: 'n',
    definition: 'a container on a desk for papers that need looking at',
    example: 'Put the report in my in tray.',
    translation_ru: 'лоток для входящих бумаг',
    translation_uz: 'kiruvchi hujjatlar qutisi'
  },
  {
    id: 'v12',
    word: 'texting',
    pronunciation: "/'tekstɪŋ/",
    pos: 'n',
    definition: 'the activity of sending text messages',
    example: 'Texting is often faster than calling.',
    translation_ru: 'отправка смс',
    translation_uz: 'sms yozish'
  },
  {
    id: 'v13',
    word: 'postage stamp',
    pronunciation: "/'pəʊstɪdʒ stæmp/",
    pos: 'n',
    definition: 'a small piece of paper stuck to a letter to pay for mailing',
    example: 'You forgot to put a postage stamp on the envelope.',
    translation_ru: 'почтовая марка',
    translation_uz: 'pochta markasi'
  },
  {
    id: 'v14',
    word: 'stationery',
    pronunciation: "/'steɪʃənri/",
    pos: 'n',
    definition: 'materials for writing, such as paper, envelopes, and pens',
    example: 'I need to buy some stationery for the office.',
    translation_ru: 'канцелярские товары',
    translation_uz: 'kantselyariya tovarlari'
  }
];

// Grammar Focus: Letters of Note & PPS vs PPC
export const KAHOOT_QUESTIONS: QuizQuestion[] = [
  // --- INTRO SET ---
  {
    id: 1,
    quizSet: "Intro",
    question: "Shaun Usher ______ letters written by famous people since 2009.",
    options: ["collected", "has collected", "has been collecting", "collects"],
    correctAnswer: 2,
    explanation: "Rule A: Activity starting in past, continuing to now (duration with 'since')."
  },
  {
    id: 2,
    quizSet: "Intro",
    question: "His website ______ a huge success recently.",
    options: ["became", "has become", "has been becoming", "becomes"],
    correctAnswer: 1,
    explanation: "Rule D/C: 'Become' is often treated as a result/state here. News/Result."
  },
  {
    id: 3,
    quizSet: "Intro",
    question: "People ______ more letters recently.",
    options: ["wrote", "write", "have been writing", "writing"],
    correctAnswer: 2,
    explanation: "Rule B: 'Recently' with an active verb usually triggers Present Perfect Continuous."
  },
  {
    id: 4,
    quizSet: "Intro",
    question: "I ______ three letters this morning.",
    options: ["have written", "have been writing", "write", "am writing"],
    correctAnswer: 0,
    explanation: "Rule A (Result): Focus on quantity (how many? = 3). Completed result."
  },
  {
    id: 5,
    quizSet: "Intro",
    question: "I ______ the manager into the email chain.",
    options: ["have been cc'ing", "have cc'd", "cc'ing", "cc"],
    correctAnswer: 1,
    explanation: "Result focus: The action is done, the manager is now in the loop."
  },
  {
    id: 6,
    quizSet: "Intro",
    question: "She ______ a terrible inbox for years.",
    options: ["is having", "has had", "has been having", "had"],
    correctAnswer: 1,
    explanation: "Rule C: Stative verb 'have' (possession) usually takes Simple, not Continuous."
  },
  // --- QUIZ 1 ---
  {
    id: 101,
    quizSet: "Quiz 1",
    question: "I ______ my notifications all morning, and I still have 23 I haven’t opened.",
    options: ["am checking", "checked", "have been checking", "have checked"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 102,
    quizSet: "Quiz 1",
    question: "She ______ three reels today, so her phone battery is already dead.",
    options: ["was posting", "has been posting", "has posted", "posts"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 103,
    quizSet: "Quiz 1",
    question: "We ______ that creator since 2022, and their videos keep getting better.",
    options: ["have followed", "followed", "have been following", "follow"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 104,
    quizSet: "Quiz 1",
    question: "Sorry for the late reply. I ______ my DMs—there are hundreds.",
    options: ["have been cleaning", "have cleaned", "cleaned", "am cleaning"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 105,
    quizSet: "Quiz 1",
    question: "He ______ the same meme five times this week.",
    options: ["sent", "has been sending", "sends", "has sent"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 106,
    quizSet: "Quiz 1",
    question: "My eyes hurt. I ______ TikTok for two hours without stopping.",
    options: ["have been scrolling", "have scrolled", "scrolled", "am scrolling"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 107,
    quizSet: "Quiz 1",
    question: "We ______ the comment section yet, so we don’t know what people think.",
    options: ["haven’t read", "don’t read", "didn’t read", "haven’t been reading"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 108,
    quizSet: "Quiz 1",
    question: "She ______ a new profile picture, and everyone is reacting to it.",
    options: ["changes", "has been changing", "has changed", "changed"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 109,
    quizSet: "Quiz 1",
    question: "I ______ to stop doomscrolling… but I keep doing it.",
    options: ["tried", "have been trying", "try", "have tried"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 110,
    quizSet: "Quiz 1",
    question: "They ______ on that animation for weeks, and it finally looks smooth.",
    options: ["have been editing", "edited", "have edited", "are editing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 111,
    quizSet: "Quiz 1",
    question: "I ______ my account password, so now I can’t log in.",
    options: ["forgot", "forget", "have been forgetting", "have forgotten"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 112,
    quizSet: "Quiz 1",
    question: "He ______ online lately because of exams.",
    options: ["hasn’t streamed", "didn’t stream", "doesn’t stream", "hasn’t been streaming"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 113,
    quizSet: "Quiz 1",
    question: "We ______ five new followers since yesterday.",
    options: ["gained", "have gained", "have been gaining", "gain"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 114,
    quizSet: "Quiz 1",
    question: "Why are you smiling? You ______ to someone, haven’t you?",
    options: ["texted", "are texting", "have texted", "have been texting"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 115,
    quizSet: "Quiz 1",
    question: "She ______ her page private, so you can’t see her posts now.",
    options: ["has made", "made", "has been making", "makes"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 2 ---
  {
    id: 201,
    quizSet: "Quiz 2",
    question: "I ______ this boss fight five times, and I still can’t beat it.",
    options: ["have tried", "tried", "am trying", "have been trying"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 202,
    quizSet: "Quiz 2",
    question: "My hands are shaking—I ______ ranked matches for three hours.",
    options: ["have played", "have been playing", "played", "am playing"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 203,
    quizSet: "Quiz 2",
    question: "She ______ all the side quests, so the map is 100% complete.",
    options: ["finishes", "has been finishing", "has finished", "finished"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 204,
    quizSet: "Quiz 2",
    question: "We ______ together since we met in that Discord server.",
    options: ["have been gaming", "have gamed", "game", "gamed"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 205,
    quizSet: "Quiz 2",
    question: "He ______ a legendary skin, and now everyone is jealous.",
    options: ["unlocked", "has been unlocking", "unlocks", "has unlocked"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 206,
    quizSet: "Quiz 2",
    question: "I ______ my sensitivity settings all day, and nothing feels right.",
    options: ["changed", "have been changing", "change", "have changed"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 207,
    quizSet: "Quiz 2",
    question: "They ______ the tournament yet, so the final scores aren’t out.",
    options: ["haven’t announced", "don’t announce", "didn’t announce", "haven’t been announcing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 208,
    quizSet: "Quiz 2",
    question: "My internet is awful—I ______ disconnected every match.",
    options: ["have been getting", "got", "get", "have got"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 209,
    quizSet: "Quiz 2",
    question: "She ______ only two games this season, but she won both.",
    options: ["played", "has played", "plays", "has been playing"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 210,
    quizSet: "Quiz 2",
    question: "We ______ for a new update, and it’s taking forever.",
    options: ["waited", "have waited", "have been waiting", "wait"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 211,
    quizSet: "Quiz 2",
    question: "I ______ the tutorial, so I know the controls.",
    options: ["have completed", "complete", "completed", "have been completing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 212,
    quizSet: "Quiz 2",
    question: "He ______ a new build recently, and his damage has improved.",
    options: ["tested", "has tested", "tests", "has been testing"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 213,
    quizSet: "Quiz 2",
    question: "They ______ 2,000 coins so far, but they need 3,000.",
    options: ["saved", "have saved", "save", "have been saving"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 214,
    quizSet: "Quiz 2",
    question: "I ______ that same soundtrack all week. It’s stuck in my head.",
    options: ["listened", "have listened", "have been listening", "listen"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 215,
    quizSet: "Quiz 2",
    question: "She ______ her teammate three times today—no wonder he’s angry.",
    options: ["has been insulting", "insulted", "insults", "has insulted"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 3 ---
  {
    id: 301,
    quizSet: "Quiz 3",
    question: "I ______ a mural this month, and my arms are tired.",
    options: ["have been painting", "painted", "have painted", "paint"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 302,
    quizSet: "Quiz 3",
    question: "She ______ three sketches today, all in different styles.",
    options: ["has been drawing", "draws", "has drawn", "drew"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 303,
    quizSet: "Quiz 3",
    question: "We ______ a portfolio since September to apply for that art school.",
    options: ["have been building", "built", "have built", "build"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 304,
    quizSet: "Quiz 3",
    question: "He ______ the final version, so we can print it now.",
    options: ["has been exporting", "exports", "exported", "has exported"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 305,
    quizSet: "Quiz 3",
    question: "I ______ with digital brushes lately, and I’m improving fast.",
    options: ["experiment", "have experimented", "have been experimenting", "experimented"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 306,
    quizSet: "Quiz 3",
    question: "She ______ a new logo for the club, and everyone loves it.",
    options: ["designed", "has designed", "designs", "has been designing"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 307,
    quizSet: "Quiz 3",
    question: "They ______ on that stop-motion clip for weeks, and the transitions are still shaky.",
    options: ["worked", "have been working", "have worked", "work"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 308,
    quizSet: "Quiz 3",
    question: "I ______ the same piece twice because the first one looked wrong.",
    options: ["redo", "have been redoing", "redid", "have redone"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 309,
    quizSet: "Quiz 3",
    question: "He ______ with color palettes all afternoon—look at this mess!",
    options: ["has played", "plays", "has been playing", "played"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 310,
    quizSet: "Quiz 3",
    question: "We ______ a reference board, so our characters look consistent.",
    options: ["created", "have been creating", "create", "have created"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 311,
    quizSet: "Quiz 3",
    question: "She ______ calligraphy since she got that new pen set.",
    options: ["practiced", "has practiced", "practices", "has been practicing"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 312,
    quizSet: "Quiz 3",
    question: "I ______ that filter on my artwork, and now the details pop.",
    options: ["have added", "added", "add", "have been adding"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 313,
    quizSet: "Quiz 3",
    question: "They ______ feedback from the teacher, so they know what to fix.",
    options: ["received", "receive", "have been receiving", "have received"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 314,
    quizSet: "Quiz 3",
    question: "My tablet is hot—I ______ on it nonstop.",
    options: ["have been working", "worked", "work", "have worked"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 315,
    quizSet: "Quiz 3",
    question: "He ______ the gallery link yet, so we can’t view the project.",
    options: ["hasn’t shared", "hasn’t been sharing", "doesn’t share", "didn’t share"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 4 ---
  {
    id: 401,
    quizSet: "Quiz 4",
    question: "I ______ $50 this month, so I can buy that headset.",
    options: ["saved", "have saved", "save", "have been saving"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 402,
    quizSet: "Quiz 4",
    question: "She ______ for a phone upgrade since summer.",
    options: ["has budgeted", "has been budgeting", "budgeted", "budgets"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 403,
    quizSet: "Quiz 4",
    question: "We ______ too much on snacks lately.",
    options: ["spent", "spend", "have been spending", "have spent"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 404,
    quizSet: "Quiz 4",
    question: "He ______ his part-time salary, so he can pay for the course.",
    options: ["has invested", "invested", "invests", "has been investing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 405,
    quizSet: "Quiz 4",
    question: "I ______ my bank app three times today. I’m broke.",
    options: ["have checked", "check", "have been checking", "checked"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 406,
    quizSet: "Quiz 4",
    question: "They ______ money for a class trip, and they’re almost there.",
    options: ["collect", "have been collecting", "have collected", "collected"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 407,
    quizSet: "Quiz 4",
    question: "She ______ two items online, but only one has arrived.",
    options: ["ordered", "has ordered", "has been ordering", "orders"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 408,
    quizSet: "Quiz 4",
    question: "I ______ for that game pass all year, so I’m not quitting now.",
    options: ["have been paying", "paid", "pay", "have paid"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 409,
    quizSet: "Quiz 4",
    question: "He ______ the receipt, so he can’t return it.",
    options: ["lost", "has lost", "has been losing", "loses"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 410,
    quizSet: "Quiz 4",
    question: "We ______ prices in different stores, and this one is cheapest.",
    options: ["have compared", "compare", "have been comparing", "compared"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 411,
    quizSet: "Quiz 4",
    question: "She ______ for extra shifts recently because she wants more cash.",
    options: ["has asked", "asks", "asked", "has been asking"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 412,
    quizSet: "Quiz 4",
    question: "I ______ all my coins in one week… mistake.",
    options: ["spent", "spend", "have spent", "have been spending"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 413,
    quizSet: "Quiz 4",
    question: "They ______ financial tips on YouTube, but nothing works instantly.",
    options: ["watched", "watch", "have been watching", "have watched"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 414,
    quizSet: "Quiz 4",
    question: "He ______ his debt, so he can finally relax.",
    options: ["paid off", "pays off", "has been paying off", "has paid off"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 415,
    quizSet: "Quiz 4",
    question: "I ______ to stop buying skins, but then a new one dropped.",
    options: ["have promised", "promised", "promise", "have been promising"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 5 ---
  {
    id: 501,
    quizSet: "Quiz 5",
    question: "We ______ a weekend trip, but we haven’t chosen the city yet.",
    options: ["planned", "plan", "have been planning", "have planned"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 502,
    quizSet: "Quiz 5",
    question: "She ______ to apply for that scholarship.",
    options: ["decides", "decided", "has decided", "has been deciding"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 503,
    quizSet: "Quiz 5",
    question: "I ______ about studying abroad a lot recently.",
    options: ["thought", "have been thinking", "think", "have thought"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 504,
    quizSet: "Quiz 5",
    question: "They ______ their timetable, so now they can start revision.",
    options: ["have made", "make", "made", "have been making"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 505,
    quizSet: "Quiz 5",
    question: "He ______ for the entrance exam since October.",
    options: ["prepared", "prepares", "has been preparing", "has prepared"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 506,
    quizSet: "Quiz 5",
    question: "We ______ three universities so far.",
    options: ["shortlist", "have shortlisted", "shortlisted", "have been shortlisting"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 507,
    quizSet: "Quiz 5",
    question: "She ______ any flights yet because prices keep changing.",
    options: ["didn’t book", "hasn’t booked", "doesn’t book", "hasn’t been booking"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 508,
    quizSet: "Quiz 5",
    question: "I ______ my CV all week, and it still looks basic.",
    options: ["edited", "edit", "have been editing", "have edited"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 509,
    quizSet: "Quiz 5",
    question: "They ______ a goal tracker, so they don’t forget tasks.",
    options: ["have created", "created", "create", "have been creating"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 510,
    quizSet: "Quiz 5",
    question: "He ______ that idea already, so we can move on.",
    options: ["explained", "has explained", "explains", "has been explaining"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 511,
    quizSet: "Quiz 5",
    question: "We ______ for a new laptop because our old one keeps crashing.",
    options: ["saved", "have been saving", "save", "have saved"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 512,
    quizSet: "Quiz 5",
    question: "She ______ her parents about the plan, and they said yes.",
    options: ["talked", "talks", "has been talking", "has talked"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 513,
    quizSet: "Quiz 5",
    question: "I ______ to wake up earlier, but I’m failing.",
    options: ["have been trying", "tried", "try", "have tried"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 514,
    quizSet: "Quiz 5",
    question: "They ______ their application, so now it’s just waiting.",
    options: ["submitted", "have submitted", "submit", "have been submitting"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 515,
    quizSet: "Quiz 5",
    question: "He ______ too many plans at once lately.",
    options: ["has made", "has been making", "makes", "made"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 6 ---
  {
    id: 601,
    quizSet: "Quiz 6",
    question: "I ______ the guitar for months, and my fingers finally don’t hurt.",
    options: ["practiced", "have practiced", "practice", "have been practicing"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 602,
    quizSet: "Quiz 6",
    question: "She ______ five new songs this week.",
    options: ["learned", "learns", "has learned", "has been learning"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 603,
    quizSet: "Quiz 6",
    question: "We ______ to the gym recently because we want more energy.",
    options: ["went", "have been going", "go", "have gone"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 604,
    quizSet: "Quiz 6",
    question: "He ______ 10 km today, so he’s exhausted.",
    options: ["has run", "has been running", "runs", "ran"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 605,
    quizSet: "Quiz 6",
    question: "I ______ a new language app, and it’s actually fun.",
    options: ["have downloaded", "download", "downloaded", "have been downloading"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 606,
    quizSet: "Quiz 6",
    question: "They ______ chess for years, so don’t challenge them.",
    options: ["played", "have been playing", "have played", "play"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 607,
    quizSet: "Quiz 6",
    question: "She ______ healthier lately—less sugar, more water.",
    options: ["has eaten", "eats", "ate", "has been eating"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 608,
    quizSet: "Quiz 6",
    question: "We ______ the same routine all week, and it’s boring.",
    options: ["did", "do", "have done", "have been doing"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 609,
    quizSet: "Quiz 6",
    question: "He ______ three books this month.",
    options: ["read", "reads", "has been reading", "has read"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 610,
    quizSet: "Quiz 6",
    question: "I ______ that book since Monday, and I’m only on chapter two.",
    options: ["have been reading", "read", "am reading", "have read"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 611,
    quizSet: "Quiz 6",
    question: "They ______ the course already, so they got the certificate.",
    options: ["finish", "finished", "have been finishing", "have finished"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 612,
    quizSet: "Quiz 6",
    question: "She ______ her drawing habit again after a long break.",
    options: ["restarted", "restarts", "has restarted", "has been restarting"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 613,
    quizSet: "Quiz 6",
    question: "We ______ a new dance routine for the show.",
    options: ["have practiced", "practice", "have been practicing", "practiced"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 614,
    quizSet: "Quiz 6",
    question: "He ______ meditation recently, and he seems calmer.",
    options: ["does", "did", "has been doing", "has done"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 615,
    quizSet: "Quiz 6",
    question: "I ______ my screen time, and it’s down by 30%.",
    options: ["reduced", "reduce", "have reduced", "have been reducing"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 7 ---
  {
    id: 701,
    quizSet: "Quiz 7",
    question: "Someone ______ my story and now my mom has seen it.",
    options: ["reposted", "has been reposting", "reposts", "has reposted"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 702,
    quizSet: "Quiz 7",
    question: "We ______ about that rumor all day. It’s everywhere.",
    options: ["heard", "have been hearing", "have heard", "hear"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 703,
    quizSet: "Quiz 7",
    question: "He ______ to apologize, but he keeps making excuses.",
    options: ["has refused", "refused", "refuses", "has been refusing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 704,
    quizSet: "Quiz 7",
    question: "She ______ her comments because people were being toxic.",
    options: ["limited", "has limited", "has been limiting", "limits"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 705,
    quizSet: "Quiz 7",
    question: "I ______ screenshots, so I have proof.",
    options: ["took", "take", "have taken", "have been taking"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 706,
    quizSet: "Quiz 7",
    question: "They ______ the same argument for two days. Please stop.",
    options: ["have had", "have been having", "have", "had"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 707,
    quizSet: "Quiz 7",
    question: "He ______ his account since he got banned.",
    options: ["hasn’t used", "doesn’t use", "hasn’t been using", "didn’t use"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 708,
    quizSet: "Quiz 7",
    question: "We ______ nicer online lately, and it feels better.",
    options: ["have behaved", "behave", "have been behaving", "behaved"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 709,
    quizSet: "Quiz 7",
    question: "She ______ a public apology video, so the drama is calmer now.",
    options: ["uploads", "has uploaded", "uploaded", "has been uploading"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 710,
    quizSet: "Quiz 7",
    question: "I ______ to mute that chat group, but I forget every time.",
    options: ["have been meaning", "have meant", "mean", "meant"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 711,
    quizSet: "Quiz 7",
    question: "They ______ the teacher’s message yet.",
    options: ["didn’t read", "haven’t read", "don’t read", "haven’t been reading"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 712,
    quizSet: "Quiz 7",
    question: "He ______ attention to the hate comments, and it’s affecting him.",
    options: ["paid", "has been paying", "pays", "has paid"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 713,
    quizSet: "Quiz 7",
    question: "We ______ our group rules, so now the chat is calmer.",
    options: ["updated", "have updated", "update", "have been updating"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 714,
    quizSet: "Quiz 7",
    question: "She ______ with her content style recently—more educational now.",
    options: ["has experimented", "has been experimenting", "experiments", "experimented"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 715,
    quizSet: "Quiz 7",
    question: "I ______ my account private, so strangers can’t message me.",
    options: ["made", "make", "have been making", "have made"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 8 ---
  {
    id: 801,
    quizSet: "Quiz 8",
    question: "Our streamer ______ live for 6 hours—no wonder his voice is gone.",
    options: ["streams", "streamed", "has been streaming", "has streamed"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 802,
    quizSet: "Quiz 8",
    question: "He ______ two highlight videos today.",
    options: ["has uploaded", "uploaded", "uploads", "has been uploading"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 803,
    quizSet: "Quiz 8",
    question: "I ______ my controller, so now I’m playing on keyboard.",
    options: ["broke", "break", "have broken", "have been breaking"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 804,
    quizSet: "Quiz 8",
    question: "They ______ the patch notes all morning to find nerfs.",
    options: ["have read", "have been reading", "read", "reads"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 805,
    quizSet: "Quiz 8",
    question: "We ______ this co-op game since last winter.",
    options: ["played", "have played", "have been playing", "play"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 806,
    quizSet: "Quiz 8",
    question: "She ______ her mic settings, and the sound is finally clear.",
    options: ["fixed", "fixes", "has fixed", "has been fixing"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 807,
    quizSet: "Quiz 8",
    question: "I ______ to improve my aim, but my stats aren’t moving.",
    options: ["have trained", "trained", "train", "have been training"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 808,
    quizSet: "Quiz 8",
    question: "They ______ 12 matches in a row without losing.",
    options: ["have been winning", "win", "won", "have won"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 809,
    quizSet: "Quiz 8",
    question: "He ______ lag spikes lately, and it ruins every fight.",
    options: ["has got", "got", "has been getting", "gets"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 810,
    quizSet: "Quiz 8",
    question: "We ______ the new map yet.",
    options: ["don’t try", "haven’t been trying", "didn’t try", "haven’t tried"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 811,
    quizSet: "Quiz 8",
    question: "She ______ her PC for two weeks, so she knows every part.",
    options: ["built", "has built", "builds", "has been building"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 812,
    quizSet: "Quiz 8",
    question: "I ______ the settings to low, and now it runs smoothly.",
    options: ["changed", "change", "have been changing", "have changed"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 813,
    quizSet: "Quiz 8",
    question: "They ______ the same strategy all season—and teams are predicting it.",
    options: ["used", "have been using", "have used", "use"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 814,
    quizSet: "Quiz 8",
    question: "He ______ a new keyboard, so he types faster now.",
    options: ["bought", "buys", "has bought", "has been buying"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 815,
    quizSet: "Quiz 8",
    question: "I ______ my rank, and I’m finally Diamond.",
    options: ["have reached", "reach", "have been reaching", "reached"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 9 ---
  {
    id: 901,
    quizSet: "Quiz 9",
    question: "I ______ commissions recently, so I can buy new brushes.",
    options: ["take", "have been taking", "took", "have taken"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 902,
    quizSet: "Quiz 9",
    question: "She ______ two paid logos this week.",
    options: ["has completed", "completed", "completes", "has been completing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 903,
    quizSet: "Quiz 9",
    question: "We ______ our prices because materials got expensive.",
    options: ["increased", "have increased", "increase", "have been increasing"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 904,
    quizSet: "Quiz 9",
    question: "He ______ on one illustration for days, and it still isn’t perfect.",
    options: ["worked", "works", "has worked", "has been working"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 905,
    quizSet: "Quiz 9",
    question: "I ______ my art account to 5,000 followers!",
    options: ["have grown", "grew", "grow", "have been growing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 906,
    quizSet: "Quiz 9",
    question: "They ______ a new sketchbook challenge all month.",
    options: ["did", "do", "have done", "have been doing"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 907,
    quizSet: "Quiz 9",
    question: "She ______ the client’s message yet, so she can’t start.",
    options: ["didn’t reply to", "doesn’t reply to", "hasn’t replied to", "hasn’t been replying to"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 908,
    quizSet: "Quiz 9",
    question: "I ______ in-app purchases too much lately.",
    options: ["made", "have made", "make", "have been making"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 909,
    quizSet: "Quiz 9",
    question: "He ______ the watermark, so nobody can steal it easily.",
    options: ["adds", "has added", "added", "has been adding"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 910,
    quizSet: "Quiz 9",
    question: "We ______ feedback from followers, and the colors look better now.",
    options: ["have listened", "listen", "have been listening", "listened"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 911,
    quizSet: "Quiz 9",
    question: "She ______ on time recently, so clients trust her.",
    options: ["delivered", "delivers", "has delivered", "has been delivering"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 912,
    quizSet: "Quiz 9",
    question: "I ______ three different styles, but I prefer the third one.",
    options: ["have tried", "tried", "try", "have been trying"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 913,
    quizSet: "Quiz 9",
    question: "They ______ a shop page, so people can order prints.",
    options: ["opened", "have been opening", "open", "have opened"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 914,
    quizSet: "Quiz 9",
    question: "He ______ late every night this week to finish the project.",
    options: ["stays up", "has been staying up", "has stayed up", "stayed up"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 915,
    quizSet: "Quiz 9",
    question: "We ______ the payment link, so it should work now.",
    options: ["updated", "have updated", "update", "have been updating"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  // --- QUIZ 10 ---
  {
    id: 1001,
    quizSet: "Quiz 10",
    question: "How long ______ you ______ that new routine?",
    options: ["do / do", "have / been doing", "did / do", "are / doing"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1002,
    quizSet: "Quiz 10",
    question: "I ______ my friend twice today, but he hasn’t answered.",
    options: ["called", "call", "have called", "have been calling"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1003,
    quizSet: "Quiz 10",
    question: "She ______ more confident lately because she’s performing on stage.",
    options: ["has been feeling", "has felt", "feels", "felt"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1004,
    quizSet: "Quiz 10",
    question: "We ______ the rules clearly, so the team finally understands.",
    options: ["have been explaining", "have explained", "explained", "explain"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1005,
    quizSet: "Quiz 10",
    question: "He ______ for a new role in the guild, and now he’s the leader.",
    options: ["has applied", "applied", "has been applying", "applies"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1006,
    quizSet: "Quiz 10",
    question: "My brain is tired—I ______ math problems all evening.",
    options: ["have been solving", "solved", "solve", "have solved"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1007,
    quizSet: "Quiz 10",
    question: "They ______ any progress yet because they keep changing the plan.",
    options: ["don’t make", "haven’t made", "didn’t make", "haven’t been making"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1008,
    quizSet: "Quiz 10",
    question: "I ______ to message her all day, but I’m nervous.",
    options: ["have wanted", "want", "have been wanting", "wanted"],
    correctAnswer: 2,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1009,
    quizSet: "Quiz 10",
    question: "She ______ that same excuse three times this week.",
    options: ["has been using", "used", "uses", "has used"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1010,
    quizSet: "Quiz 10",
    question: "We ______ a lot of new words recently, so speaking feels easier.",
    options: ["learned", "learn", "have learned", "have been learning"],
    correctAnswer: 3,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1011,
    quizSet: "Quiz 10",
    question: "He ______ the final level, so the story is finished now.",
    options: ["has completed", "completed", "completes", "has been completing"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1012,
    quizSet: "Quiz 10",
    question: "I ______ for a playlist that matches my mood, and I found one.",
    options: ["have been looking", "have looked", "looked", "look"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1013,
    quizSet: "Quiz 10",
    question: "They ______ online more lately because it’s winter and they stay home.",
    options: ["have been hanging out", "hung out", "hang out", "have hung out"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1014,
    quizSet: "Quiz 10",
    question: "She ______ her goal already, so now she needs a new challenge.",
    options: ["achieved", "has achieved", "achieves", "has been achieving"],
    correctAnswer: 1,
    explanation: "Review PPS vs PPC rules."
  },
  {
    id: 1015,
    quizSet: "Quiz 10",
    question: "We ______ the same mistake all week—rushing the last question.",
    options: ["have been making", "make", "made", "have made"],
    correctAnswer: 0,
    explanation: "Review PPS vs PPC rules."
  }
];

// Re-structured for exact Gap matching based on Prompt:
export const GAP_FILL_EXERCISE_LESSON: GapFillExercise = {
  id: "unit1.2_reading",
  title: "The Letter is Dead... Or Is It?",
  textParts: [
    "Does anyone pick up a pen anymore? It seems unlikely. We write fewer letters than ever before. It is true that fewer people ", // a
    ". We live in a world ", // b
    ". We are used to instant communication. Because ", // c
    ", we often feel stressed. Some people say ", // d
    " to write by hand. They prefer texting. However, handwriting is not dead. It is no longer just something ", // e
    ". Young people are discovering the joy of stationery."
  ],
  answers: [
    "send something by post every day",
    "with the speed and efficiency of digital media",
    "there is pressure to respond instantly",
    "life's too short",
    "written by older generations"
  ],
  hints: [
    "Gap A (Frequency)",
    "Gap B (Digital context)",
    "Gap C (The reason for stress)",
    "Gap D (Time argument)",
    "Gap E (Who writes?)"
  ]
};


export const TIMELINE_RULES: TimelineEvent[] = [
  {
    id: 'rule_a',
    type: 'SIMPLE',
    label: 'RULE A: Since/For',
    description: "Ongoing actions. PPS or PPC possible. 'I have worked/have been working here since 2010.'",
    translation_ru: "Действия, начавшиеся в прошлом (since/for)",
    translation_uz: "O'tmishda boshlangan harakatlar (since/for)"
  },
  {
    id: 'rule_b',
    type: 'CONTINUOUS',
    label: 'RULE B: Recent Activity',
    description: "Short time / recently / all day. Usually Continuous. 'People have been writing more recently.'",
    translation_ru: "Недавняя активность (all day/recently)",
    translation_uz: "Yaqinda sodir bo'lgan faoliyat"
  },
  {
    id: 'rule_c',
    type: 'SIMPLE',
    label: 'RULE C: Stative Verbs',
    description: "Verbs like Be, Have, Know, Like. Usually Simple. 'This has had a positive impact.'",
    translation_ru: "Глаголы состояния (Stative verbs)",
    translation_uz: "Holat fe'llari (Stative verbs)"
  },
  {
    id: 'rule_d',
    type: 'SIMPLE',
    label: 'RULE D: News / Experience',
    description: "Unspecified time, present link/result. 'Newspapers have reported a rise.'",
    translation_ru: "Новости / Жизненный опыт",
    translation_uz: "Yangiliklar / Hayotiy tajriba"
  }
];

export const SPEAKING_TOPICS = [
  {
    id: 'social_media',
    title: 'A) Social Media',
    questions: [
      { q: "What have you posted so far this week?", context: "PP | so far" },
      { q: "What have you been watching lately on TikTok/YouTube?", context: "PPC | lately" },
      { q: "Who have you followed recently and why?", context: "PP | recently" },
      { q: "How long have you been using your main app?", context: "PPC | since/for" },
      { q: "What haven’t you replied to yet in your DMs?", context: "PP | yet" },
      { q: "What trend have you tried so far this year?", context: "PP | so far" },
      { q: "Who have you been messaging all day today?", context: "PPC | all day" },
      { q: "What app have you deleted recently?", context: "PP | recently" },
      { q: "How long have you been scrolling without a break?", context: "PPC | for" },
      { q: "What have you updated on your profile today?", context: "PP | today" }
    ]
  },
  {
    id: 'video_games',
    title: 'B) Video Games',
    questions: [
      { q: "What new game have you tried recently?", context: "PP | recently" },
      { q: "How long have you been playing your favorite game?", context: "PPC | since/for" },
      { q: "What rank/level have you reached so far this season?", context: "PP | so far" },
      { q: "What have you been doing all day in your game?", context: "PPC | all day" },
      { q: "How long have you been waiting for an update/patch?", context: "PPC | for" },
      { q: "What strategy have you been using lately?", context: "PPC | lately" },
      { q: "How many trophies/achievements have you collected so far?", context: "PP | so far" },
      { q: "Who has been carrying the team in your recent matches?", context: "PPC | recent activity" },
      { q: "What bugs have you found recently?", context: "PP | recently" },
      { q: "How long have you been grinding for that item?", context: "PPC | how long" }
    ]
  },
  {
    id: 'art_content',
    title: 'C) Art & Content Creation',
    questions: [
      { q: "What artwork/edit have you finished this month?", context: "PP | this month" },
      { q: "What style have you been practicing lately?", context: "PPC | lately" },
      { q: "How long have you been working on your current project?", context: "PPC | since/for" },
      { q: "What tools/apps have you used so far this year?", context: "PP | so far" },
      { q: "What haven’t you posted yet because it’s “not perfect”?", context: "PP | yet" },
      { q: "What tutorial have you watched today?", context: "PP | today" },
      { q: "How many drafts have you scrapped so far?", context: "PP | so far" },
      { q: "What materials have you been using since you started?", context: "PPC | since" },
      { q: "Who has commented on your work recently?", context: "PP | recently" },
      { q: "What have you been creating all week?", context: "PPC | all week" }
    ]
  },
  {
    id: 'money',
    title: 'D) Money',
    questions: [
      { q: "What have you bought recently that was worth it?", context: "PP | recently" },
      { q: "What have you been saving for these days?", context: "PPC | for" },
      { q: "How long have you been budgeting for a goal?", context: "PPC | for" },
      { q: "What have you spent too much on this month?", context: "PP | this month" },
      { q: "What have you been comparing all day?", context: "PPC | all day" },
      { q: "How much have you earned this month?", context: "PP | this month" },
      { q: "What have you been wasting money on lately?", context: "PPC | lately" },
      { q: "What price have you checked already?", context: "PP | already" },
      { q: "Who has been paying for your subscriptions?", context: "PPC | activity" },
      { q: "What brand have you stopped buying recently?", context: "PP | recently" }
    ]
  },
  {
    id: 'plans_habits',
    title: 'E) Plans & Habits',
    questions: [
      { q: "What decision have you made already this week?", context: "PP | already" },
      { q: "What have you been planning for the weekend?", context: "PPC | for" },
      { q: "What skill have you been trying to improve lately?", context: "PPC | lately" },
      { q: "What haven’t you finished yet that you should finish today?", context: "PP | yet" },
      { q: "What habit have you changed since the start of the year?", context: "PP | since" },
      { q: "What class have you skipped recently?", context: "PP | recently" },
      { q: "How long have you been waiting for the bus/train today?", context: "PPC | how long" },
      { q: "What exercise have you done today?", context: "PP | today" },
      { q: "Who have you been hanging out with since school started?", context: "PPC | since" },
      { q: "What have you packed for your trip already?", context: "PP | already" }
    ]
  }
];