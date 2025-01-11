import React, { useEffect, useRef } from 'react';
import Home from './page/Home';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Work } from './page/Work';
import { Skills } from './page/Skills';
import { Layout } from './components/Layout';

import Error404 from './404';

const FullScreenSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      const routes = ["/skills", "/hello", "/work"];
      navigate(routes[next], { replace: true });
    }
  };

  useEffect(() => {
    const routes = ["/skills", "/hello", "/work"];
    let currentPath = location.pathname;
    // Remove trailing slash if present
    if (currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1);
      navigate(currentPath, { replace: true });
    }

    const currentSlide = routes.indexOf(currentPath);
    if (sliderRef.current && currentSlide !== -1) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [location.pathname, navigate]);

  const slides = [
    <React.Fragment key="skills">
      <Skills />
    </React.Fragment>,
    <React.Fragment key="hello">
      <Home />
    </React.Fragment>,
    <React.Fragment key="work">
      <Work />
    </React.Fragment>
  ];

  return (
    <Layout>
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
    </Layout>
  );
};

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Navigate to="/hello" replace />} />
      <Route path="/skills" element={<FullScreenSlider />} />
      <Route path="/hello" element={<FullScreenSlider />} />
      <Route path="/work" element={<FullScreenSlider />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default App;
