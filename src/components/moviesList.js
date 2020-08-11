import React, { Component } from 'react'
import ProtoTypes from 'prop-types'
import { Movie } from './movie'

export class MovieList extends Component {
    static protoTypes = {
        movies: ProtoTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className='MoviesList'>
                {
                  movies.map((x) => {
                    return (
                      <div key={x.imdbID} className='MoviesList-item' >
                        <Movie
                          id={x.imdbID}  
                          title={x.Title} 
                          year={x.Year} 
                          poster={x.Poster} 
                        />
                      </div> 
                    )
                  })  
                }
            </div>
        )
       
    }
}