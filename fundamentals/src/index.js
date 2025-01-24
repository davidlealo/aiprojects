import { OpenAI } from 'openai';

// Create an instance of the OpenAI class
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const main = async () => {
    // Define the prompt
    const prompt = 'How big is Santiago, Chile?';
    
    // Define the completion options
    const completionOptions = {
        model : 'text-davinci-002',
        max_tokens: 100
    };

    // Generate the completion
    const completion = await openai.complete(prompt, completionOptions);

    // Log the completion
    console.log(completion.choices[0].text);
};