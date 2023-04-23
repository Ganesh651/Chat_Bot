let chatBotContainer = document.getElementById("chatBotContainer");
chatBotContainer.classList.add("p-5");
let chatBotHeading = document.createElement("h1");
chatBotHeading.textContent = "Meet Our Chatbot";
chatBotHeading.classList.add("text-center","mainheading");
chatBotContainer.appendChild(chatBotHeading);

let botImage = document.createElement("img");
botImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png";
botImage.classList.add("bot-image");
chatBotContainer.appendChild(botImage);

let botContainer = document.createElement("div");
botContainer.classList.add("p-2")
chatBotContainer.appendChild(botContainer);

let imgContainer = document.createElement("div");
imgContainer.classList.add("d-flex","flex-row","justify-content-end");
chatBotContainer.appendChild(imgContainer);

let humanImage = document.createElement("img");
humanImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png";
humanImage.classList.add("human-image");
imgContainer.appendChild(humanImage);

let inputAndButtonContainer = document.createElement("div");
inputAndButtonContainer.classList.add("d-flex","flex-row","fixed-bottom","pl-5","pr-5");
chatBotContainer.appendChild(inputAndButtonContainer);

let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.placeholder = "Type Your Message"
inputEl.classList.add("user-input");
inputAndButtonContainer.appendChild(inputEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("send-btn")
inputAndButtonContainer.appendChild(buttonEl);

let iconEl = document.createElement("i");
iconEl.classList.add("fas", "fa-paper-plane");
buttonEl.appendChild(iconEl);

let chatbotMsgList = ["Hi Welcome!", "Hey", "Good Morning", "Good Evening", "How can I help you?", "What is your name?", "How are you?", "Thank You"];

buttonEl.onclick = (event)=>{
    if (inputEl.value === ""){
        alert("Write your message")
    }else if (event.key === "Enter"){
    let messageToContainer = document.createElement("div");
    messageToContainer.classList.add("msg-to-chatbot-container");
    botContainer.appendChild(messageToContainer);

    let messageTobot = document.createElement("span");
    messageTobot.classList.add("msg-to-chatbot");
    messageTobot.textContent = inputEl.value;
    messageToContainer.appendChild(messageTobot);

    let messageFromContainer = document.createElement("div");
    messageFromContainer.classList.add("msg-from-chatbot-container");
    botContainer.appendChild(messageFromContainer);

    let index = Math.ceil(Math.random()*chatbotMsgList.length);
    console.log(index)
    let messageFrombot = document.createElement("span");
    messageFrombot.classList.add("msg-from-chatbot");
    messageFrombot.textContent = chatbotMsgList[index-1];
    messageFromContainer.appendChild(messageFrombot);
    }
    else{
    let messageToContainer = document.createElement("div");
    messageToContainer.classList.add("msg-to-chatbot-container");
    botContainer.appendChild(messageToContainer);

    let messageTobot = document.createElement("span");
    messageTobot.classList.add("msg-to-chatbot");
    messageTobot.textContent = inputEl.value;
    messageToContainer.appendChild(messageTobot);

    let messageFromContainer = document.createElement("div");
    messageFromContainer.classList.add("msg-from-chatbot-container");
    botContainer.appendChild(messageFromContainer);

    let index = Math.ceil(Math.random()*chatbotMsgList.length);
    console.log(index)
    let messageFrombot = document.createElement("span");
    messageFrombot.classList.add("msg-from-chatbot");
    messageFrombot.textContent = chatbotMsgList[index];
    messageFromContainer.appendChild(messageFrombot);
    inputEl.value = "";

    }
}

