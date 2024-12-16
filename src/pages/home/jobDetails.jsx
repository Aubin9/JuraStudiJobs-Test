import React from "react";
import briefcase from "../../components/assets/briefcase.png";

const JobDetails = () => {
  return (
    <div className="pt-3 pb-lg-3">
      <div className="row">
        <div className="col-lg-8 job-description">
          <a href="/" className="back-btn">
            back
          </a>
          <h1 className="mt-4">Werkstudent (m/w/d) im Bereich Jura</h1>
          <div className="d-flex align-items-end mb-5">
            <div className="tags mt-3">
              <span className="tag"> Vertragsklauseln </span>
              <span className="tag"> Vertragsklauseln </span>
              <span className="tag homeoffice">Home Office</span>
            </div>
            <div className="semester ms-5">
              <img
                src={briefcase}
                alt=""
                className="fa-solid fa-calendar"
                width={120}
                height={120}
              />
              <span className="semester-text">SEMESTER</span>
              <span className="semester-number">3+</span>
            </div>
          </div>
          <p>
            GHC Gerling, Holz & Co. Handels GmbH ist ein mittelständisches
            Unternehmen mit einer über 120-jährigen Tradition in der
            Chemiegase-Industrie. Mit unserem außergewöhnlichen Programm an
            Spezialgasen, Chemikalien und Dienstleistungen versorgen wir
            weltweit unsere Geschäftspartner in Industrie, Pharmazie und
            Raumfahrt. Unsere 250 Mitarbeiter an sieben Standorten in
            Deutschland und in unserem Hauptsitz in Hamburg bilden dafür die
            Basis.
          </p>
          <h2>Werkstudent (m/w/d) im Bereich Jura</h2>
          <p>
            Du unterstützt uns ab dem nächstmöglichen Zeitpunkt im
            Tagesgeschäft, in rechtlichen Fragestellungen und Übersetzungen für
            den internationalen Export von Handelsgütern.
          </p>
          <h2>Das erwartet Dich</h2>
          <ul>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
          </ul>
          <h2>Das können wir Dir anbieten</h2>
          <ul>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
            <li>Eingeschriebener Student im Bereich Rechtswissenschaften</li>
          </ul>
        </div>
        <div className="col-lg-4 p-0 p-md-5">
          <nav className="navbar navbar-expand navbar-light sticky-top">
            <div className="right-side-infos d-flex flex-column justify-content-center">
              <div className="company-logo">
                <div className="logo-text">RA Wolfgang Tiede, LL.M</div>
              </div>
              <h2>GHC</h2>
              <a href="/">ghc.de/en</a>
              <h5 className="mt-4 mb-2">Share this job</h5>
              <div className="link-btn link-btn-inactive">
                <span className="me-2">Click to Copy the link</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
