import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'

function Kitoblar() {
  return (
    <>
    <Navbar/>
      <h1>Kitoblar bo'limi hisoblanadi</h1>      
        <div className="row w-100 mt-5 mb-5">
            <div className="col-12 col-sm-12 col-md-10 col-lg-6">
            <div className="row ">
            <div className="col-5 text-end">
                <img alt="img error" className="img-fluid loyiha-item-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-BpfdNaRyzggVOnWuUH1N7laeE-KNBS5XI__d-D4&s" />
            </div>
            <div className="col-5 d-flex align-items-center">
                <div>
                    <a href="">Landshaftshunoslik</a>
                    <button className="btn btn-outline-success mt-4">
                     <a target="" href="" >Yuklash Uchun Bosish</a>
                     </button>
                </div>
            </div>
        </div>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-6">
            <div className="row ">
            <div className="col-5 text-end">
                <img alt="img error" className="img-fluid loyiha-item-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU9VsRz7VZGA84C8eIxl1Yy6MFSXKE_Ays-0dAulo&s" />
            </div>
            <div className="col-5 d-flex align-items-center">
                <div>
                    <a href="">Umumiy Ekologiya</a>
                     <button className="btn btn-outline-success mt-4">
                     <a target="" href="" >Yuklash Uchun Bosish</a>
                     </button>
                </div>
            </div>
        </div>
            </div>
        </div>
    <Footer/>
    </>
  );
}

export default Kitoblar;