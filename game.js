
function guessNumber() {

  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let userNumber;
  let counter = 1;
  alert("Попрбуйте угадать случайное число от 1 до 100");
  do {
      
      userNumber = Number(prompt('Введите любое число от 1 до 100'));
      console.log(userNumber);
      counter++;

      if (userNumber > randomNumber) {
          alert(`Ваше число больше чем загадано. Попробуйте ещё`);

      } else if (userNumber < randomNumber) {
          alert(`Ваше число меньше чем загадано. Попробуйте ещё`);

      } else {
          alert(`Вы угадали. Спасибо за игру!`);
          // alert(`Загаданное число: ${randomNumber}`);

      }

  } while (userNumber !== randomNumber);

}  

function turnOver() {
    const userInput = prompt("Введите текст, а мы его перевернем :=):");
    if (userInput !== null) {
        const reversedText = userInput.split('').reverse().join('');
        alert(`Перевернутый текст: ${reversedText}`);
    } else {
        alert("Вы не ввели текст!");
    }
}

function gameQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(`${question.question}\n${question.options.join('\n')}`);
        if (parseInt(userAnswer) === question.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
}