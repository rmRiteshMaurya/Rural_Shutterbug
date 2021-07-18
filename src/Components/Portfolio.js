import React, { Component } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

class Portfolio extends Component {
  render() {
    console.log(this.props.data);
    // if(this.props.data){
      var projects = <SRLWrapper>
				<div className="container">
					{this.props.data.map((image, index) => (
						<div key={index} className="image-card">
							<a href={`/images/portfolio/${image.image}`}>
								<img className="image" src={`/images/portfolio/${image.image}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
    // }
    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={projects.url} title={projects.title}>
    //            <img alt={projects.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{projects.title}</h5>
    //                  <p>{projects.category}</p>
    //               </div>
    //             </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
                {/* <SRLWrapper>
                  <div className="container">
                    {this.props.data.map((image, index) => (
                      <div key={index} className="image-card">
                        <a href={`/images/portfolio/${image.image}`}>
                          <img className="image" src={`/images/${image.image}`} alt="" />
                        </a>
                      </div>
                    ))}
                  </div>
			          </SRLWrapper> */}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
