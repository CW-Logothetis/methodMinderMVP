import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OpenAI from 'openai';
import { arrayMethods } from '../lib/arrayMethods'; // Adjust path as needed

function ArrayMethodPage() {
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true
    })
    const params  = useParams();
    const arrayMethodID = Object.values(params)
    console.log(arrayMethodID)
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const prompt = `
            Create three paragraph sections, with the headings for each section in uppercase. 
            First, under the EXPLANATION heading, explain "array.Prototype.${ arrayMethodID }()". 
            Then, under the SYNTAX heading, provide the syntax. Finally, under the EXAMPLES heading, give two examples.`;

        async function fetchCompletion() {
            try {
                const response = await openai.chat.completions.create({
                    max_tokens: 500,
                    temperature: 0.7, // Controls the randomness of the output
                    messages: [
                        {
                            "role": "system",
                            "content": "You are teacher and educator, specialising in teaching beginners about modern JavaScript."
                        },
                        {"role": "user", "content": prompt}
                    ],
                    model: 'gpt-3.5-turbo-1106'
                });
                console.log(response.choices[0].message.content);
                setOutput(response.choices[0].message.content);
            } catch (error) {
                console.error('Error fetching completion:', error);
                setOutput('ERROR')
            }
            setLoading(false);  // Set loading to false regardless of success or error
        }
        // Make sure that your OpenAI calls are made only once per change of the array method
        if (output === null) {
            fetchCompletion().catch(error => {
                console.error('Error fetching promise:', error);
            });
        }
    }, [arrayMethodID]); // Depend on array_method instead




    // Utility function
    function styleHeadings(rawContent) {
        let newOutput
        const explanationOutput = output.replace("EXPLANATION", "<div style='margin-bottom: 0.5rem; font-weight: 600'>EXPLANATION</div>");
        const syntaxOutput = explanationOutput.replace("SYNTAX", "<div style='margin: 20px 0 0.5rem; font-weight: 600'>SYNTAX</div>")
        newOutput = syntaxOutput.replace("EXAMPLES", "<div style='margin: 20px 0 0.5rem; font-weight: 600'>EXAMPLES</div>")
        return newOutput;
    }

    return (
        <section>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: styleHeadings(output) }} />
            )}
        </section>
    );
}

export default ArrayMethodPage;