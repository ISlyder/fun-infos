const openai = require('openai');
openai.apiKey = "your_api_key";

const prompt = 'What is the weather today?';
openai.Completion.create({
    prompt: prompt,
    model: "text-davinci-002",
    temperature: 0.5
}).then(completion => {
    console.log(completion.choices[0].text);
});