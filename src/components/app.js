import React, { Component } from 'react';
import SearchBar from '../container/searchbar';
import Questionlist from '../container/questions';
import Staff from './staff';

export default class App extends Component {
  render() {
    return (
    	<div className="">
    		<div>
	    		<SearchBar />
	    		<Questionlist />
	    		
    		</div>
    		
    	</div>
    );
  };
}
