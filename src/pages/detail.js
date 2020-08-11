import React, { Component } from "react"
import PropTypes from "prop-types" 

 
 const API_KEY = '99ef2dab'

 export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }
    
    state= { movie:{} } 

     fetchMovie ({ id }) {
         fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res=> res.json())
            .then(movie =>{
                console.log({ movie })
                this.setState({ movie })
            })
     }
     
     goBack(){
         window.history.back()
     }

     componentDidMount ( ) {
         const { id } =this.props
         this.fetchMovie({ id })
     }

     render( ) {
         const { Title, Poster, Actors, Metascore, Plot} = this.state.movie
         return( 
         <div>
             <button onClick={this.goBack}>volver</button>
            <h1>{Title}</h1> 
            <img src={Poster} alt={Title}/>
            <h3>{Actors}</h3>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
         )
     }
 }