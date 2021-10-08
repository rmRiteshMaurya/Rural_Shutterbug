import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var copyrights= this.props.data.copyright;
      var copytag= this.props.data.copyrighttag;
      var Design= this.props.data.design;
      var networks= this.props.data.social1.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social1-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; {copyrights}<a href="https://www.ruralshutterbug.live">{copytag}</a></li>
              <li>{Design}</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
