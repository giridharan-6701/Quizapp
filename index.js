(function(){
    function buildQuiz(){
      const output = [];
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
    
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1.Why did Mike and his family decide to rest under the thief’s tree ?",
        answers: {
          a: "Being a large family, they knew that they could easily defeat the thief",
          b: " It was a convenient spot for taking a halt at night",
          c: "There was a stream nearby and wood enough to build a house",
          d: "That was the only large tree that could shelter their large family"
        },
        correctAnswer: "b"
      },
      {
        question: "2.Which of the following best describes Morris ?",
        answers: {
          a: "He bullied his wife",
          b: "He paid his servants well",
          c: "He was greedy and imitated Mike",
          d: "He was a rich businessman"
          
        },
        correctAnswer: "c"
      },
      {
        question: "3.What did Mike mean when he said “He is watching all this from above”?",
        answers: {
          a: "He had spotted the thief and wanted to scare him",
          b: "He was telling his wife to have faith in god",
          c: "It was just a warning for his family members to stick together",
          d: "He was begging the thief to help his family"
        },
        correctAnswer: "b"
      },
      {
        question: "4.Why did the thief return to the tree?",
        answers: {
          a: "To wait for Mike to return",
          b: "To set up a trap",
          c: "To wait for Morris’s family",
          d: "Not mentioned in the passage"
        },
        correctAnswer: "d"
      },
      {
        question: "5.How did the fellow villagers react to Mike getting rich overnight?",
        answers: {
          a: "They were very excited",
          b: "They were jealous of him",
          c: "They followed his example",
          d: "They envied him"
        },
        correctAnswer: "a"
      }
      
    ];
    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
  })();
  