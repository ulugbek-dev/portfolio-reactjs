import React, { useState, useEffect } from 'react';
import { MyName } from './../styled/MyName';

export default function Name({ name }) {
    const nameArr = name.split('');
    const [anim, setAnim] = useState(false); 

    useEffect(() => {
        if(anim)
            setTimeout(() => { setAnim(!anim) }, 7000);
        else
            setAnim(!anim);
    }, [anim])

    return (
        <MyName>
            {anim && nameArr.map((x, i) => x === ' ' ? <span className="space">{x}</span> : <span>{x}</span>)}
        </MyName>
    );
}