import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
            </a>
            <a href={this.landingData.github}>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
