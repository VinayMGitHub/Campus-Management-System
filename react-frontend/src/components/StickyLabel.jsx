import React from 'react';
import './StickyLabel.css';

function StickyLabel({ toggleSidebar, isSidebarOpen }) {
    return (
        <div className="sticky-label">
            <button onClick={toggleSidebar}>
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
        </div>
    );
}

export default StickyLabel;
