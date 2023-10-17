import React from 'react';
import hotel0 from '../images/hotel0.jpg';
import hotel1 from '../images/hotel1.jpg';
import hotel2 from '../images/hotel2.jpg';


const Home=()=>{
    return(
        <div className='home'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={hotel0} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={hotel1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={hotel2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div id='book'>
<h5 >Booking Rooms</h5>
<a href="#" class="btn btn-primary">GO HERE</a>
</div>

<div className='about'>

<div class="card">
  <div class="card-body">
<b>About US</b><br/>

  Soaltee Hotel Limited (SHL), a pioneer in Nepal's hospitality sector, owns the Soaltee Kathmandu, a 12-acre five-star deluxe hotel. A landmark in the city of Kathmandu with a rich heritage, the hotel is the proud recipient of several prestigious awards and accolades over the years. Soaltee Hotel Limited is renowned for its rich history as a pioneer in Nepal’s tourism industry with its contribution of luxurious properties and legendary hospitality across the region.

  Soaltee Hotel is the first hotel to attract foreign investment and to entrust its management to the leading Indian Hotel Company, the Oberoi Hotels Private Limited in the year 1969. Since then the Company expanded its horizons and moved with the times to be the first Nepali Company to obtain a loan from the International Finance Corporation (IFC), the private arm of the World Bank, for the construction of additional guestrooms bringing up the number of total rooms to 282 luxurious rooms.
  
  As tourism industry gradually emerged during 1970s more international airlines connected Nepal, at this period a need for an on-board catering service was felt and the Company, Soaltee Hotel Limited started Nepal’s first airlines flight catering service for both domestic and international airlines.
  
  Presently subsidiaries and associate companies are currently developing premium hotels across the country to support Nepal’s tourism industry and create economic opportunities in new areas through the development of hotels for international and domestic tourist and business travellers.
  
  
  </div>
</div>
</div>
<div className='history'>

<div class="card">
  <div class="card-body">
<b>History</b><br/>

  Soaltee Hotel Limited (SHL), a pioneer in Nepal's hospitality sector, owns the Soaltee Kathmandu, a 12-acre five-star deluxe hotel. A landmark in the city of Kathmandu with a rich heritage, the hotel is the proud recipient of several prestigious awards and accolades over the years. Soaltee Hotel Limited is renowned for its rich history as a pioneer in Nepal’s tourism industry with its contribution of luxurious properties and legendary hospitality across the region.

  Soaltee Hotel is the first hotel to attract foreign investment and to entrust its management to the leading Indian Hotel Company, the Oberoi Hotels Private Limited in the year 1969. Since then the Company expanded its horizons and moved with the times to be the first Nepali Company to obtain a loan from the International Finance Corporation (IFC), the private arm of the World Bank, for the construction of additional guestrooms bringing up the number of total rooms to 282 luxurious rooms.
  
  As tourism industry gradually emerged during 1970s more international airlines connected Nepal, at this period a need for an on-board catering service was felt and the Company, Soaltee Hotel Limited started Nepal’s first airlines flight catering service for both domestic and international airlines.
  
  Presently subsidiaries and associate companies are currently developing premium hotels across the country to support Nepal’s tourism industry and create economic opportunities in new areas through the development of hotels for international and domestic tourist and business travellers.
  
  
  </div>
</div>
</div>

        </div>
    )
  
}
export default Home;