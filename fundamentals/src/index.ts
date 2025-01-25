import { OpenAI } from 'openai'; // Ensure you have the correct import

// Ensure the API key is defined
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined');
}

// Create an instance of the OpenAI class with the API key
const openai = new OpenAI({ apiKey });

const main = async () => {
    // Define the prompt
    const prompt = 'How big is Santiago, Chile?';
    
    // Send the request to the OpenAI API
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: prompt,
            },
        ],
    });

    // Print the response
    console.log(response.choices[0].message.content);
};

main().catch(console.error);