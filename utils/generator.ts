import { QuizQuestion } from '../types';

type VerbType = 'ACTION' | 'STATIVE';

interface VerbDef {
  base: string;
  v3: string; // Past Participle
  ving: string; // Present Participle
  type: VerbType;
  objects: string[];
}

interface TopicConfig {
  id: string;
  name: string;
  verbs: VerbDef[];
}

// === DATASETS ===

const TOPICS: TopicConfig[] = [
  {
    id: 'SOCIAL_MEDIA',
    name: 'Social Media',
    verbs: [
      { base: 'scroll', v3: 'scrolled', ving: 'scrolling', type: 'ACTION', objects: ['TikTok', 'Instagram Reels', 'through my feed'] },
      { base: 'stalk', v3: 'stalked', ving: 'stalking', type: 'ACTION', objects: ['my ex\'s profile', 'a celebrity', 'a random account'] },
      { base: 'gain', v3: 'gained', ving: 'gaining', type: 'ACTION', objects: ['100 followers', 'subscribers', 'clout'] },
      { base: 'block', v3: 'blocked', ving: 'blocking', type: 'ACTION', objects: ['haters', 'bots', 'toxic users'] },
      { base: 'go', v3: 'gone', ving: 'going', type: 'ACTION', objects: ['viral', 'live'] },
      { base: 'post', v3: 'posted', ving: 'posting', type: 'ACTION', objects: ['stories', 'memes', 'selfies'] }
    ]
  },
  {
    id: 'MINECRAFT',
    name: 'Minecraft',
    verbs: [
      { base: 'mine', v3: 'mined', ving: 'mining', type: 'ACTION', objects: ['diamonds', 'obsidian', 'for netherite'] },
      { base: 'build', v3: 'built', ving: 'building', type: 'ACTION', objects: ['a dirt house', 'a redstone trap', 'a mega base'] },
      { base: 'fight', v3: 'fought', ving: 'fighting', type: 'ACTION', objects: ['the Ender Dragon', 'creepers', 'a horde of zombies'] },
      { base: 'craft', v3: 'crafted', ving: 'crafting', type: 'ACTION', objects: ['diamond armor', 'a pickaxe', 'TNT'] },
    ]
  },
  {
    id: 'HARRY_POTTER',
    name: 'Harry Potter',
    verbs: [
      { base: 'cast', v3: 'cast', ving: 'casting', type: 'ACTION', objects: ['spells', 'Expecto Patronum', 'Wingardium Leviosa'] },
      { base: 'brew', v3: 'brewed', ving: 'brewing', type: 'ACTION', objects: ['Polyjuice Potion', 'Felix Felicis', 'liquid luck'] },
      { base: 'chase', v3: 'chased', ving: 'chasing', type: 'ACTION', objects: ['the Golden Snitch', 'Malfoy', 'Nargles'] },
      { base: 'watch', v3: 'watched', ving: 'watching', type: 'ACTION', objects: ['the movies again', 'Quidditch matches'] },
      { base: 'be', v3: 'been', ving: 'being', type: 'STATIVE', objects: ['a wizard', 'in Gryffindor', 'scared of Voldemort'] },
    ]
  },
  {
    id: 'BILLIE_EILISH',
    name: 'Billie Eilish',
    verbs: [
      { base: 'listen', v3: 'listened', ving: 'listening', type: 'ACTION', objects: ['to "Bad Guy"', 'to her new album', 'to sad songs'] },
      { base: 'dye', v3: 'dyed', ving: 'dyeing', type: 'ACTION', objects: ['her hair green', 'her roots', 'her hair black'] },
      { base: 'sing', v3: 'sung', ving: 'singing', type: 'ACTION', objects: ['whisper vocals', 'live at a concert', 'in the studio'] },
      { base: 'win', v3: 'won', ving: 'winning', type: 'ACTION', objects: ['another Grammy', 'an Oscar', 'awards'] },
    ]
  },
  {
    id: 'ANIME',
    name: 'Anime',
    verbs: [
      { base: 'binge', v3: 'binged', ving: 'bingeing', type: 'ACTION', objects: ['One Piece', 'Attack on Titan', 'Naruto fillers'] },
      { base: 'read', v3: 'read', ving: 'reading', type: 'ACTION', objects: ['the manga', 'fan fiction', 'subtitles'] },
      { base: 'wait', v3: 'waited', ving: 'waiting', type: 'ACTION', objects: ['for the next season', 'for the new episode'] },
      { base: 'cosplay', v3: 'cosplayed', ving: 'cosplaying', type: 'ACTION', objects: ['as Zoro', 'at the convention', 'Goku'] },
    ]
  },
  {
    id: 'HORROR',
    name: 'Horror Movies',
    verbs: [
      { base: 'scream', v3: 'screamed', ving: 'screaming', type: 'ACTION', objects: ['at the TV', 'in terror', 'loudly'] },
      { base: 'hide', v3: 'hidden', ving: 'hiding', type: 'ACTION', objects: ['under the blanket', 'behind the sofa'] },
      { base: 'have', v3: 'had', ving: 'having', type: 'STATIVE', objects: ['nightmares', 'goosebumps'] },
      { base: 'watch', v3: 'watched', ving: 'watching', type: 'ACTION', objects: ['The Conjuring', 'slasher movies', 'scary compilations'] },
    ]
  },
  {
    id: 'MONEY',
    name: 'Money & Crypto',
    verbs: [
      { base: 'invest', v3: 'invested', ving: 'investing', type: 'ACTION', objects: ['in Bitcoin', 'in stocks', 'all my savings'] },
      { base: 'save', v3: 'saved', ving: 'saving', type: 'ACTION', objects: ['for a PS5', 'money', 'up for a car'] },
      { base: 'waste', v3: 'wasted', ving: 'wasting', type: 'ACTION', objects: ['cash on skins', 'money on coffee'] },
      { base: 'lose', v3: 'lost', ving: 'losing', type: 'ACTION', objects: ['value', 'my wallet', 'a bet'] },
    ]
  },
  {
    id: 'ART_DESIGN',
    name: 'Art & Design',
    verbs: [
      { base: 'sketch', v3: 'sketched', ving: 'sketching', type: 'ACTION', objects: ['a portrait', 'character designs', 'layouts'] },
      { base: 'render', v3: 'rendered', ving: 'rendering', type: 'ACTION', objects: ['a 3D model', 'a video', 'the final scene'] },
      { base: 'mix', v3: 'mixed', ving: 'mixing', type: 'ACTION', objects: ['colors', 'paints', 'layers'] },
      { base: 'erase', v3: 'erased', ving: 'erasing', type: 'ACTION', objects: ['the mistake', 'the background'] },
    ]
  },
  {
    id: 'PSYCHOLOGY',
    name: 'Psychology',
    verbs: [
      { base: 'analyze', v3: 'analyzed', ving: 'analyzing', type: 'ACTION', objects: ['my dreams', 'behavior', 'personality types'] },
      { base: 'feel', v3: 'felt', ving: 'feeling', type: 'ACTION', objects: ['anxious', 'burnt out', 'depressed'] },
      { base: 'study', v3: 'studied', ving: 'studying', type: 'ACTION', objects: ['the brain', 'emotions', 'body language'] },
      { base: 'think', v3: 'thought', ving: 'thinking', type: 'ACTION', objects: ['about life', 'too much', 'about the future'] },
    ]
  },
  {
    id: 'BEAUTY',
    name: 'Beauty',
    verbs: [
      { base: 'blend', v3: 'blended', ving: 'blending', type: 'ACTION', objects: ['eyeshadow', 'contour', 'foundation'] },
      { base: 'watch', v3: 'watched', ving: 'watching', type: 'ACTION', objects: ['tutorials', 'reviews', 'Get Ready With Me videos'] },
      { base: 'try', v3: 'tried', ving: 'trying', type: 'ACTION', objects: ['a new routine', 'Korean skincare', 'that viral mascara'] },
      { base: 'break out', v3: 'broken out', ving: 'breaking out', type: 'ACTION', objects: ['from stress', 'because of chocolate'] },
    ]
  },
  {
    id: 'DETECTIVES',
    name: 'Detectives',
    verbs: [
        { base: 'solve', v3: 'solved', ving: 'solving', type: 'ACTION', objects: ['the mystery', 'the crime', 'the puzzle'] },
        { base: 'chase', v3: 'chased', ving: 'chasing', type: 'ACTION', objects: ['the suspect', 'the killer', 'clues'] },
        { base: 'investigate', v3: 'investigated', ving: 'investigating', type: 'ACTION', objects: ['the crime scene', 'the evidence'] },
        { base: 'interrogate', v3: 'interrogated', ving: 'interrogating', type: 'ACTION', objects: ['the witness', 'the suspect'] }
    ]
  },
  {
      id: 'FUN',
      name: 'Fun & Party',
      verbs: [
          { base: 'dance', v3: 'danced', ving: 'dancing', type: 'ACTION', objects: ['all night', 'to the music', 'with friends'] },
          { base: 'laugh', v3: 'laughed', ving: 'laughing', type: 'ACTION', objects: ['at the joke', 'so hard', 'at the meme'] },
          { base: 'party', v3: 'partied', ving: 'partying', type: 'ACTION', objects: ['until dawn', 'on the beach'] },
          { base: 'celebrate', v3: 'celebrated', ving: 'celebrating', type: 'ACTION', objects: ['my birthday', 'passing exams'] }
      ]
  },
  {
      id: 'FUTURE',
      name: 'Future Plans',
      verbs: [
          { base: 'plan', v3: 'planned', ving: 'planning', type: 'ACTION', objects: ['my career', 'a trip to Mars', 'my wedding'] },
          { base: 'dream', v3: 'dreamed', ving: 'dreaming', type: 'ACTION', objects: ['of success', 'about traveling', 'big'] },
          { base: 'apply', v3: 'applied', ving: 'applying', type: 'ACTION', objects: ['for jobs', 'to university', 'for a visa'] },
          { base: 'save', v3: 'saved', ving: 'saving', type: 'ACTION', objects: ['for a house', 'for retirement'] }
      ]
  }
];

