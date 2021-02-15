let message1 = document.getElementById('question-container');
message1.innerHTML = "Hello, what's your name?:";

let userName = document.getElementById('user-name');

let messageContainer = document.getElementById('message-container');

let btn = document.getElementById('btn');
btn.addEventListener('click', displayMessage);

function displayMessage() {
  messageContainer.innerHTML = `${userName.value}, life is beautiful!  Have a great day!!`;

  let moreMessage = function() {
    let message2 = document.createElement('p');
    messageContainer.append(message2);
    message2.innerHTML = `Wait ${userName.value} , you want me to cheer you up?<BR>
    No problem!<br>`;
  };
  let oneMoreMessage = function() {
    let message3 = document.createElement('p');
    messageContainer.append(message3);
    message3.innerHTML = `YOU ARE DOING GREAT!<br>  kEEP GOING :)`;
  };

  setTimeout(moreMessage, 2500);
  setTimeout(oneMoreMessage, 6000);
  
  let stopMessage = function() {
    clearInterval(setTimeout(oneMoreMessage));
  };
  stopMessage();

}