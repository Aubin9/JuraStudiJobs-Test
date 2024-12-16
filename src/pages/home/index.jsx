import React from "react";
import Search from "./search";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import briefcase from "../../components/assets/briefcase.png";

const Home = () => {
  return (
    <>
      <section className="mx-5 my-5 mt-0">
        <div className="hero text-center">
          <h1 className="title text-light">
            Hand picked curated jobs for law students in Germany
          </h1>
          <div className="search-bar mt-4 d-flex align-items-center position-relative">
            <Search className="fas fa-search search-icon mx-2" />
          </div>
        </div>
      </section>

      <section className="job-list mt-5">
        <div className="job-card d-md-flex justify-content-between align-items-center">
          <div className="job-company-infos d-md-flex align-items-center">
            <div className="company-logo">
              <div className="logo-text">
                Werkstudent (m/w/d) im Bereich Jura{" "}
              </div>
            </div>
            <div className="job-infos ms-md-5">
              <h2 className="job-title">
                Studentische Hilfskraft (m/w/d) gesucht
              </h2>
              <div className="tags mt-3">
                <span className="tag homeoffice">
                  <FaLocationDot /> Homeoffice
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="apply-semester d-flex align-items-center justify-content-between">
            <div className="order-2 order-md-1">
              <a href="/jobs/details/semester" className="apply-btn">
                Apply
                <FaArrowRight />
              </a>
            </div>
            <div className="semester order-1 order-md-2">
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
        </div>
        <div className="job-card d-md-flex justify-content-between align-items-center">
          <div className="job-company-infos d-md-flex align-items-center">
            <div className="company-logo">
              <div className="logo-text">
                Werkstudent (m/w/d) im Bereich Jura{" "}
              </div>
            </div>
            <div className="job-infos ms-md-5">
              <h2 className="job-title">
                Studentische Hilfskraft (m/w/d) gesucht
              </h2>
              <div className="tags mt-3">
                <span className="tag homeoffice">
                  <FaLocationDot /> Homeoffice
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="apply-semester d-flex align-items-center justify-content-between">
            <div className="order-2 order-md-1">
              <a href="/jobs/details/semester" className="apply-btn">
                Apply
                <FaArrowRight />
              </a>
            </div>
            <div className="semester order-1 order-md-2">
              <img
                src={briefcase}
                alt=""
                className="fa-solid fa-calendar"
                width={120}
                height={120}
              />
              <span className="semester-text">SEMESTER</span>
              <span className="semester-number">2+</span>
            </div>
          </div>
        </div>
        <div className="job-card d-md-flex justify-content-between align-items-center">
          <div className="job-company-infos d-md-flex align-items-center">
            <div className="company-logo">
              <div className="logo-text">
                Werkstudent (m/w/d) im Bereich Jura{" "}
              </div>
            </div>
            <div className="job-infos ms-md-5">
              <h2 className="job-title">
                Studentische Hilfskraft (m/w/d) gesucht
              </h2>
              <div className="tags mt-3">
                <span className="tag homeoffice">
                  <FaLocationDot /> Homeoffice
                </span>
                <span className="tag">
                  {" "}
                  <IoMdBriefcase className="fas fa-briefcase" />{" "}
                  Vertragsklauseln{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="apply-semester d-flex align-items-center justify-content-between">
            <div className="order-2 order-md-1">
              <a href="/jobs/details/semester" className="apply-btn">
                Apply
                <FaArrowRight />
              </a>
            </div>
            <div className="semester order-1 order-md-2">
              <img
                src={briefcase}
                alt=""
                className="fa-solid fa-calendar"
                width={120}
                height={120}
              />
              <span className="semester-text">SEMESTER</span>
              <span className="semester-number">1+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 contact">
        <div className="d-md-flex justify-content-between align-items-center">
          <h1 className="text-light title">
            Get new jura studentjobs sent to your inbox.
          </h1>
          <div className="contact-form">
            <form action="" className="ng-untouched ng-pristine ng-valid">
              <h2>Leave us Your Info </h2>
              <div className="form-group mt-4 mt-lg-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-danger mt-4 mt-lg-5">
                submit <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
