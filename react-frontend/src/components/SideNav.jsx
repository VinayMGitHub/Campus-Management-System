import './SideNav.css';
import { useState, useEffect } from 'react';

// Define navigation items dynamically
const navItems = [
    { label: 'Amazon', link: 'https://www.amazon.in/' },
    { label: 'Flipkart', link: 'https://www.flipkart.com/' },
    { label: 'Teacher', link: '/teacher' },
    { label: 'Student', link: '/student' }
];

function SideNav() {
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        // Logic to toggle sidebar visibility
        const handleResize = () => {
            setShowSidebar(window.innerWidth > 768); // Example: Show sidebar on wider screens
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            {navItems.map((item, index) => (
                <div key={index}>
                    <h1 className="side-nav-text">
                        <a href={item.link}>{item.label}</a>
                    </h1>
                    {index < navItems.length - 1 && (
                        <hr className={`side-nav-text-separator ${showSidebar ? 'visible' : ''}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default SideNav;
