const quiz = [
  {
    question: 'FCバルセロナの10番と言えば？',
    answers: [
      'クリスティアーノロナウド',
      'ネイマール',
      '本田圭佑',
      'メッシ'
    ],
    correct: 'メッシ'
  }, {
    question: '今年メッシが移籍したチームは？',
    answers: [
      '鹿島アントラーズ',
      'レアルマドリード',
      'パリサンジェルマン',
      'マンチェスターユナイテッド'
    ],
    correct: 'パリサンジェルマン'
  }, {
    question: 'メッシの身長は何センチ？',
    answers: [
      '181センチ',
      '170センチ',
      '154センチ',
      '161センチ'
    ],
    correct: '170センチ'
  }
];
const quizLength = quiz.length;
let quizIndex =0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

quizIndex++;

if(quizIndex < quizLength){
  //問題数がまだあればこちらを実行
  setupQuiz();
}　else {
  //問題数がもうなければこちらを実行
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
}

};

//ボタンを押したら正解判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
