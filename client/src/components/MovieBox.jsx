import React from 'react'
import MovieList from './MovieList'

class MovieBox extends React.Component{

constructor(props){
    super(props)
    this.state = {
        data: [
            {id: 1, title: "Guardians 2", showtime:"12:00"},
            {id: 2, title: "Fate of the Furious", showtime:"13:00"},
            {id: 3, title: "Logan", showtime:"14:00"},
            {id: 4, title: "Frozen", showtime:"15:00"}
            ]
    }
}

render(){
    return (
        <div className="movie-box">
            <MovieList data={this.state.data}/>
        </div>
    )
}

}

export default MovieBox