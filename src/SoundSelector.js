import React from 'react'

export default class SoundSelector extends React.Component{

	state = {
		selectedSound: ""
	}

	render(){

		return(
			<div> 
				<select onChange={(e) => {
						this.setState({selectedSound: e.target.value},
						this.props.soundChangeHandler(this.state.selectedSound)
						)
					}}>
				  <option value="Type">TypeWriter</option>
				  <option value="Cluck">Chicken Cluck</option>
				  <option value="Piano">Piano Key</option>
				  <option value="Nose">Nose Smelling</option>
				</select>
			</div>
		)
	}
}