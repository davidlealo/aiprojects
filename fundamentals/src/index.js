import { OpenAI } from 'openai';

// Create an instance of the OpenAI class
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const main = async () => {
    // Define the prompt
    const prompt = 'How big is Santiago, Chile?';
    
    // Send the request to the OpenAI API
    const response = await openai.chat.completion.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.',
            },
            {
                role: 'user',
                content: prompt,
            },
        ],
    });
    
};