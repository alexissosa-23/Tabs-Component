import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ items }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index, callback) => {
        setActiveTab(index);
        if (callback) {
            callback();
        }
    };

    return (
        <div className="tabs">
            <div className="tab-headers">
                {items.map((item, index) => (
                    <button 
                        key={index} 
                        className={`tab-header ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, item.callback)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {items[activeTab] && items[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
