import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'
import yangilik from '../images/yangilik1.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Hamkorlik() {
  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center " style={{marginBottom:"400px"}}>
      <div class="card mb-5" style={{width:"18rem"}}>
        <img src="http://ecoilm.uz/media/xamkorImg/Nara_Space_tmUiPaH.jpg" class="img-fluid" alt="..."/>
        <div class="card-body mb-5">
          <h1 class="card-title">Nara Space</h1>
          <p class="card-text ">
Nara Space deyarli real vaqtda kuzatish imkoniyatiga ega sun'iy yo'ldosh infratuzilmasi va kosmik ma'lumotlarni tahlil qilish texnologiyasi bilan shugullanadi. Yerdagi turli masalalarga kosmik nuqtai nazardan yondashadi.</p>
          
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default Hamkorlik;
