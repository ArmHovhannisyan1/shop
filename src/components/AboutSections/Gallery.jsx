export default function Gallery() {
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    <div className="row f-revColumn f-jBetween">
                        <div className="row f-row f-jBetween">
                            <div className="col">
                                <div className="single">
                                    <div className="image">
                                        <img src="/images/image3-about-gallery.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="single">
                                    <div className="image">
                                        <img src="/images/image4-about-gallery.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="single">
                                <div className="image">
                                    <img src="/images/image1-about-gallery.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row f-revColumn f-jBetween">
                        <div className="col">
                            <div className="single">
                                <div className="image">
                                    <img src="/images/image5-about-gallery.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="single">
                                <div className="image">
                                    <img src="/images/image2-about-gallery.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}