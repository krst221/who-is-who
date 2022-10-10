const questionsType = [
    {
      title: "Gender",
      key: "gender",
      questions: ["Man", "Woman"],
    },
    {
      title: "Hair Color",
      key: "hairColor",
      questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
      title: "Moustache",
      key: "moustache",
      questions: ["Yes", "No"],
    },
    {
      title: "Glasses",
      key: "glasses",
      questions: ["Yes", "No"],
    },
    {
      title: "Hat or Cap",
      key: "hatOrCap",
      questions: ["Yes", "No"],
    },
    {
      title: "Clothes color",
      key: "clothesColor",
      questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
      title: "Skin color",
      key: "skinColor",
      questions: ["Light", "Dark"],
    },
    {
      title: "Long Hair",
      key: "longHair",
      questions: ["Yes", "No"],
    },
  ];
  
  const persons = [
    {
      img: "assets/img/001-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/002-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/003-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/004-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/005-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/006-man.svg",
      gender: "Man",
      hairColor: "Brown",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/007-man.svg",
      gender: "Man",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/008-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/009-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/010-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/011-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/012-woman.svg",
      gender: "Woman",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/013-woman.svg",
      gender: "Woman",
      hairColor: "White",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/014-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/015-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/016-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/017-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/018-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/019-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/020-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/021-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/022-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/023-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/024-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/025-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/026-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/027-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/028-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/029-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/030-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "assets/img/031-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/032-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/033-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/034-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "assets/img/035-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/036-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/037-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/038-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/039-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/040-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/041-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/042-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/043-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "assets/img/044-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "assets/img/045-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
  ];

const board$$ = document.querySelector('[data-function="boardGame"]');
const questions$$ = document.querySelector('[data-function="questions"]');
const clueCount$$ = document.querySelector('[data-function="clueCount"]');
let persons$$ = [];
let selectedPerson = 0;
let gameOver = false;
startGame = () => {
    persons$$ = [];
    gameOver = false;
    clueCount$$.textContent = 0;
    selectPerson();
    removeBoard();
    removeQuestions();
    createBoard();
    createQuestions();
}

selectPerson = () => selectedPerson = Math.floor(Math.random() * persons.length);

createBoard = () => {
    for (let i = 0 ; i < persons.length ; i++) {
        const img$$ = document.createElement('img');
        img$$.addEventListener('click', () => checkWinner (i));
        img$$.src = persons[i].img;
        persons$$.push(img$$);
        board$$.appendChild(img$$);
    }
}

createQuestions = () => {
    for (const question of questionsType) {
        divquestions$$ = document.createElement('div');
        title$$ = document.createElement('h2');
        title$$.textContent = question.title;
        divquestions$$.appendChild(title$$);
        for (let i = 0 ; i < question.questions.length ; i++) {
            const option$$ = document.createElement('button');
            option$$.textContent = question.questions[i];
            option$$.addEventListener('click', () => {
                filterPersons(question.key, question.questions[i]);
                dimElement(option$$);
            });
            divquestions$$.appendChild(option$$);
        }
        questions$$.appendChild(divquestions$$);
    }
}

filterPersons = (key, attribute) => {
        const winner = persons[selectedPerson];
        clueCount$$.textContent++;
        for (let i = 0 ; i < persons.length ; i++) {
            if(((winner[key] !== attribute) && (persons[i][key] === attribute)) || ((winner[key] === attribute) && (persons[i][key] !== attribute))) dimElement(persons$$[i]);
        }
}

dimElement = (element) => {
    element.style.opacity = '0.2';
    element.style.pointerEvents = 'none';
}

gameIsOver = () => {
    alert('OH NO! YOU LOST!');
    gameOver = true;
    startGame();
}

removeBoard = () => {
    board$$.innerHTML = ``; 
}
removeQuestions = () => {
    questions$$.innerHTML = ``;
}

checkWinner = (i) => {
    if(!gameOver) {
        if(i === selectedPerson) {
            alert('CONGRATULATIONS! YOU WON THE GAME WITH ' + clueCount$$.textContent + ' CLUES!');
            startGame();
        }
        else gameIsOver();
    }
}


startGame();