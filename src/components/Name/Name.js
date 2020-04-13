import React, { useState, useEffect } from 'react';
import { NameStyled } from './styled';

export default function Name({ name }) {
    
    const [anim, setAnim] = useState(true); 
    const nameArr = name.split('').map((x, i) => x === ' ' 
        ? <span className="space" key={i}>{x}</span> 
        : <span key={i}>{x}</span>);

    useEffect(() => {
        const animation = setTimeout(() => { 
            if(anim)
                setAnim(!anim);
            setAnim(true);
        }, 5000);

        return () => {
            clearTimeout(animation)
        }
    })

    return (
        <NameStyled>
            {anim && nameArr}
        </NameStyled>
    );
}