import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="columns main-col">
            <h2>About Me</h2>
            {
                resumeData.aboutme && resumeData.aboutme.map((paragraph) => {
                  return (
                    <p>
                      {paragraph}
                    </p>
                  )
                })
              }
          </div>
        </div>
      </section>
    );
  }
}
