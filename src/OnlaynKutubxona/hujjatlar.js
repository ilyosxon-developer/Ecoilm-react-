import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'
function Hujjatlar() {
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
       <div className="accordion mt-5 mb-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        O'ZBEKISTON RESPUBLIKASI KONSTITUTSIYASI 49-moddasi
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body text-start">
                        <small>April 30,2023</small>
                        <li>Har kim qulay atrof-muhitga, uning holati to‘g‘risidagi ishonchli axborotga ega bo‘lish huquqiga ega.</li>
                        <li>Davlat fuqarolarning ekologik huquqlarini ta’minlash va atrof-muhitga zararli ta’sir ko‘rsatilishiga yo‘l qo‘ymaslik maqsadida shaharsozlik faoliyati sohasida jamoatchilik nazoratini amalga oshirish uchun shart-sharoitlar yaratadi.</li>
                        <li>Shaharsozlik hujjatlarining loyihalari qonunda belgilangan tartibda jamoatchilik muhokamasidan o‘tkaziladi.</li>
                        <li>Davlat barqaror rivojlanish prinsipiga muvofiq, atrof-muhitni yaxshilash, tiklash va muhofaza qilish, ekologik muvozanatni saqlash bo‘yicha chora-tadbirlarni amalga oshiradi.</li>
                        <li>Davlat Orolbo‘yi mintaqasining ekologik tizimini muhofaza qilish hamda tiklash, mintaqani ijtimoiy va iqtisodiy jihatdan rivojlantirish yuzasidan choralar ko‘radi.</li>
                        

                    </div>
                    </div>
                </div>
       </div>
      
       
    <Footer/>
    </>
  );
}

export default Hujjatlar;