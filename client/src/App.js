import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import API from "./utils/API.js";


// The app component that is being rendered at the root in index.html

    render() ;{
        //this.props.loggedIn = this.state.loggedIn;
        return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={() => <Login loggedIn={this.state.loggedIn} setLoginState={this.setLoginState.bind(this)} user={this.state.currentUser} />}/>
                <Route path='/search' render={() => <Search loggedIn={this.state.loggedIn} user={this.state.currentUser} />}/>
                <Route path='/spotted/:id' render={(props) => <Spotted loggedIn={this.state.loggedIn} user={this.state.currentUser} case={props.match.params.id}/>}/>
                <Route path='/resources' render={() => <Resources loggedIn={this.state.loggedIn} user={this.state.currentUser}/>}/>
            </Switch>
        </div>
        );
    };


export default App;
