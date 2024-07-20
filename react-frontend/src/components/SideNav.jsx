import './SideNav.css';

function SideNav() {
    return (
        <div className="sidebar">
            <h1 className="side-nav-text">
                <a href="https://www.amazon.in/">Amazon</a>
            </h1>
            {/* <hr style = {hrStyle}/> */}
            <hr className='side-nav-text-separator'/>
            <hr className='side-nav-text-separator'/>
            <h1 className="side-nav-text">
                <a href="https://www.flipkart.com/">Flipkart</a>
            </h1>
            <hr className='side-nav-text-separator'/>
            <hr className='side-nav-text-separator'/>
            <h1 className="side-nav-text">
                <a href="/teacher">Teacher</a>
            </h1>
            <hr className='side-nav-text-separator'/>
            <hr className='side-nav-text-separator'/>
            <h1 className="side-nav-text">
                <a href="/student">Student</a>
            </h1>
            {/* Add more content here as needed */}
        </div>
    );
}

export default SideNav;
