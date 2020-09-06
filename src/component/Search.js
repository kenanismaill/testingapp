import React, { Component } from 'react'

const Search = props =>(
    <div className='makesearch'>   
    <form onSubmit={props.getCockTailByName}>
        <input type='text' name='cockTailName' style={{marginRight:"2px"}}></input>
        <button className='btn btn-outline-info'style={{marginRight:"2px"}} > Search </button>
    </form>
</div>
)
export default Search
