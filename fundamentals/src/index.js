import { OpenAI } from 'openai';

// Create an instance of the OpenAI class
const openai = new OpenAI(process.env.OPENAI_API_KEY);

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

main();