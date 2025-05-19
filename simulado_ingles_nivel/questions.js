 const allQuestions = [
  
  {
    q: "Choose the correct sentence:",
    options: [
      "He didn't knew the answer.",
      "He don't know the answer.",
      "He doesn't knows the answer.",
      "He doesn't know the answer."
    ],
    answer: 3,
    explanation: "'He doesn't know' é a forma correta: 'doesn't' já está no presente, então o verbo principal fica na forma base.",
    level: "B2"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "I'm interesting in learning Spanish.",
      "I'm interested in learn Spanish.",
      "I'm interested in learning Spanish.",
      "I interested in learning Spanish."
    ],
    answer: 2,
    explanation: "A forma correta é 'interested in learning', pois 'interested in' é seguido por verbo com -ing.",
    level: "B2"
  },
  {
    q: "Which is grammatically correct?",
    options: [
      "She said me to wait.",
      "She told me to wait.",
      "She said to me to wait.",
      "She told to me wait."
    ],
    answer: 1,
    explanation: "'Tell' é usado com objeto direto: 'She told me to wait'.",
    level: "B2"
  },
  {
    q: "Choose the correct question form:",
    options: [
      "Do you can help me?",
      "Can you help me?",
      "Can help me you?",
      "You can help me?"
    ],
    answer: 1,
    explanation: "'Can you help me?' é a forma interrogativa correta com modal verbs.",
    level: "B2"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "There is too much people here.",
      "There are too many people here.",
      "There are too much people here.",
      "There is too many people here."
    ],
    answer: 1,
    explanation: "'People' é contável, portanto usamos 'many' e 'there are'.",
    level: "B2"
  },
  {
    q: "Choose the correct form:",
    options: [
      "If it will rain, we will cancel the trip.",
      "If it rains, we will cancel the trip.",
      "If it rain, we will cancel the trip.",
      "If it raining, we will cancel the trip."
    ],
    answer: 1,
    explanation: "Condicional tipo 1 usa presente simples após 'if': 'If it rains, ...'",
    level: "B2"
  },
  {
    q: "Which sentence is correct?",
    options: [
      "He's married with a teacher.",
      "He's married to a teacher.",
      "He's married of a teacher.",
      "He's married by a teacher."
    ],
    answer: 1,
    explanation: "'Married to' é a preposição correta para indicar com quem alguém é casado.",
    level: "B2"
  },
  {
    q: "Choose the best option:",
    options: [
      "I look forward to meet you.",
      "I am looking forward to meet you.",
      "I look forward to meeting you.",
      "I am looking forward for meeting you."
    ],
    answer: 2,
    explanation: "A estrutura correta é 'look forward to + verbo com -ing': 'to meeting you'.",
    level: "B2"
  },
  {
    q: "Pick the grammatically correct sentence:",
    options: [
      "He used to play piano when he was a child.",
      "He use to play piano when he was a child.",
      "He uses to play piano when he was a child.",
      "He used play piano when he was a child."
    ],
    answer: 0,
    explanation: "'Used to + verb' indica hábito no passado: 'He used to play...'",
    level: "B2"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "Despite the rain, we went out.",
      "Despite of the rain, we went out.",
      "In spite the rain, we went out.",
      "Although of the rain, we went out."
    ],
    answer: 0,
    explanation: "A preposição 'despite' não é seguida de 'of': 'Despite the rain...'",
    level: "B2"
  },
{
    q: "Choose the correct sentence:",
    options: [
      "Had I known about the event, I would attend.",
      "Had I known about the event, I would have attended.",
      "Had I knew about the event, I would have attended.",
      "Had I known about the event, I would attend."
    ],
    answer: 1,
    explanation: "No período condicional tipo 3, usa-se 'Had I known...' seguido de 'would have attended'.",
    level: "C1"
  },
  {
    q: "Pick the sentence with correct use of inversion:",
    options: [
      "Never I have seen such a beautiful view.",
      "Rarely have I seen such a beautiful view.",
      "Rarely I have seen such a beautiful view.",
      "Never have I seen such a beautiful view."
    ],
    answer: 1,
    explanation: "Em frases negativas que começam com advérbios como 'rarely', ocorre inversão do verbo e sujeito: 'Rarely have I seen...'.",
    level: "C1"
  },
  {
    q: "Select the correct sentence:",
    options: [
      "She insists on me to finish the work.",
      "She insists that I finish the work.",
      "She insists me finishing the work.",
      "She insists on me finishing the work."
    ],
    answer: 1,
    explanation: "'Insist' seguido de uma cláusula subjuntiva exige 'that I finish', sem 'on' ou gerúndio.",
    level: "C1"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "Scarcely had the meeting started when the fire alarm rang.",
      "Scarcely the meeting had started when the fire alarm rang.",
      "Hardly had the meeting started when the fire alarm rang.",
      "Scarcely had started the meeting when the fire alarm rang."
    ],
    answer: 0,
    explanation: "Frases com 'Scarcely' + inversão: 'Scarcely had the meeting started...'.",
    level: "C1"
  },
  {
    q: "Pick the correct option:",
    options: [
      "I would rather you don't smoke here.",
      "I would rather you didn't smoke here.",
      "I would rather you don't smoked here.",
      "I would rather you hadn't smoked here."
    ],
    answer: 1,
    explanation: "A expressão 'would rather' é seguida pelo passado simples para expressar desejo no presente ou futuro: 'you didn't smoke'.",
    level: "C1"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "She suggested me to visit the museum.",
      "She suggested visiting the museum.",
      "She suggested that me visit the museum.",
      "She suggested me visiting the museum."
    ],
    answer: 1,
    explanation: "'Suggest' pode ser seguido de verbo com -ing: 'suggested visiting'.",
    level: "C1"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "He demanded that the report is finished by Monday.",
      "He demanded that the report be finished by Monday.",
      "He demanded the report finished by Monday.",
      "He demanded that the report was finished by Monday."
    ],
    answer: 1,
    explanation: "Em cláusulas com 'demand' e subjuntivo, usa-se 'be finished' no presente subjuntivo.",
    level: "C1"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "Not only she is talented but also hardworking.",
      "Not only is she talented but also hardworking.",
      "Not only she is talented but also she is hardworking.",
      "Not only is talented she but also hardworking."
    ],
    answer: 1,
    explanation: "Na estrutura 'Not only', ocorre inversão do verbo e sujeito: 'Not only is she talented...'.",
    level: "C1"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "It's high time we leave.",
      "It's high time we left.",
      "It's high time we have left.",
      "It's high time we had left."
    ],
    answer: 1,
    explanation: "A expressão 'It's high time' é seguida pelo passado simples: 'we left'.",
    level: "C1"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "She had hardly finished her work when he arrived.",
      "She had hardly finish her work when he arrived.",
      "She hardly had finished her work when he arrived.",
      "Hardly she had finished her work when he arrived."
    ],
    answer: 0,
    explanation: "'Had hardly finished' é a forma correta para indicar ação anterior a outra no passado.",
    level: "C1"
  },


  {
    q: "Choose the correct sentence:",
    options: [
      "Had I but known, I would have acted differently.",
      "Had I but knew, I would have acted differently.",
      "Had I but know, I would have acted differently.",
      "Had I but had known, I would have acted differently."
    ],
    answer: 0,
    explanation: "A forma correta é 'Had I but known', que é uma inversão condicional formal com o particípio passado de 'know'.",
    level: "C2"
  },
  {
    q: "Select the sentence with correct inversion:",
    options: [
      "Seldom have I witnessed such a display of courage.",
      "Seldom I have witnessed such a display of courage.",
      "Seldom have I witness such a display of courage.",
      "Seldom I witnessed have such a display of courage."
    ],
    answer: 0,
    explanation: "Em estruturas com advérbios negativos como 'seldom', ocorre inversão do verbo auxiliar e sujeito: 'Seldom have I witnessed...'.",
    level: "C2"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "Were he to accept the offer, it would change his life.",
      "Were he accepting the offer, it would change his life.",
      "Were he accepted the offer, it would change his life.",
      "Were he accepts the offer, it would change his life."
    ],
    answer: 0,
    explanation: "'Were he to accept' é uma forma correta de condicional irrealis formal usando inversão.",
    level: "C2"
  },
  {
    q: "Pick the sentence with correct use of subjunctive mood:",
    options: [
      "It is essential that he be present at the meeting.",
      "It is essential that he is present at the meeting.",
      "It is essential that he was present at the meeting.",
      "It is essential he be present at the meeting."
    ],
    answer: 0,
    explanation: "No subjuntivo formal, após expressões como 'it is essential', o verbo fica no presente subjuntivo: 'that he be present'.",
    level: "C2"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "No sooner had she arrived than the phone rang.",
      "No sooner she had arrived than the phone rang.",
      "No sooner had arrived she than the phone rang.",
      "No sooner had she arrive than the phone rang."
    ],
    answer: 0,
    explanation: "'No sooner' exige inversão do auxiliar e sujeito: 'No sooner had she arrived...'.",
    level: "C2"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "He speaks as if he knows everything.",
      "He speaks as if he knew everything.",
      "He speaks as if he known everything.",
      "He speaks as if he know everything."
    ],
    answer: 1,
    explanation: "Após 'as if' quando a situação é irreal, usa-se o passado simples: 'as if he knew'.",
    level: "C2"
  },
  {
    q: "Select the correct sentence:",
    options: [
      "Had it not been for her advice, I would have failed.",
      "Had it not been by her advice, I would have failed.",
      "Had it not been of her advice, I would have failed.",
      "Had it not been from her advice, I would have failed."
    ],
    answer: 0,
    explanation: "A expressão correta é 'Had it not been for' para indicar causa contrafactual.",
    level: "C2"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "He acts as though he were the boss.",
      "He acts as though he was the boss.",
      "He acts as though he is the boss.",
      "He acts as though he be the boss."
    ],
    answer: 0,
    explanation: "'As though' seguido de situação irreal exige o subjuntivo 'were'.",
    level: "C2"
  },
  {
    q: "Pick the correct sentence:",
    options: [
      "Little did I expect to see her there.",
      "Little I did expect to see her there.",
      "Little did expect I to see her there.",
      "Little did I expected to see her there."
    ],
    answer: 0,
    explanation: "Em frases com advérbios negativos como 'little', ocorre inversão verbo-sujeito: 'Little did I expect...'.",
    level: "C2"
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "Were it not for his help, I would have given up.",
      "Were it not from his help, I would have given up.",
      "Were it not by his help, I would have given up.",
      "Were it not with his help, I would have given up."
    ],
    answer: 0,
    explanation: "A forma correta para expressar condição contrafactual é 'Were it not for'.",
    level: "C2"
  },


