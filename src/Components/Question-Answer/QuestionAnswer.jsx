import React from 'react';
import './Question-answer.css'

const QuestionAnswer = () => {
    return (
        <div className='QnA'>
            <h2>When should you use context api?</h2>
            <p>Answer : Context is primarily used when some data needs to be accessible by many 
                components at different nesting levels. <br></br>
                Apply it sparingly because it makes component reuse more difficult.</p>
            <h2>What is a custom hook?</h2>
            <p>Answer : Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions.
                 It allows you to reuse some piece of code in several parts of your app.<br></br>
                 When we want to share the logic between other components, we can extract it to a separate function. </p>
            <h2>What is useRef?</h2>
            <p>Answer : The useRef Hook is a function that returns a mutable ref object whose 
                current property is initialized with the passed argument (initialValue). 
                The returned object will persist for the full lifetime of the component.</p>
            <h2>What is useMemo?</h2>
            <p>Answer : The useMemo is a hook used in the functional component of react that returns a memoized value.
            A memoized function remembers the results of output for a given set of inputs.
            </p>
        </div>
    );
};

export default QuestionAnswer;