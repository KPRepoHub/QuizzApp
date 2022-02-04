/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

console.log("start of index.js");

window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  start.addEventListener("click", function (e) {

    //to do: use better window to display if have time
    alert("you have 1 minute to finish the quiz");

    //star timer
    //and display counter down

    let timeCounter = document.getElementById("#time");

    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: "Which is the third planet from the sun?",
      o: ["Saturn", "Earth", "Pluto", "Mars"],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: "Which is the largest ocean on Earth?",
      o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3,
    },
    {
      q: "What is the capital of Australia",
      o: ["Sydney", "Canberra", "Melbourne", "Perth"],
      a: 1,
    },
    {
      q: "What is Canada's capital",
      o: ["Montreal", "Ottawa", "Calgary", "Vancouver"],
      a: 1,
    },
    {
      q: "What is the capital of New Zealand",
      o: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
      a: 2,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector("#quizWrap");
    let quizDisplay = "";
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li  class="list-group-item mt-2" id="li_${index}_0">
                      <input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}
                    </li>
                    <li class="list-group-item" id="li_${index}_1">
                      <input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}
                    </li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {

    console.log("inside calculate Score");

    let score = 0;
    let totalScore = 5;

    quizArray.map((quizItem, index) => {

      //loop through 4 options
      for (let i = 0; i < 4; i++) {


        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;

        // console.log("li, ", li);

        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);

      
   
        // this is answer 
        if (quizItem.a == i) {
          //change background color of li element here
          console.log("answer radio: ", radioElement);
          // radioElement.style.backgroundColor = "rgba(255,255,255)";

          liElement.style.backgroundColor = "#eeffaa";

          // liElement.style.backgroundColor = "red";

        }

        if (radioElement.checked) {
          // code for task 1 goes here

          // console.log("i ", i, "quizItem.a ", quizItem.a);

          if (i == quizItem.a) {
            score++;
            console.log("correct answer selectioned ", score);
            console.log(quizItem.q);
          }
        }
      }

      console.log("final score ", score);

    });

    let scoreElement = document.getElementById("score");

    let scoreResult = `Your quiz score is <span style="color:blue; font-weight:bold"> ${score} of ${totalScore} </span>`;

    scoreElement.innerHTML = scoreResult;
  }; // end of calculateScore


  const resetButton = document.getElementById("btnReset");

    resetButton.addEventListener("click", (event) => {
      console.log("reset button click event");

      
      location.reload();

      resetPage();

      

    });
 


      const resetPage = () => {
        console.log("inside resetPage");

  

        quizArray.map((quizItem, index) => {
          //loop through 4 options
          for (let i = 0; i < 4; i++) {
            //highlight the li if it is the correct answer
            let li = `li_${index}_${i}`;
            let r = `radio_${index}_${i}`;

            // console.log("li, ", li);

            liElement = document.querySelector("#" + li);
            radioElement = document.querySelector("#" + r);
            
            liElement.style.backgroundColor = "";            
            radioElement.diable = true;

          
          }

          
        });

      
      }; 

  const submitButton = document.getElementById("btnSubmit");

  submitButton.addEventListener("click", (event) => {
    console.log("submit button click event");

    calculateScore();
  });

  // call the displayQuiz function
  displayQuiz();

  //remove later
  // document.querySelector("#quizBlock").style.display = "block";
  // start.style.display = "none";

  function displayTimeCounter(timeLengthInSeconds) {
    let timeCounter = document.getElementById("time");

    //convert to milliseconds
    let distance = timeLengthInSeconds * 1000;

    // let count = 0;

    //update every 1 second
    let intervalTimerVar = setInterval(() => {
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      console.log("distance ", distance);

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      timeCounter.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // update distance every 1 second as timer interval is 1 second
      distance -= 1000;

      // clear the interval once the time is up
      if (distance <= 0) {
        clearInterval(intervalTimerVar);

        //to do: use better window to display if have time
        alert("time is up!");

        calculateScore();

        timeCounter.innerHTML = "time is up";
      }
    }, 1000);
  }

  //set timer for the quiz
  displayTimeCounter(60);

  //star timer
  //and display counter down
});