{
  q: "Choose the correct sentence:",
  options: [
    "I have been living here since five years.",
    "I have lived here for five years.",
    "I live here since five years.",
    "I am living here since five years."
  ],
  answer: 1,
  explanation: "Usa-se 'have lived ... for' para períodos de tempo contínuos no presente perfeito.",
  level: "b2"
},
{
  q: "Complete the sentence: If I ____ more time, I would learn another language.",
  options: ["have", "had", "will have", "would have"],
  answer: 1,
  explanation: "Condicional tipo 2: 'If I had more time' para situações irreais no presente.",
  level: "b2"
},
{
  q: "What is the correct form of the verb in this sentence? 'She ____ to the gym every morning.'",
  options: ["go", "going", "goes", "gone"],
  answer: 2,
  explanation: "Para he/she/it no presente simples, o verbo leva 's': 'goes'.",
  level: "b2"
},
{
  q: "Choose the synonym of 'difficult':",
  options: ["easy", "hard", "simple", "clear"],
  answer: 1,
  explanation: "'Hard' é sinônimo de 'difficult'.",
  level: "b2"
},
{
  q: "Complete: He said he ____ come to the party.",
  options: ["will", "would", "can", "could"],
  answer: 1,
  explanation: "Discurso indireto para futuro: 'would' é o passado de 'will'.",
  level: "b2"
},
{
  q: "Choose the correct question tag: 'You like coffee, ____?'",
  options: ["do you", "don't you", "did you", "doesn't you"],
  answer: 1,
  explanation: "Question tag para afirmativa positiva é negativa: 'don't you?'.",
  level: "b2"
},
{
  q: "Fill in: They ____ already ____ the movie when we arrived.",
  options: [
    "had, watched",
    "have, watched",
    "had, been watching",
    "have, been watching"
  ],
  answer: 0,
  explanation: "Past perfect: ação completada antes de outra no passado.",
  level: "b2"
},
{
  q: "Choose the correct preposition: 'She is good ____ playing tennis.'",
  options: ["in", "at", "on", "for"],
  answer: 1,
  explanation: "'Good at' é a expressão correta para habilidades.",
  level: "b2"
},
{
  q: "What is the correct passive form? 'The chef ____ the meal yesterday.'",
  options: [
    "was cooked",
    "cooked",
    "was cooking",
    "cooked by"
  ],
  answer: 0,
  explanation: "Passado simples na voz passiva: 'was cooked'.",
  level: "b2"
},
{
  q: "Choose the word that completes the sentence: 'This is the ____ book I've ever read.'",
  options: ["most interesting", "interestinger", "more interesting", "interestingest"],
  answer: 0,
  explanation: "Superlativo correto é 'most interesting'.",
  level: "b2"
},


