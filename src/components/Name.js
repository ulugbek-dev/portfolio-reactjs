import React from 'react';
import { MyName } from './../styled/MyName';

export default function Name({ name }) {
    const nameArr = name.split('');

    return (
        <MyName>
            {nameArr.map((x, i) => x === ' ' ? <span className="space">{x}</span> : <span>{x}</span>)}
        </MyName>
    );
}