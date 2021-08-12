import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { SRLWrapper } from 'simple-react-lightbox';

class Portfolio extends Component {
  render() {
    // console.log(this.props.data);
      var projects = <SRLWrapper>
       <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}} >
				<Masonry>
					{this.props.data.map((image, index) => (
              <a href={`/images/portfolio/${image.imageName}`}>
								<img className="image" src={`/images/portfolio/${image.imageName}`} alt="" />
							</a>
					))}
        </Masonry>
       </ResponsiveMasonry>
			</SRLWrapper>

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Free Photography and Creative photos by Rural Shutterbug </h1>

            <div id="portfolio-wrapper" >
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