{
  q: "Identify the error: 'He suggested me to go to the doctor.'",
  options: [
    "The verb 'suggest' is incorrect here.",
    "The object pronoun 'me' should be 'I'.",
    "The infinitive 'to go' is incorrect after 'suggest'.",
    "No error."
  ],
  answer: 2,
  explanation: "'Suggest' is followed by a gerund or a that-clause, not 'to' + infinitive.",
  level: "c1"
},
{
  q: "Choose the correct sentence:",
  options: [
    "Had I known, I would have told you.",
    "If I would have known, I told you.",
    "Had I knew, I would tell you.",
    "If I know, I would tell you."
  ],
  answer: 0,
  explanation: "Inversion in third conditional: 'Had I known...'",
  level: "c1"
},
{
  q: "Complete: 'No sooner ____ than the phone rang.'",
  options: ["had he left", "he had left", "did he leave", "he left"],
  answer: 0,
  explanation: "'No sooner' inversion requires past perfect + 'than'.",
  level: "c1"
},
{
  q: "Choose the best word to fill the gap: 'She showed great ____ in handling the crisis.'",
  options: ["resilience", "reluctance", "resistance", "reticence"],
  answer: 0,
  explanation: "'Resilience' means ability to recover quickly from difficulties.",
  level: "c1"
},
{
  q: "What is the meaning of the idiom 'to beat around the bush'?",
  options: [
    "To avoid the main topic.",
    "To be very direct.",
    "To speak loudly.",
    "To be angry."
  ],
  answer: 0,
  explanation: "Means to avoid talking about the main point.",
  level: "c1"
},
{
  q: "Choose the correct passive form: 'They ____ the project by next week.'",
  options: [
    "will have completed",
    "will have been completed",
    "will have been completing",
    "will be completed"
  ],
  answer: 3,
  explanation: "Future passive: 'will be completed'.",
  level: "c1"
},
{
  q: "Fill in: 'If it ____ for your help, I would have failed.'",
  options: ["weren't", "wasn't", "hadn't been", "hadn't"],
  answer: 3,
  explanation: "Third conditional: 'If it hadn't been for...'",
  level: "c1"
},
{
  q: "Choose the correct sentence:",
  options: [
    "She is used to get up early.",
    "She used to getting up early.",
    "She is used to getting up early.",
    "She used to get up early."
  ],
  answer: 2,
  explanation: "'Be used to' is followed by gerund.",
  level: "c1"
},
{
  q: "What does 'subtle' mean?",
  options: [
    "Obvious",
    "Delicate or precise",
    "Loud",
    "Strong"
  ],
  answer: 1,
  explanation: "'Subtle' means something not obvious, delicate.",
  level: "c1"
},
{
  q: "Complete the sentence: 'I would rather you ____ here earlier.'",
  options: ["were", "was", "are", "have been"],
  answer: 0,
  explanation: "'Would rather' + past subjunctive (were) for hypothetical situations.",
  level: "c1"
},

