import React from 'react'
import "../../Estilos/Juan.css";
// import "../../Estilos/elementor/assets/css/frontend-legacy.min.css"
// import "../../Estilos/elementor/assets/css/frontend.min.css"
// import "../../Estilos/elementor/assets/js/frontend.min.js"
import "../../Script/Juan.js";
import team1 from "../../assets/img/team-1.jpg";
import team2 from "../../assets/img/team-2.jpg";
import team3 from "../../assets/img/team-3.jpg";

const ParteTeam = () => {
    return (
        <>
            <section>
                <div className="p-0">
                    <div className="elementor-widget-wrap">
                        <section className="team-section">
                            <div className="side-text">Entrenadores</div>
                            <div className="auto-container">
                                <div className="sec-title light centered">
                                    <div className="title">Personal del Equipo</div>
                                    <h2>Equipo de Expertos <br /> Entrenadores</h2>
                                </div>
                                <div className="row clearfix">
                                    <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="#"><img loading="lazy" width="330" height="470" src={team1} /></a>
                                            </div>
                                            <div className="content">
                                                <div className="title">Entrenador de Crossfit</div>
                                                <a href="#"
                                                    className="name">Matie Junior</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="#"><img loading="lazy" width="330" height="470" src={team2} /></a>
                                            </div>
                                            <div className="content">
                                                <div className="title">Entrenador de Fisico Culturismo</div>
                                                <a href="#"
                                                    className="name">Steve Cross</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <a href="#"><img loading="lazy" width="330" height="470" src={team3} /></a>
                                            </div>
                                            <div className="content">
                                                <div className="title">Acondicionamiento Cardiovascular</div>
                                                <a href="#"
                                                    className="name">Madona Fron</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ParteTeam
