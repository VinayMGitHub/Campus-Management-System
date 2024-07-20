import './SideNav.css';
import { useState } from 'react';

// Define navigation items dynamically
const navItems = [
    { label: 'Amazon', link: 'https://www.amazon.in/' },
    { label: 'Flipkart', link: 'https://www.flipkart.com/' },
    { label: 'Teacher', link: '/teacher' },
    { label: 'Student', link: '/student' }
];

function SideNav() {
    return (
        <div className="sidebar">
            {navItems.map((item, index) => (
                <div key={index}>
                    <h1 className="side-nav-text">
                        <a href={item.link}>{item.label}</a>
                    </h1>
                    {index < navItems.length - 1 && (
                        <hr className="side-nav-text-separator" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default SideNav;
