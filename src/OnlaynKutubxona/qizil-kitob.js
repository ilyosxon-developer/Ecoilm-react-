import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'
import QizilKitob2 from '../images/osimlik-qizil-kitob.png'
import QizilKitob1 from '../images/hayvon-qizil-kitob.png'
function QizilKitob() {
  return (
    <>
    <Navbar/>
       <div className="container-fluid news-header text-start d-flex align-items-center">
            <div>
                 <h1 className="text-light ">Yangiliklar</h1>
                 <a href="" className="h4 text-light news-p">Institut :</a>
                 <a href="" className="h4 text-light news-p"> : Yangiliklar</a>
            </div>
       </div> 
      
        <div className="row w-100 mt-5 mb-5">
            <div className="col-12 col-sm-12 col-md-10 col-lg-6">
            <div className="row ">
            <div className="col-5 text-end">
                <img alt="img error" className="w-100 h-100 loyiha-item-img" src={QizilKitob2} />
            </div>
            <div className="col-5 d-flex align-items-center">
                <div>
                <h2><a href="#" style={{color:"black"}}>Qizil Kitob 1-Qism(O'simliklar Haqida).</a></h2>
                     <p > Oʻsimliklar olamining kamyob, yoʻqolib ketish xavfida boʻlgan 163 turi haqida ilk bor mukammal maʼlumotlar 1984-yil bosmadan chiqqan Qizil kitobda keltirilgan.</p>
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
                <img alt="img error" className="w-100 h-100 loyiha-item-img" src={QizilKitob1} />
            </div>
            <div className="col-5 d-flex align-items-center">
                <div>
                <h2><a href="#" style={{color:"black"}}>Qizil Kitob 2-Qism(Hayvonlar Haqida).</a></h2>
                     <p>Qizil kitobning soʻnggi nashriga sut emizuvchilarning — 24<br/>
                     qushlarning — 51, sudralib yuruvchilarning — 16, baliqlarning — 18, halqali chuvalchanglarning — 3, mollyuskalarning — 15, boʻgʻimoyoqlilarning — 62 turi va kenja turi kiritilgan.</p>
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

export default QizilKitob;