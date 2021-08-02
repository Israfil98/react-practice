import React from 'react';

import './App.css';

import Rating from './Rating/Rating';
import Accordion from './Accordion/Accordion';


function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title='This is App component'/>
            <PageTitle title='BLa bla'/>
            <Rating value={ 3 }/>
            <Accordion title='Steaks' collapsed={ true }/>
            <Rating value={ 5 }/>
            <Accordion title='Burgers' collapsed={ false }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendered')
    return (
        <h1>{ props.title }</h1>
    )
}

export default App;