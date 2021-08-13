import React, { Component } from 'react';

class MyComponents extends Component {
  render() {
    if (this.props.data) {
      var components = this.props.data.components.map(function (components) {
        var componentImage = 'images/portfolio/' + components.image;

        return (
          <div key={components.title} className='columns portfolio-item'>
            <div className='item-wrap'>
              <a href={components.url} target='_blank' title={components.title}>
                <img alt={components.title} src={componentImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{components.title}</h5>
                    <p>{components.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Reusable React components:</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-thirds s-bgrid-thirds cf'>
              {components}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyComponents;
