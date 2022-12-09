import './App.css'
import Palette from './Palette'

function Home() {
	const favorites = window.localStorage.getItem('favorites')
	let palettes = []
	if (favorites != null) {
		palettes = JSON.parse(favorites)
	}

  return (
    <div className="Home">
      <h1>Create your own palette !</h1>
			<div className='new-palette'>
				<h2>Generate new palette</h2>
				<div>
					+
				</div>
			</div>
			<div className='home-palette'>
				<h2>My Palettes</h2>
				<div>
					{Object.entries(palettes).map(([key, value]) => (
						<Palette key={key} name={value.name} colors={value.palette}/>
					))}
				</div>
			</div>
    </div>
  )
}

export default Home