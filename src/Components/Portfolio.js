import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { SRLWrapper } from "simple-react-lightbox";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: "All"};
  }
  TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
      <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
        {name.toUpperCase()}
      </button>
    );
  };
  setTag = (tag) => {
    // console.log(tag);
    this.setState({
      tag: tag
    })
  }
  render() {
    const options = {
      settings: {
        autoplaySpeed: 2000,
        transitionSpeed: 900,
        downloadedFileName: 'RuralShutterbug'
      }
    };
    // console.log(this.props.data);
    var projects = (
      <SRLWrapper options={options}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
          <Masonry>
            {this.state.tag !== 'All' ? this.props.data.filter(a => a.tag === this.state.tag).map((image) => (
              <a href={`/images/portfolio/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/portfolio/${image.imageName}`}
                  alt=""
                />
              </a>
            )) : this.props.data.map((image) => (
              <a href={`/images/portfolio/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/portfolio/${image.imageName}`}
                  alt=""
                />
              </a>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </SRLWrapper>
    );

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>"Free Photography and Creative photos by Rural Shutterbug "</h1>
            <div className="tags">
              <this.TagButton
                name="All"
                tagActive={this.state.tag === "All" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Animal"
                tagActive={this.state.tag === "Animal" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Nature"
                tagActive={this.state.tag === "Nature" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Flower"
                tagActive={this.state.tag === "Flower" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Illumination"
                tagActive={this.state.tag === "Illumination" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Art/Craft"
                tagActive={this.state.tag === "Art/Craft" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Road"
                tagActive={this.state.tag === "Road" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Product"
                tagActive={this.state.tag === "Product" ? true : false}
                handleSetTag={this.setTag}
              />{" "}
              /
              <this.TagButton
                name="Others"
                tagActive={this.state.tag === "Others" ? true : false}
                handleSetTag={this.setTag}
              />
            </div>
            <div id="portfolio-wrapper">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
