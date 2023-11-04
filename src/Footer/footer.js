import '../css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import weblogo from '../images/website-logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ifraganusteam from '../images/iFragnus-team-logo.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ifrag from '../images/iFragnus-team-logo.jpg'
function Footer() {
    return (
        <>
            <footer className="Footer p-5 mt-5" >
                <div className="footer-top wf100">
                    <div className="row w-100">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12"> 
                            <div className="footer-widget footer-qism">
                                    <div className="footer-yozuv__div">
                                        <div className="footer-yozuv">
                                            <img  className='footer-yozuv-img' src={weblogo} alt="jkcnjkcnj"/>
                                            <p className='footer-yozuv-p'> Atrof-muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot instituti</p>
                                        </div>
                                        <div style={{marginLeft:"15%"}}>
                                        <div style={{width:"300px"}} className="footer-yozuv">
                                            <i className='colorr-green' > <LocationOnIcon/> </i>
                                            <p className='colorr-green'>Oʼzbekiston Respublikasi, Toshkent shahri, Chilonzor  tumani, <br/> Bunyodkor shoh koʼchasi, 7-А uy <br/></p>
                                        </div>
                                        <div className="footer-yozuv">
                                            <i className='colorr-green' > <AccessAlarmsIcon/> </i>
                                            <p className='colorr-green'>Ish vaqti : 9.00 - 18.00 <br/></p>
                                        </div>
                                        <div className="footer-yozuv">
                                            <i className='colorr-green' > <CoffeeIcon/>   </i>
                                            <p className='colorr-green'>Tushlik : 13.00 - 14.00 <br/></p>
                                        </div>
                                        <div className="footer-yozuv">
                                            <p className='colorr-green'> <CalendarMonthIcon/> Dam olish kuni: Shanba, Yakshanba <br/></p>
                                        </div>
                                        <div className="footer-yozuv">
                                            <i className='colorr-green'> <MailOutlineIcon/> </i>
                                            <p className='colorr-green'>E-mail : info@eco.gov.uz<br/></p>
                                        </div>
                                        <div className="footer-yozuv">
                                            <i className='colorr-green'> <PhoneAndroidIcon/> </i>
                                            <p className='colorr-green'>Bog'lanish :
                                            +998 71 207-11-07<br/>
                                            (+99871) 207-07-70 <br/></p>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">     
                            <div className="footer-widget">
                                <p className='footer-yozuv-p'>So'nggi Yangiliklar</p>
                                <div className="row">
                                  <div className="col-5 p-2 text-end" >
                                        <img className='w-50 h-75' src={ifrag} alt='dn' />
                                    </div>
                                    <div className="col-7 p-2  text-start"> 
                                        <small className='colorr-green' style={{fontSize:"13px"}}>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi</small>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                  <div className="col-5 p-2 text-end" >
                                        <img className='w-50 h-75' src={ifrag} alt='dn' />
                                    </div>
                                    <div className="col-7 p-2  text-start"> 
                                        <small className='colorr-green'style={{fontSize:"13px"}}>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi</small>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                  <div className="col-5 p-2 text-end" >
                                        <img className='w-50 h-75' src={ifrag} alt='dn' />
                                    </div>
                                    <div className="col-7 p-2  text-start"> 
                                        <small className='colorr-green'style={{fontSize:"13px"}}>Milliy gvardiya va ichki ishlar organlari ekologiya sohasidagi ma'muriy huquqbuzarliklarni ko'rib chiqadi</small>
                                       
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <p className='footer-yozuv-p'>Bizni Ijtimoiy tarmoqlarda kuzatib boring</p>
                                <div className="ikonkalar">
                                    <a href="Instagram.com/uzecoit" className='colorr-green'><i><InstagramIcon/></i></a>
                                    <a href="Facebook.com/uzecoit" className='colorr-green'><i><FacebookIcon/></i></a>
                                    <a href="https://t.me/Ecoilm" className='colorr-green'><i><TelegramIcon/></i></a>
                                    <a href=" YouTube.com/@uzecoit" className='colorr-green'><i><YouTubeIcon/></i></a>
                                </div>
                                <div  className="footer-widget footer-qism-2">
                                <iframe style={{marginTop:"30px"}}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2997.6486414220926!2d69.2254687!3d41.2947508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b62ad6c0735%3A0x2260c74fb009b861!2z0I7Qt9Cx0LXQutC40YHRgtC-0L0g0KDQtdGB0L_Rg9Cx0LvQuNC60LDRgdC4INCt0LrQvtC70L7Qs9C40Y8g0LLQsCDQsNGC0YDQvtGEINC80YPSs9C40YLQvdC4INC80YPSs9C-0YTQsNC30LAg0pvQuNC70LjRiCDQtNCw0LLQu9Cw0YIg0pvRntC80LjRgtCw0YHQuA!5e0!3m2!1sen!2s!4v1682565479652!5m2!1sen!2s"
                                    title="This is a unique title"   width="100%" height="60%" allowFullScreen loading="lazy"></iframe>
                                </div>
                        </div>
                    </div>
                <div className="footer-copyr wf100">
                    <div className="container">
                        <div className="text-center">
                            <p className='colorr-green'> All Rights Reserved of iFragnus Team, Design & Developed By: iFragnus Team  </p>
                        </div>
                    </div>
                   
                </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;