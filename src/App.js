import React from 'react';
import Tabs from './components/Tabs';

function App() {
    const tabs = [
        { label: 'Tab 1', content: 'Tab 1 content is showing here.' },
        { label: 'Tab 2', content: 'Tab 2 content is showing here.' },
        { label: 'Tab 3', content: 'Tab 3 content is showing here.' },
    ];

    return (
        <div className="App">
            <h1>Tabs Component</h1>
            <Tabs items={tabs} />
        </div>
    );
}

export default App;