// === LOGIC ENGINE ===

const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const getAvailableTopics = () => TOPICS;

export const generateQuestion = (topicId?: string): QuizQuestion => {
  // 1. Select Topic
  const topic = topicId 
    ? TOPICS.find(t => t.id === topicId) || getRandomItem(TOPICS)
    : getRandomItem(TOPICS);

  // 2. Select Verb and Object
  const verbDef = getRandomItem(topic.verbs);
  const object = getRandomItem(verbDef.objects);

  // 3. Determine Mode (PPS or PPC)
  let targetMode: 'PPS' | 'PPC';
  
  if (verbDef.type === 'STATIVE') {
    targetMode = 'PPS';
  } else {
    // 50/50 chance for action verbs
    targetMode = Math.random() > 0.5 ? 'PPS' : 'PPC';
  }

  // 4. Construct Sentence
  let questionText = "";
  let correctAnswer = "";
  let distractors: string[] = [];
  let explanation = "";

  const subjects = ['I', 'She', 'He', 'They', 'We', 'You'];
  const subject = getRandomItem(subjects);
  
  // Auxiliary handling
  const aux = (subject === 'I' || subject === 'They' || subject === 'We' || subject === 'You') ? 'have' : 'has';

  if (targetMode === 'PPS') {
    const scenario = Math.random();

    if (verbDef.type === 'STATIVE') {
        const marker = getRandomItem(['for years', 'since childhood', 'all my life']);
        questionText = `${subject} ______ ${object} ${marker}.`;
        correctAnswer = `${aux} ${verbDef.v3}`;
        distractors = [`${aux} been ${verbDef.ving}`, `${aux} ${verbDef.ving}`, `was ${verbDef.ving}`];
        explanation = `Stative verbs like '${verbDef.base}' are rarely used in continuous forms. Use Simple.`;
    } else if (scenario > 0.5) {
        // Quantity / Frequency
        const quantity = getRandomItem(['three', 'five', 'many', 'a few']);
        const countObj = object.endsWith('s') ? object : object + 's';
        questionText = `${subject} ______ ${quantity} ${countObj} today.`;
        correctAnswer = `${aux} ${verbDef.v3}`;
        distractors = [`${aux} been ${verbDef.ving}`, `did ${verbDef.base}`, `are ${verbDef.ving}`];
        explanation = `Quantity (${quantity}) mentioned. Focus is on result. Use Present Perfect Simple.`;
    } else {
        // Result / Completion
        const marker = getRandomItem(['already', 'just', 'finally', 'yet']);
        if (marker === 'yet') {
            const negAux = aux === 'have' ? "haven't" : "hasn't";
            questionText = `${subject} ______ ${object} yet.`;
            correctAnswer = `${negAux} ${verbDef.v3}`;
            distractors = [`${negAux} been ${verbDef.ving}`, `didn't ${verbDef.base}`, `don't ${verbDef.base}`];
            explanation = `'Yet' indicates completion (or lack of). Use Simple.`;
        } else {
             questionText = `${subject} ______ ${object} ${marker}.`;
             correctAnswer = `${aux} ${verbDef.v3}`;
             distractors = [`${aux} been ${verbDef.ving}`, `did ${verbDef.base}`, `was ${verbDef.ving}`];
             explanation = `'${marker}' emphasizes the completed result. Use Simple.`;
        }
    }

  } else {
    // PPC SCENARIOS
    const scenario = Math.random();

    if (scenario > 0.5) {
        // Duration
        const marker = getRandomItem(['all day', 'for 3 hours', 'since 9 AM', 'non-stop']);
        questionText = `${subject} ______ ${object} ${marker}!`;
        correctAnswer = `${aux} been ${verbDef.ving}`;
        distractors = [`${aux} ${verbDef.v3}`, `are ${verbDef.ving}`, `were ${verbDef.ving}`];
        explanation = `'${marker}' emphasizes duration/activity. Use Continuous.`;
    } else {
        // Side Effect
        const sideEffect = getRandomItem([
            "so eyes are red", 
            "so hands are dirty", 
            "so they are tired", 
            "and forgot to eat"
        ]);
        questionText = `${subject} ______ ${object}, ${sideEffect}.`;
        correctAnswer = `${aux} been ${verbDef.ving}`;
        distractors = [`${aux} ${verbDef.v3}`, `had ${verbDef.v3}`, `did ${verbDef.base}`];
        explanation = `Side effect (${sideEffect}) shows recent activity. Use Continuous.`;
    }
  }

  // Shuffle logic
  const allOptions = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
  const correctIndex = allOptions.indexOf(correctAnswer);

  return {
    id: Math.floor(Math.random() * 1000000),
    quizSet: topic.name,
    question: questionText,
    options: allOptions,
    correctAnswer: correctIndex,
    explanation: explanation
  };
};

export const generateBatch = (count: number, topicId?: string): QuizQuestion[] => {
    const batch: QuizQuestion[] = [];
    for(let i=0; i<count; i++) {
        batch.push(generateQuestion(topicId));
    }
    return batch;
};