const questions = [
  {
    q: "Qual alternativa está INCORRETA quanto à acentuação gráfica?",
    options: ["Bônus", "Juíz", "Fácil", "Júri", "Ícone"],
    answer: 1,
    explanation: "‘Juiz’ é monossílaba tônica terminada em Z, e não leva acento."
  },
  {
    q: "Assinale a palavra que está acentuada incorretamente.",
    options: ["Pôde", "Vôo", "É", "Avó", "Análise"],
    answer: 1,
    explanation: "‘Voo’ perdeu o acento com a reforma ortográfica."
  },
 {
    q: "Qual das palavras abaixo NÃO deve ser acentuada?",
    options: ["Hífen", "Jóia", "Saída", "Heroico", "Música"],
    answer: 3,
    explanation: "Palavras paroxítonas terminadas em 'i' seguido de vogal não são acentuadas, como 'heroico'."
  },
  {
    q: "Em qual palavra o acento foi eliminado pela reforma ortográfica?",
    options: ["Feiúra", "Enxágue", "Paraíso", "Feição", "Heróico"],
    answer: 0,
    explanation: "'Feiúra' perdeu o acento, que antes marcava o hiato."
  },
  {
    q: "Qual palavra tem acento indicativo de hiato?",
    options: ["Saúde", "País", "Mãe", "Pão", "Faz"],
    answer: 1,
    explanation: "'País' tem hiato entre as vogais 'a' e 'í', marcado pelo acento."
  },
  {
    q: "Assinale a alternativa com a palavra acentuada corretamente.",
    options: ["Efeíte", "Fácil", "Lapis", "Paraguaí", "Tatuí"],
    answer: 1,
    explanation: "'Fácil' é palavra paroxítona terminada em 'l' e leva acento."
  },
  {
    q: "Qual das palavras a seguir é monossílaba tônica e deve ser acentuada?",
    options: ["Paz", "Mau", "Pé", "Sol", "Mar"],
    answer: 2,
    explanation: "Monossílabos tônicos terminados em 'é', 'pé' levam acento."
  },
  {
    q: "Assinale a palavra que perdeu o acento com a reforma ortográfica.",
    options: ["Heroico", "Bocaiuva", "Voo", "Jiboia", "Feiura"],
    answer: 2,
    explanation: "'Voo' perdeu o acento indicativo de hiato."
  },
  {
    q: "Qual palavra deve ser acentuada para indicar a tonicidade?",
    options: ["Saida", "Aguia", "Urubu", "Pinguim", "Mandarim"],
    answer: 1,
    explanation: "'Águia' é paroxítona terminada em ditongo e leva acento."
  },
  {
    q: "Em qual alternativa todas as palavras estão acentuadas corretamente?",
    options: ["Têxtil, Fácil, Pônei", "Hifen, Feriado, Goia", "Tatil, Fucil, Ponei", "Hífen, Facil, Góiá", "Texil, Fácíl, Pónei"],
    answer: 0,
    explanation: "'Têxtil', 'Fácil' e 'Pônei' estão corretas."
  },
  {
    q: "Qual palavra é uma oxítona terminada em 'em' e deve ser acentuada?",
    options: ["Paranem", "Armazém", "Alguém", "Tambem", "Tambem"],
    answer: 1,
    explanation: "'Armazém' é oxítona terminada em 'em' e leva acento."
  },
  {
    q: "Qual palavra abaixo apresenta o uso correto do trema?",
    options: ["Minguem", "Linguiça", "Tranquilo", "Quente", "Inglês"],
    answer: 1,
    explanation: "O trema foi abolido em palavras de origem portuguesa, mas permanece em nomes próprios e estrangeirismos. 'Linguiça' mantém o 'u' sem trema, mas é correto."
  },
  {
    q: "Qual das palavras deve ser acentuada para indicar a tonicidade da vogal?",
    options: ["Heroico", "Paraguaio", "Bocaiuva", "Análise", "Jiboia"],
    answer: 3,
    explanation: "'Análise' é paroxítona terminada em 'se' e leva acento."
  },
  {
    q: "Assinale a alternativa em que o acento indica a diferença entre palavras homônimas.",
    options: ["Para / Pará", "Massa / Massa", "Cedo / Cedo", "Amo / Amo", "Sede / Sede"],
    answer: 0,
    explanation: "'Para' (verbo) e 'Pará' (estado) diferenciam-se pelo acento."
  },
  {
    q: "Qual palavra é oxítona e leva acento gráfico?",
    options: ["Cafe", "Papel", "Jacaré", "Mesa", "Livro"],
    answer: 2,
    explanation: "'Jacaré' é oxítona terminada em 'é' e leva acento."
  },
  {
    q: "Qual palavra não deve ser acentuada segundo a reforma ortográfica?",
    options: ["Feiúra", "Enxágue", "Bocaiuva", "Bocaiuva", "Feiura"],
    answer: 4,
    explanation: "'Feiura' não leva acento, pois perdeu o hiato acentuado."
  },
  {
    q: "Qual alternativa apresenta uma palavra com ditongo crescente acentuado?",
    options: ["Fácil", "Pérola", "Série", "Análise", "Saída"],
    answer: 4,
    explanation: "'Saída' tem o ditongo crescente 'aí' acentuado."
  },

{
    q: "Qual palavra está acentuada corretamente?",
    options: ["Ideia", "Jurei", "Saúde", "Heroico", "Voce"],
    answer: 2,
    explanation: "'Saúde' é palavra paroxítona terminada em ditongo e leva acento."
  },
  {
    q: "Em qual palavra o acento foi removido pela reforma ortográfica?",
    options: ["Enxágue", "Feiúra", "Café", "País", "Hífen"],
    answer: 1,
    explanation: "'Feiúra' perdeu o acento indicativo de hiato após a reforma."
  },
  {
    q: "Qual das palavras abaixo é uma oxítona terminada em 'i' que leva acento?",
    options: ["Abaí", "Iguai", "Piauí", "Ubirai", "Acaí"],
    answer: 2,
    explanation: "'Piauí' é oxítona terminada em 'i' e leva acento."
  },
  {
    q: "Qual palavra tem o acento para indicar a pronúncia correta do hiato?",
    options: ["Saida", "Matriz", "País", "Alface", "Paraiso"],
    answer: 2,
    explanation: "'País' tem hiato marcado pelo acento."
  },
  {
    q: "Qual palavra não deve ser acentuada de acordo com a reforma ortográfica?",
    options: ["Voo", "Pôde", "Mágico", "Pé", "Jovem"],
    answer: 0,
    explanation: "'Voo' perdeu o acento indicativo de hiato."
  },
  {
    q: "Assinale a alternativa em que todas as palavras estão acentuadas corretamente:",
    options: ["Úmido, Ânimo, Tórax", "Heroico, Feiura, Enxágue", "Hifen, Voo, Paraíso", "Fácil, Juíz, Páis", "Análise, Goía, Hífen"],
    answer: 0,
    explanation: "'Úmido', 'Ânimo' e 'Tórax' estão corretas quanto à acentuação."
  },
  {
    q: "Qual palavra apresenta a acentuação correta segundo a norma padrão?",
    options: ["Têxtil", "Pônei", "Heroi", "Guia", "Feiura"],
    answer: 0,
    explanation: "'Têxtil' é paroxítona terminada em 'l' e leva acento."
  },
  {
    q: "Qual palavra apresenta um encontro vocálico com acento no segundo elemento?",
    options: ["Saída", "Feiúra", "Jóia", "Guia", "Heróico"],
    answer: 0,
    explanation: "'Saída' tem o hiato 'aí' com acento no segundo elemento."
  },
  {
    q: "Em qual palavra o acento indica diferença semântica (tilt)?",
    options: ["Pára / Para", "Péla / Pela", "Pólo / Polo", "Lêem / Leem", "Pôr / Por"],
    answer: 4,
    explanation: "'Pôr' (verbo) e 'por' (preposição) diferenciam-se pelo acento."
  },
  {
    q: "Qual das palavras não leva mais o trema, segundo a reforma ortográfica?",
    options: ["Linguiça", "Minguem", "Queremos", "Cegonha", "Tranquilo"],
    answer: 0,
    explanation: "O trema foi abolido em palavras de origem portuguesa como 'linguiça'."
  },
  {
    q: "Qual palavra tem a tonicidade marcada pela ausência de acento, apesar do hiato?",
    options: ["Feiura", "Bocaiuva", "Heroico", "Paraguai", "Enxágue"],
    answer: 2,
    explanation: "'Heroico' perdeu o acento que indicava hiato."
  },
  {
    q: "Qual palavra é acentuada por ser proparoxítona?",
    options: ["Câncer", "Máximo", "Árvore", "Lógica", "Público"],
    answer: 1,
    explanation: "'Máximo' é proparoxítona e leva acento."
  },
  {
    q: "Qual palavra apresenta acento para marcar o hiato formado por vogais iguais?",
    options: ["Saída", "Feiúra", "Juízo", "Poça", "Coelho"],
    answer: 2,
    explanation: "'Juízo' tem hiato com vogais diferentes, acentuado para marcar a tonicidade."
  },
  {
    q: "Assinale a alternativa em que o acento é usado para indicar pluralização errada:",
    options: ["Anéis", "Papéis", "Jornais", "Cafés", "Bônus"],
    answer: 4,
    explanation: "'Bônus' é singular e plural, não usa acento para plural."
  },
  {
    q: "Qual palavra apresenta o uso correto do acento indicativo de crase?",
    options: ["Àquele", "Aquele", "Àquele", "Aquêle", "Aquelê"],
    answer: 0,
    explanation: "A crase é indicada com acento grave em 'àquele'."
  }
  
];
