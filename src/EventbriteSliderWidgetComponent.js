import * as React from "react";
import Slider from 'react-slick';
import * as Scrivito from "scrivito";

Scrivito.provideComponent("EventbriteSliderWidget", ({ widget }) => {
  const limit = widget.get('count');
  const references = Scrivito.Obj.where('_objClass', 'equals', 'EventbriteWidget').order('_lastChanged', 'desc').take(limit);
  const settings = sliderSettings();

  if (!references.length && Scrivito.isInPlaceEditingActive()) {
    return (
      <h4 className="text-center">
        Provide a reference to an eventbrite event in the widget properties.
        </h4>
    );
  }

  return (
    <div>
      <Slider {...settings} className="slickslide">
        {[...references].map((item, index) => (
          <div key={index}>
            <Scrivito.ContentTag tag="div" content={item} attribute="body" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
);

function sliderSettings() {
  return {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    dots: true,
    fade: false,
    infinite: true,
    lazyLoad: true,
    slide: 'div',
    slidesToShow: 1,
    speed: 1000,
    variableWidth: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false,
      },
    }],
  };
}
