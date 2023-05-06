import React from 'react'
import '../../Estilos/Juan.css'
import '../../Script/Juan.js'
import imgBenefit from '../../assets/img/benefit-1.jpg';

const ParteBeneficios = () => {
    return (
        <>
            <section id="benefit" className="benefit">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <div className="benefit-sec-title">
                                <div className="title">OUR BENEFITS</div>
                                <h2>EVERYTHING IS <br /> POSSIBLE WITH US</h2>
                            </div>

                            <div className="benefit-block">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="fa-3x">
                                            <i className="fa-solid fa-carrot fa-beat"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="block-inner">
                                            <strong>40 Courses a Week</strong>
                                            <div className="feature-text">Everyday our entire team works to deliver you our
                                            skills,
                                            knowledge and passion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-block">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="fa-3x">
                                            <i className="fa-solid fa-user-doctor fa-beat"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="block-inner">
                                            <span className="icon icon flaticon-fitness-2"></span>
                                            <strong>35+ Professional Trainers</strong>
                                            <div className="feature-text">Everyday our entire team works to deliver you our
                                            skills,
                                            knowledge and passion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-block">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="fa-3x">
                                            <i className="fa-solid fa-heart fa-beat"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="block-inner">
                                            <strong>Effective Group Training</strong>
                                            <div className="feature-text">Everyday our entire team works to deliver you our
                                            skills,
                                            knowledge and passion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <div className="benefit-img">
                                <img src={imgBenefit} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ParteBeneficios
