import React from 'react';
import { Header } from './../styled/Header';
import Navbar from './../components/include/Navbar';
import { useSelector } from 'react-redux';

export default function Home() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <Header dark={darkMode ? true : false}>
            <Navbar />
        </Header>
    )
}