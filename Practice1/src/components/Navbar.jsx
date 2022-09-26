import logo1 from '../asset/reactjs-icon.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo1} alt="" className='nav-icon'/>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Project 1</h4>
        </div>
    )
}