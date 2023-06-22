const questAnswers = document.querySelectorAll(".quest-answ");

questAnswers.forEach((item) => {
    const question = item.querySelector('.quest');
    const answer = item.querySelector('.hidden-answer');
    const arrow = item.querySelector('.quest i');
    // console.log(question);
    question.addEventListener('click', () => {
        answer.classList.toggle('hide-me');
        arrow.classList.toggle('rotate-me');
        });
});

