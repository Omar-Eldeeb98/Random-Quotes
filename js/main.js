var qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    name: "― Oscar Wilde",
  },
  {
    qoute:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    name: "― Marilyn Monroe",
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name: "― Albert Einstein",
  },
  {
    qoute: "“So many books, so little time.”",
    name: "― Frank Zappa",
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    name: "― Marcus Tullius Cicero",
  },
  {
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name: "― Bernard M. Baruch",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    name: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    name: "― Mahatma Gandhi",
  },
  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    name: "― Robert Frost",
  },
  {
    qoute:
      "“It does not do to dwell on dreams and forget to live.”",
    name: "― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
  {
    qoute:
      "““As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
    name: "― John Green, The Fault in Our Stars",
  },
  {
    qoute:
      "“We are all in the gutter, but some of us are looking at the stars.”",
    name: "― Oscar Wilde, Lady Windermere's Fan",
  },
];

var perviousRandom = null;

function getRandomQoutes() {
  do {
    var randomQoutes;
    randomQoutes = Math.floor(Math.random() * qoutes.length);
  } while (randomQoutes === perviousRandom);
  perviousRandom = randomQoutes;

  document.getElementById("quote_").innerHTML = qoutes[randomQoutes].qoute;
  document.getElementById("writter").innerHTML = qoutes[randomQoutes].name;
}
