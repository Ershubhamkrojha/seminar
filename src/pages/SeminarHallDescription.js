import React from "react";
import { useNavigate } from "react-router-dom";
import AboutImg from "../assets/images/seminar-hall/1.jpeg";

const SeminarHallDescription = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-8">
              <img src={AboutImg} className="w-100 mt-5" alt="" />
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <button
          className="rounded btn btn-lightorange"
          onClick={() => {
            navigate("/booking");
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SeminarHallDescription;
