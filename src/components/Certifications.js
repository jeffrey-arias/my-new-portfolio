import React from "react";

export default function Certifications(props) {
  const { resumeBasicInfo, resumeCertifications } = props;
  var sectionName = resumeBasicInfo?.section_name?.certifications;

  var certifications = resumeCertifications?.map(function (certification, i) {
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div>
            <strong>{certification.title}</strong>
          </div>
          <div>Issued by: {certification.body}</div>
          <div>Date certfied: {certification.date}</div>
          <div>Credential ID: {certification.id}</div>
        </span>
      </li>
    );
  });

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{certifications}</ul>
        </div>
      </div>
    </section>
  );
}
