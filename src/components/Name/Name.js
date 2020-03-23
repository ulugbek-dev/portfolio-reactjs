import React, { useState, useEffect } from 'react';
import { NameStyled } from './styled';

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
        <NameStyled>
            {anim && nameArr.map((x, i) => x === ' ' ? <span className="space" key={i}>{x}</span> : <span key={i}>{x}</span>)}
        </NameStyled>
    );
}