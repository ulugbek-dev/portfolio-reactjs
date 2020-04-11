import React from 'react';
import { useHistory } from 'react-router';

export default function LazyLink({ to, delay, children }) {
    const history = useHistory();
    
    const handleClick = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            history.push(to);
        }, delay ? delay : 0);
    }
    
    return (
        <a href={to} onClick={e => handleClick(e)}>
            {children}
        </a>
    );
}