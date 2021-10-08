import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var company = this.props.data.company;
      var Note = this.props.data.note;
      var networks= this.props.data.social1.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Photos</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline">{company}</h2>
            <h3>{Note}</h3>
            <hr />
            <ul className="social1">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
