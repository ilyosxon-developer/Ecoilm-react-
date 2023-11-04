import 'bootstrap/dist/css/bootstrap.css'
import '../css/index.css'
import  h1 from '../images/1.jpg'
import biohi from '../images/bioxilmaxillik-icon.jpg'
import yervasuv from '../images/yer-suv.png'
import atmosfera from '../images/atmospheric-pollution.png'
import iqlim from '../images/climate-change.png'
import ekologik from '../images/eco-education.png'
import chqindi from '../images/sericon1.png'
import yangilik from '../images/yangilik1.jpg'
import yashilosimlik from '../images/01Yashil-osimlik.jpg'
import yashilosish from '../images/yashil-oshish.jpg'
import Onlineshop1 from '../images/online-shop-1.png'
import Onlineshop2 from '../images/online-shop-2.png'
import Onlineshop3 from '../images/online-shop-3.png'
import Onlineshop4 from '../images/online-shop-4.png'
import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'
function Header() {
    return(
      <>
      <Navbar/>
      <div className='container'> 
        
        <img className='w-100' src={h1}  alt=''  />
        <h2 className='mt-4 mb-4'>Ekologiya, Atrof-muhit muxofazasi va iqlim o'zgarishi yo'nalishida olib borilayotgan ilmiy tadqiqotlar</h2>
        <div className="header-item row mt-5 mb-5">
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={biohi} alt='' />
                <h5>Biohilmaxilik</h5>
            </div>
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={yervasuv} alt='' />
                <h5>Yer va Suv resuslari</h5>
            </div>
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={atmosfera} alt='' />
                <h5>Atmosfera ifloslanishi</h5>
            </div>
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={iqlim} alt='' />
                <h5>Iqlim o'zgarishi</h5>
            </div>
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={ekologik} alt='' />
                <h5>Ekologik targ'ibotlar</h5>
            </div> 
            <div className="itemm col-sm-12 col-md-4  col-lg-2 " >
                <img className='item-img w-75' src={chqindi} alt='' />
                <h5>Chiqindilarni qayta ishlash</h5>
            </div>

        </div>
        <div className='yangiliklar p-4 '>
            <h3 className='text-start mb-0'>
                Yangiliklar
            </h3>
            <h4 className='text-end mt-0'> 
                 <button className='btn btn-success'>
                    Ko'proq yangiliklar
                 </button> 
            </h4>
            <div className='row text-center'>
                <div className="yangilik-item col-12 col-sm-12 col-md-6 col-lg-6 row" >
                    <div className="col-6 p-2" >
                        <img className='w-100 h-75' src={yangilik} alt='dn' />
                    </div>
                    <div className="col-6 p-2 ">
                          <p className='data-p'>Aug 25 ,  2023 , 11:39 , a.m </p>
                          <h5>Milliy Gvardiya va ichki ishlar organlari ekologi</h5>
                          <p className='about-p'>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi Milliy gvardiya hamda ichki  ishlar organlari tomonidan ekologiya </p>
                          <p className='p m-4 mb-0'><a href=''>Ko'proq</a></p>
                    </div>
                </div>
                <div className="yangilik-item col-12 col-sm-12 col-md-6 col-lg-6 row" >
                    <div className="col-6 p-2" >
                        <img className='w-100 h-75' src={yangilik} alt='dn' />
                    </div>
                    <div className="col-6 p-2 ">
                          <p className='data-p'>Aug 25 ,  2023 , 11:39 , a.m </p>
                          <h5>Milliy Gvardiya va ichki ishlar organlari ekologi</h5>
                          <p className='about-p'>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi Milliy gvardiya hamda ichki  ishlar organlari tomonidan ekologiya </p>
                          <p className='p m-4 mb-0'><a href=''>Ko'proq</a></p>
                    </div>
                </div>
                <div className="yangilik-item col-12 col-sm-12 col-md-6 col-lg-6 row" >
                    <div className="col-6 p-2" >
                        <img className='w-100 h-75' src={yangilik} alt='dn' />
                    </div>
                    <div className="col-6 p-2 ">
                          <p className='data-p'>Aug 25 ,  2023 , 11:39 , a.m </p>
                          <h5>Milliy Gvardiya va ichki ishlar organlari ekologi</h5>
                          <p className='about-p'>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi Milliy gvardiya hamda ichki  ishlar organlari tomonidan ekologiya </p>
                          <p className='p m-4 mb-0'><a href=''>Ko'proq</a></p>
                    </div>
                </div>                    
                <div className="yangilik-item col-12 col-sm-12 col-md-6 col-lg-6 row" >
                    <div className="col-6 p-2" >
                        <img className='w-100 h-75' src={yangilik} alt='dn' />
                    </div>
                    <div className="col-6 p-2 ">
                          <p className='data-p'>Aug 25 ,  2023 , 11:39 , a.m </p>
                          <h5>Milliy Gvardiya va ichki ishlar organlari ekologi</h5>
                          <p className='about-p'>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi Milliy gvardiya hamda ichki  ishlar organlari tomonidan ekologiya </p>
                          <p className='p m-4 mb-0'><a href=''>Ko'proq</a></p>
                    </div>
                </div> 
            </div>
        </div>
         <div className='bizning-tariximiz row mt-5 w-100 text-start'>
            <div className="col-12 col-sm-12 col-md-5 col-lg-4" >
                <div className='bizning-tarix-item p-2'>
                    <h1>Tadqiqotlar <br/> 20+ <br/> Yillik <br/> Tajriba</h1>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-7" >
                <div>
                     <h2>Bizning Tariximiz</h2>
                    <div class="w-100">
                       <div className='bg-secondary d-flex text-center'>
                            <div className='tariximiz-item'>2018-2023</div>
                            <div className='tariximiz-item'>1964-1967</div>
                            <div className='tariximiz-item'>1967-2017</div>
                       </div>
                    </div>
                       <div class="row mt-5">
                          <div class=" col-4">
                             <div class="timeline-box">
                                <h6>Biz Boshladik</h6>
                                <p> Toshkent suv ta’minoti, kanalizatsiya, gidrotexnika inshootlari va muhandislik gidrogeologiyasi (ToshNII 'VODGЕO') instituti.   </p>
                             </div>
                          </div>
                          <div class=" col-4">
                             <div class="timeline-box">
                                <h6>Mehnatning Samarasi</h6>
                                <p> 1960 yilda Markaziy Osiyo arxitektura va qurilish ilmiy-tadqiqot institutida aholi punktlari sanoatining suv xo‘jaligi laboratoriyasi sifatida tashkil etilgan.  </p>
                             </div>
                          </div>
                          <div class=" col-4">
                             <div class="timeline-box">
                                <h6>Ish </h6>
                                <p>  1964 yilda U 'VODGЕO' Butunittifoq ilmiy-tadqiqot institutida suv xo‘jaligi bo‘limi, 1978 yilda esa 'VODGЕO' Butunittifoq ilmiy-tadqiqot institutining Toshkent filialiga aylantirildi. </p>
                             </div>
                          
                       </div>
                        </div>
                    
                </div>
               
            </div>
        </div>
        <div className="container text-start mb-5">
            <h3 className='colorr-green'>Bajarilgan hamda hozirgi kunda amalga <br/> oshiralayotgan</h3>
            <h2>Loyihalar</h2>
            <div className='w-100 '>
                <img className='img-fluid w-100' style={{height:"500px"}} src={yashilosimlik} alt='' />
            </div>
            <div className='w-100'>
                <h4>Atmosfera havosini muhofaza qilish </h4>
                <p>Aholi va yuridik shaxslarning QMCHlarni saralashda ekoligik madaniyati oshirishga qaratilgan ilmiy-tadqiqot ishlarini amalga oshirish</p>  
                <p className='p'> <a href=''>Ko'proq</a></p>
            </div>
        </div>
             <div className="mb-5">
                <div class="row">
                <div class="col-md-9">
                <div class="section-title-2 text-center">
                    <h2 className='text-success'>“Ekologiya xabarnomasi” Ijtimoiy-iqtisodiy, ilmiy-amaliy</h2>
                            <p>jurnali so`nggi chop etilgan sonlari</p>
                </div>
                </div>
                <div class="col-md-3 mb-3"> <a href="{% url 'science-pages' %}" class="view-more">Ko'proq Jurnallar</a> </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
                        <img className='img-fluid d-block' alt="img error"   src={Onlineshop4}/>
                        <a href='' className='ekologiya-a'>Ekologiya xabarnomasi <br/> Ijtimoiy-iqtisodiy, ilmiy-amaliy jurnalining 2022-yil 4-soni</a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
                        <img className='img-fluid d-block' alt="img error"   src={Onlineshop3}/>
                        <a href='' className='ekologiya-a'>Ekologiya xabarnomasi <br/> Ijtimoiy-iqtisodiy, ilmiy-amaliy jurnalining 2022-yil 3-soni</a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
                        <img className='img-fluid d-block' alt="img error"   src={Onlineshop2}/>
                        <a href='' className='ekologiya-a'>Ekologiya xabarnomasi <br/> Ijtimoiy-iqtisodiy, ilmiy-amaliy jurnalining 2023-yil 2-soni</a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
                        <img className='img-fluid d-block' alt="img error"   src={Onlineshop1}/>
                        <a href='' className='ekologiya-a'>Ekologiya xabarnomasi <br/> Ijtimoiy-iqtisodiy, ilmiy-amaliy jurnalining 2023-yil 1-soni</a>
                    </div>
                </div>
            </div>
      </div>
      <Footer/>
      </> 
    
    )
}
export default Header;
