# 🇧🇷 Simulado de Acentuação Gráfica (PWA)  
# 🇺🇸 Accentuation Quiz (PWA)

## 📱 O que é uma PWA?  
Uma **PWA (Progressive Web App)** é uma aplicação web que pode ser instalada no celular ou computador, funcionando como um aplicativo nativo. Depois de carregada uma vez, pode ser usada mesmo **offline**. Ela é rápida, responsiva e funciona em qualquer navegador moderno.

## 📄 Estrutura dos Arquivos

| Arquivo               | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| `index.html`          | Página principal da aplicação. Estrutura o conteúdo mostrado ao usuário. |
| `style.css`           | Estilo visual da aplicação (cores, fontes, botões, etc.).                |
| `script.js`           | Lógica principal do quiz: navegação, acertos, timer, regras, etc.         |
| `questions.js`        | Arquivo com todas as perguntas e respostas do simulado. Deve ser editado para adicionar novas questões. |
| `manifest.json`       | Define ícone, nome e comportamento ao instalar no celular.                |
| `service-worker.js`   | Controla o cache dos arquivos para funcionamento offline.                 |

## ✍️ Como adicionar novas questões?

As questões estão no arquivo `questions.js`, no seguinte formato:

```js
{
  q: "Qual é a forma correta?",
  options: ["ideia", "idéia", "idéiaa", "idea"],
  answer: 0,
  explanation: "Após a reforma ortográfica, 'ideia' perdeu o acento."
}

