
const key = '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';

const getChatResponse = async () =>{
    const key = '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';
    var topic = document.querySelector('.input');
    var number = document.querySelector('.number');
    var type = document.querySelector('.type');
    var answers = document.querySelector('.answers');
    var questions =document.querySelector('.questions');
    var input = "Give me" + number.value +" "+ type.value + " questions from topic "+topic.value + " "+answers.value ;
const API_URL ="https://api.openai.com/v1/chat/completions";


const requestOptions  = {
method: "POST",
headers : {
"Content-Type":"application/json",
"Authorization":`Bearer ${key}`

},
body: JSON.stringify({

"model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": input }],
     "temperature": 0.2
})
}
try{
const output = await(await fetch(API_URL,requestOptions)).json();
console.log(output);
const newQtext = output.choices[0].message.content;
questions.innerHTML = newQtext;}
catch(error){
console.log(error);
}
}
document.querySelector(".quizme").addEventListener("click",getChatResponse);

