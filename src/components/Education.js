import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var education = this.props.resumeEducation.map(function (education) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={education.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(education)}>
                <div>
                  <img
                    src={education.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{education.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {education.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="education">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{education}</div>
          </div>
          {/* <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          /> */}
        </div>
      </section>
    );
  }
}

export default Education;
