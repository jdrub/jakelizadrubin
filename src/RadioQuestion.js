import React from 'react';
import styled from 'styled-components';

export default ({
    question,
    name,
    answers,
    className,
}) => (
    <div className={className}>
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
    </div>
);

const RadioQuestion = styled.div`
    font-size: 20px;
`;

const RadioAnswer = styled.div`
    width: 100%;
`;

const RadioLabel = styled.label`
    font-size: 20px;
`;

const RadioInput = styled.input`
`;
