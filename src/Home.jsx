import './App.css'
import Palette from './Palette'

function Home() {
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
					<Palette name="Palette Name" colors={['#D8BFD9', '#BFD3D9', '#BFD9C7', '#CC767B', '#AC767B' ]}/>
					<Palette name="Palette Name 2" colors={['#FFD275', '#E8AE68', '#A57F60', '#E3A587', '#DB5A42' ]}/>
					<Palette name="Palette Name 3" colors={['#A1E8AF', '#94C595', '#747C92', '#372772' ]}/>
				</div>
			</div>
    </div>
  )
}

export default Home