{
  q: "Choose the correct sentence:",
  options: [
    "Hardly had he arrived when the meeting started.",
    "Hardly he had arrived when the meeting started.",
    "Had he hardly arrived when the meeting started.",
    "Hardly had he arrive when the meeting started."
  ],
  answer: 0,
  explanation: "Inversion with 'hardly' requires past perfect + subject + verb.",
  level: "c2"
},
{
  q: "Identify the error: 'It is high time you leave.'",
  options: [
    "The phrase 'high time' requires past simple.",
    "The verb 'leave' should be 'left'.",
    "The sentence is correct.",
    "The word 'high' is incorrect."
  ],
  answer: 1,
  explanation: "'High time' is followed by past simple: 'you left'.",
  level: "c2"
},
{
  q: "Choose the best word: 'Her argument was ____ convincing that no one could disagree.'",
  options: ["so", "such", "too", "very"],
  answer: 0,
  explanation: "'So ... that' structure expresses result.",
  level: "c2"
},
{
  q: "Complete: 'Seldom ____ such a brilliant performance.'",
  options: ["have I seen", "I have seen", "had I seen", "did I see"],
  answer: 0,
  explanation: "Inversion with 'seldom' requires auxiliary verb before subject.",
  level: "c2"
},
{
  q: "Choose the correct subjunctive form: 'If I ____ the opportunity, I would travel more.'",
  options: ["had", "have", "were to have", "had had"],
  answer: 2,
  explanation: "'Were to have' expresses a hypothetical subjunctive condition.",
  level: "c2"
},
{
  q: "What is the meaning of the idiom 'to cut corners'?",
  options: [
    "To do something in the easiest or cheapest way, often badly.",
    "To speed up a process efficiently.",
    "To travel a long distance.",
    "To be very careful."
  ],
  answer: 0,
  explanation: "Means to take shortcuts, often leading to poor results.",
  level: "c2"
},
{
  q: "Choose the correct form: 'He demanded that she ____ the report immediately.'",
  options: ["submit", "submits", "submitted", "will submit"],
  answer: 0,
  explanation: "Subjunctive mood requires base form: 'submit'.",
  level: "c2"
},
{
  q: "Fill in: 'Not only ____ she excel in math, but she also won the competition.'",
  options: [
    "does",
    "did",
    "has",
    "had"
  ],
  answer: 0,
  explanation: "Inversion with 'Not only' requires auxiliary before subject.",
  level: "c2"
},
{
  q: "Choose the synonym of 'obfuscate':",
  options: ["clarify", "confuse", "simplify", "enhance"],
  answer: 1,
  explanation: "'Obfuscate' means to confuse or make unclear.",
  level: "c2"
},
{
  q: "Complete: 'Had I ____ known about the changes, I would have prepared better.'",
  options: ["really", "hardly", "never", "well"],
  answer: 0,
  explanation: "Correct adverb placement with inversion.",
  level: "c2"
},

