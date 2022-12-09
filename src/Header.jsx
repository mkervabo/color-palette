import './App.css'
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
			<div className='Logo'>
				Logo
			</div>
      <div className="Menu">
				<Link to={``}>Home</Link>
				<Link to={`palettes`}>Palette Generator</Link>
				<Link to={``}>My Palettes</Link>
			</div>
    </header>
  )
}

export default Header