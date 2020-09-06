import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav';
import About from './component/About';
import CockTails from './component/CockTails';
import CocktailDetails from './component/CocktailDetails'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Search from './component/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import CokcTailBySearch from './component/CokcTailBySearch';

class App extends Component {
    state={
        cocktail:[]
    }
    getCockTailByName= async(e)=>{
        const cockTailName=e.target.elements.cockTailName.value
        e.preventDefault();

        const  fetching_cockTail_Name = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${cockTailName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "715a9e03d8msh0e5f4f8f6299740p11432fjsnbe1ca979477c"
            }
        })
        const myCockTail = await  fetching_cockTail_Name.json()
        this.setState({cocktail:myCockTail.ingredients})
        console.log(myCockTail.ingredients)
    } 
   render(){
    return ( 
        <Router>
            <div className = "App" >
                <Nav></Nav>
                <Search getCockTailByName={this.getCockTailByName}></Search>
                <CokcTailBySearch cocktailName={this.state.cocktail}></CokcTailBySearch>
                
               <Switch>
                    <Route path="/" exact component={Home} ></Route> {/*// exact word means after load whatever after /  */} 
                    <Route path="/about" component={About}></Route>
                    <Route path="/cocktails" exact component={CockTails}></Route>
                    <Route path="/cocktails/:idDrink" component={CocktailDetails}></Route>
                    <Route path="/search" exact component={Search}></Route>
                </Switch>
            </div>
        </Router>
    );
   }
}

const Home=()=>(
    <div>
        <h3> Home </h3> <br></br>
        <div>
            <p className='text'>you can find best cocktails by clicking on cocktails link in nav side as we as <br></br>
            you can find the cocktails by typing categories in search</p> 
        </div>
    </div>
)
export default App;