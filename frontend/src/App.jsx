import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomePage from './components/HomePage/Home.jsx'
import BookingForm from './components/BookinForm/Form.jsx'
import BlogPage from './components/BlogPage/Blog.jsx'
import AboutusPage from './components/AboutusPage/Aboutus.jsx'
function AppRouter() {
  return(<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Booking" element={<BookingForm />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Aboutus" element={<AboutusPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default AppRouter;
