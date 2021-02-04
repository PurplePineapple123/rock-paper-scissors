
            let computerScore = 0;
            let playerScore = 0;
            let i = 0;

            function computerPlay() {

                const computerOptions = [`rock`, `paper`, `scissors`]
                let randomAnswer = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                return randomAnswer;
            }

            // need to convert this method to take input from people. For now we're getting the logic of 2 comoputers playing against each other. 

            function playerPlay() {

                const computerOptions = [`Rock`, `Paper`, `Scissors`]

               // let randomAnswer = prompt(`Enter rock, paper, or scissors:`);
                return randomAnswer.toLowerCase();
            }

            function playRound(playerSelection, computerSelection) {
               
                if (playerSelection === computerSelection) {
                    return `You tied this round!`;
                    
                }   else if (playerSelection === `rock` && computerSelection === `scissors`) {
                    playerScore++;   
                    return `You win! Rock beats Scissors`;

                }   else if (playerSelection === `scissors` && computerSelection === `rock`) {
                    computerScore++;   
                    return `You lose! Rock beats Scissors`;
                

                }   else if (playerSelection === `paper` && computerSelection === `scissors`) {
                    computerScore++;   
                    return `You lose! Scissors beats paper`;
                

                }   else if (playerSelection === `scissors` && computerSelection === `paper`) {
                    playerScore++;     
                    return `You win! Scissors beats Paper`;
                }
                
                else if (playerSelection === `rock` && computerSelection === `paper`) {
                    computerScore++;   
                    return `You lose! Paper beats Rock`;
                }


                else if (playerSelection === `paper` && computerSelection === `rock`) {
                    playerScore++;   
                    return `You win! Paper beats Rock`;
                }
            }

            

            function play() {
                    playRound();
                    i++;
                    console.log(playRound(playerPlay(), computerPlay()));
                    console.log(`Computer score: ${computerScore}`);
                    console.log(`Your score: ${playerScore}`);

                    if (i !==3) {
                        play();

                    } else {
                    console.log(`GAME OVER`);
                    }
                }

            
        play();

