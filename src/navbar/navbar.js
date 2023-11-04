import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/index.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>

        <nav class="navbar navbar-expand-lg navbar-light p-0 ">
          <div class="navbar-item container-fluid p-2 m-0 ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
           
           </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" >
              <Link  to="/BoshSahifa"> 
                <img className='img-fluid navbar-img' src='http://ecoilm.uz/static/images/website-logo.png' alt='sd' /> 
                </Link>
             
                </li>
                <li class="nav-item dropdown text-center">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   biz haqimizda  
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <Link className='Link dropdown-item' to="/tuzilma"> Tuzilma </Link>
                     <Link className='Link dropdown-item' to="/vazifa">Vazifa va funksiya </Link>
                     <Link className='Link dropdown-item' to="/labaratoriya"> Labaratoriyalar va bo'limlar </Link>
                  </ul>
                </li> 
                <hr />
                <li class="nav-item ">
                <Link className='Link nav-link ' to="/news"> Yangiliklar </Link>
                </li>
                <hr />
                <li class="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    xamkorlik va loyihalar
                  </a>
                  <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <Link className='Link dropdown-item ' to="/xorijiyhamkorlik"> Xorijiy Hamkorlik </Link>
                  <Link className='Link dropdown-item ' to="/loyihalar"> Loyihalar </Link>
                  </ul>
                </li> 
                <hr />
                <li class="nav-item">
                  <Link className='Link nav-link ' to="/ilmiyKengash"> ilmiy kengash </Link>
                </li>
                <hr />
               
                <li class="nav-item dropdown text-center">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   ilmiy jurnal
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <Link className='Link dropdown-item ' to="/ilmiyJunal"> Jurnallar </Link>
                     <Link className='Link dropdown-item' to="/maqolaChopEtish">Maqola chop etish </Link>
                  </ul>
                </li> 
                <hr />
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   onlayn kutubxona
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className='Link dropdown-item ' to="/qizilkitob"> Qizil kitob</Link>
                  <Link className='Link dropdown-item ' to="/kitoblar"> Kitoblar</Link>
                  <Link className='Link dropdown-item ' to="/hujjatlar"> Normativ-huquqiy hujjatlar</Link>
                  
                  </ul>
                </li> 
              
              </div> 
            </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;