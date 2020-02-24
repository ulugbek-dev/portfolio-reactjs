import React, { useState, useEffect } from 'react';
import { MyName } from './../styled/MyName';

export default function Name({ name }) {
    const nameArr = name.split('');
    const [anim, setAnim] = useState(true); 

    useEffect(() => {
        const animation = setTimeout(() => { 
            if(anim)
                setAnim(!anim);
            setAnim(true);
        }, 6000);

        return () => {
            clearTimeout(animation)
        }
    })

    return (
        <MyName>
            {anim && nameArr.map((x, i) => x === ' ' ? <span className="space">{x}</span> : <span>{x}</span>)}
        </MyName>
    );
}