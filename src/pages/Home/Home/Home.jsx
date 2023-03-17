import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

export default function Home() {
     return (
          <div>
               <Banner />
               <InfoCards />
               <Services />
               <MakeAppointment />
               <Testimonial />
               <Contact />
          </div>
     );
}
