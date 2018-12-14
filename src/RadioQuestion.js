import React from 'react';
import styled from 'styled-components';

export default ({
    question,
    name,
    answers,
}) => (
    <>
        <RadioQuestion>
            {question}
        </RadioQuestion>
        {
            answers.map(a => (
                <RadioAnswer key={a}>
                    <RadioInput
                        type="radio"
                        name={name}
                        id={`${name}-${a}`}
                        value={a}
                        />
                    <RadioLabel for={`${name}-${a}`}>
                        {a}
                    </RadioLabel>
                </RadioAnswer>
            ))
        }
    </>
);

const RadioQuestion = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`;

const RadioAnswer = styled.div`
    width: 100%;
`;

const RadioLabel = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`;

const RadioInput = styled.input`
`;