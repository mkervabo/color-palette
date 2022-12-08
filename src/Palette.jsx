import './App.css'

function Palette(props) {
  return (
    <div className="Palette">
			<div className='colors'>
			{Object.entries(props.colors).map(([key, value]) => (
        <div key={key} style={{ backgroundColor: value }}></div>
      ))}
			</div>
			<div className='name'>
				<h3>{props.name}</h3>
			</div>
    </div>
  )
}

export default Palette