{
  q: "Choose the correct sentence:",
  options: [
    "She can sings very well.",
    "She cans sing very well.",
    "She can sing very well.",
    "She can to sing very well."
  ],
  answer: 2,
  explanation: "Após o modal verb 'can', usamos o verbo na forma base: 'can sing'.",
  level: "B2"
},
{
  q: "Choose the correct sentence:",
  options: [
    "There is many people in the room.",
    "There are many people in the room.",
    "There is much people in the room.",
    "There are much people in the room."
  ],
  answer: 1,
  explanation: "'People' é plural, então o correto é 'There are many people'.",
  level: "B2"
},
{
  q: "Which sentence is correct?",
  options: [
    "He has lived here since five years.",
    "He has been living here for five years.",
    "He lives here since five years.",
    "He live here for five years."
  ],
  answer: 1,
  explanation: "A forma correta é 'has been living... for five years' para expressar uma ação contínua até o presente.",
  level: "B2"
},
{
  q: "Choose the correct sentence:",
  options: [
    "Rarely I have seen such a performance.",
    "Rarely have I seen such a performance.",
    "Rarely seen I have such a performance.",
    "I rarely have seen such a performance."
  ],
  answer: 1,
  explanation: "Após adverbios negativos como 'Rarely', há inversão verbal: 'Rarely have I seen...'.",
  level: "C1"
},
{
  q: "Choose the correct sentence:",
  options: [
    "Had he not been so tired, he will finished the task.",
    "Had he not been so tired, he finished the task.",
    "Had he not been so tired, he would have finished the task.",
    "If he not been tired, he would have finished the task."
  ],
  answer: 2,
  explanation: "Essa é uma inversão condicional tipo 3: 'Had he not been..., he would have...'.",
  level: "C1"
},
{
  q: "Which option uses the subjunctive mood correctly?",
  options: [
    "If I was you, I would leave.",
    "If I were you, I would leave.",
    "If I am you, I would leave.",
    "If I be you, I would leave."
  ],
  answer: 1,
  explanation: "Usamos 'If I were' no subjuntivo para situações hipotéticas.",
  level: "C1"
},

{
  q: "Choose the correct sentence with proper parallel structure:",
  options: [
    "She enjoys reading, to jog, and cooking.",
    "She enjoys to read, jogging, and cooking.",
    "She enjoys reading, jogging, and cooking.",
    "She enjoys to read, to jog, and cooking."
  ],
  answer: 2,
  explanation: "Todos os verbos estão na forma 'ing' (gerúndio), mantendo a estrutura paralela.",
  level: "C2"
},
{
  q: "Identify the sentence with correct inversion for emphasis:",
  options: [
    "Only when he apologized I forgave him.",
    "Only when he apologized did I forgive him.",
    "Only when he apologized I did forgive him.",
    "Only he apologized when did I forgive him."
  ],
  answer: 1,
  explanation: "Após 'Only when', ocorre inversão: 'did I forgive him'.",
  level: "C2"
},
{
  q: "Which sentence demonstrates proper usage of a cleft sentence?",
  options: [
    "It was John who broke the vase.",
    "Was John who broke the vase.",
    "John broke the vase it was.",
    "It was who broke the vase John."
  ],
  answer: 0,
  explanation: "'It was John who...' é uma cleft sentence usada para dar ênfase.",
  level: "C2"
}




];


