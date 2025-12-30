import { useState } from 'react';
import { cheatsheetData } from '../data/cheatsheets';
import './Cheatsheets.css';

const Cheatsheets = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(cheatsheetData)[0]); // Default to first key (Python)

    return (
        <div className="cheatsheets-container">
            <div className="cheatsheets-sidebar">
                <h3>Languages</h3>
                <ul>
                    {Object.keys(cheatsheetData).map((lang) => (
                        <li
                            key={lang}
                            className={activeTab === lang ? 'active' : ''}
                            onClick={() => setActiveTab(lang)}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cheatsheets-content">
                <h2>{activeTab} Cheatsheet</h2>
                <div className="cheatsheet-grid">
                    {cheatsheetData[activeTab].map((item, index) => (
                        <div key={index} className="cheatsheet-card">
                            <h3>{item.topic}</h3>
                            <pre>
                                <code>{item.code}</code>
                            </pre>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cheatsheets;
