import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
const RutinaPortafolio = () => {
  const portafolio_items = [
    {
      imagen: "../src/assets/img/1-1-370x370.jpg",
      tittle: "Ejercicio 1",
    },
    {
      imagen: "../src/assets/img/1-1-370x370.jpg",
      tittle: "Ejercicio 1",
    },
    {
      imagen: "../src/assets/img/1-1-370x370.jpg",
      tittle: "Ejercicio 1",
    },
    {
      imagen: "../src/assets/img/1-1-370x370.jpg",
      tittle: "Ejercicio 1",
    },
    {
      imagen: "../src/assets/img/1-1-370x370.jpg",
      tittle: "Ejercicio 1",
    },
  ];

  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get(
      "..."
    ) /* URL DEL BACKEND EN JSON ------------> https://jsonplaceholder.typicode.com/users */
      .then((res) => {
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  });
  const arr = portafolio_items.map((item) => {
    return (
      <div className="col-lg-4 mb-2">
        <div className="card text-bg-dark">
          <div
            className="portfolio-detail-img-cfw three wow fadeInDown"
            data-wow-delay=".5s"
          >
            <img src={item.imagen} alt="Portafolio" />

            <div className="card-img-overlay d-flex align-items-end">
              <div className="card-body">
                <button className="btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-activity"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                  </svg>
                </button>

                <h2 className="card-text" id="card-rutinas">
                  {item.tittle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-sm" id="portafolio-cards">
      <div className="row justify-content-around mx-4 my-2">
        {/* <div className="col-lg-4 mb-2">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/1-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text" id="card-rutinas">
                    Rutina de Piernas/Abs
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/2-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text">Rutina de Cardio</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/3-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text">Rutina de Peso Muerto</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/4-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text">Rutina de Espalda/Abs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/5-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text">Rutina de Brazos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card text-bg-dark">
            <div
              className="portfolio-detail-img-cfw three wow fadeInDown"
              data-wow-delay=".5s"
            >
              <img src="../src/assets/img/6-1-370x370.jpg" alt="Portfolio" />

              <div className="card-img-overlay d-flex align-items-end">
                <div className="card-body">
                  <button class="btn btn-outline-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                  </button>

                  <h2 className="card-text">Rutina de Resistencia</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >

        </div> */}
        {arr}
      </div>
    </div>
  );
};

export default RutinaPortafolio;
