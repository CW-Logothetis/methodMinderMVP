export function styleHeadings(output) {
    let newOutput
    const explanationOutput = output.replace("EXPLANATION", "<div style='margin-bottom: 0.5rem; font-weight: 600'>EXPLANATION</div>");
    const syntaxOutput = explanationOutput.replace("SYNTAX", "<div style='margin: 3rem 0 0.5rem; font-weight: 600'>SYNTAX</div>")
    const examplesOutput = syntaxOutput.replace("EXAMPLES", "<div style='margin: 3rem 0 0.5rem; font-weight: 600'>EXAMPLES</div>")
    newOutput = examplesOutput.replace("EXERCISES", "<div style='margin: 3rem 0 0.5rem; font-weight: 600'>EXERCISES</div>")
    return formatCodeBlocks(newOutput);
}

function formatCodeBlocks(text) {
    // Replace triple backticks with <pre><code>...</code></pre>
    text = text.replace(/```([\s\S]+?)```/g, '<pre>$1</pre>');

    // Replace single backticks with <code>...</code>
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    text = text.replace(/(```\s*)javascript/ig, '$1');

    return text;
}


