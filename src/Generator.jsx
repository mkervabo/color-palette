import './App.css'
import randomHex from 'random-hex'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export async function loader({ params }) {
  return getContact(params.contactId);
}

const getColors = (params) => {
	let colors = []
	if ( params.colors != null) {
		let param = '#' + params.colors
		param = param.replaceAll('-', '-#')
		colors = param.split('-')
	}
	return colors
}

function Generator() {
	const navigate = useNavigate()
	const params = useParams()
	const [colors, setColors] = useState(getColors(params))
	
	const addNewColor = () => {
		const color = randomHex.generate()
		randomHex.generate()
		const newRoute = "/palettes/" + params.colors + '-' + color.slice(1)
		navigate(newRoute)
		setColors([...colors, color])
	}

	const addToFavorite = () => {
		let favorites  = window.localStorage.getItem('favorites')
		if (favorites != null) {
			favorites = [...JSON.parse(favorites), { name: 'palette name', palette: colors}]
		}
		else 
			favorites = [{ name: 'palette name', palette: colors}]
		window.localStorage.setItem('favorites', JSON.stringify(favorites))
	}

	useEffect(() => {
		if (params.colors == null) {
			const color = randomHex.generate()
			setColors([color])
			const newRoute = "/palettes/" + color.slice(1)
    	navigate(newRoute)
		}
  }, [navigate, params, setColors])
  return (
    <div className="Generator">
			<div className="Favorite" onClick={() => addToFavorite()}>Save</div>
			<div className='Colors'>
				{Object.entries(colors).map(([key, value]) => (
					<div className="Color" key={key} style={{ backgroundColor: value }}>
						<div>{value}</div>
					</div>
				))}
			</div>
			<div className='NewColor' onClick={() => addNewColor()}>
				<div>
						+
				</div>
			</div>
    </div>
  )
}

export default Generator