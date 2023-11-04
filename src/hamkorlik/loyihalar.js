import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'
import LoyihalarItem from "./loyigalar-item";

let Item1 = {
  img: "http://ecoilm.uz/static/images/toshkent-kochat.jfif",
  data: "2020 yil",
  info: "Toshkent shahrining markaziy ko‘cha, bog‘ va xiyobonlaridagi daraxt-butalariga shakl berish, kesish, ko‘chirib o‘tkazish agrotexnologiyalarini ishlab chiqish."
}
let Item2 = {
  img: "http://ecoilm.uz/static/images/qushlar-sanoq.jfif",
  data: "2020 yil",
  info: "O‘zbekiston suv havzalarida suv qushlarining qishki sanog‘ini o‘tkazish bo‘yicha."
}
let Item3 = {
  img: "http://ecoilm.uz/static/images/suv-gul.jfif",
  data: "2021 yil",
  info: "Orol dengizi hududida Qizilmiya o‘simligining hisobini yuritish uchun ularning tarqalish areallari va zaxirasini aniqlash."
}
let Item4 = {
  img: "http://ecoilm.uz/static/images/kovrak-gul.jfif",
  data: "2021 yil",
  info: "Kovrak o‘simligining hisobini yuritish uchun ularning tarqalish areallari va zaxirasini aniqlash."
}
let Item5 = {
  img: "http://ecoilm.uz/static/images/shortan-neft.jfif",
  data: "2021 yil",
  info: "Sho‘rtan neft va gaz qazib chiqarish boshqarmasi (SHNGQB) hududidan chiqadigan organik birikmalar bilan ifloslangan oqova suvlarni biologik usulda tozalash."
}
let Item6 = {
  img: "http://ecoilm.uz/static/images/qizil-kitob.jfif",
  data: "2022 yil",
  info: "O‘zbekiston Respublikasi “Qizil kitobi”ga kiritilmagan yovvoyi hayvon va qushlarning sonini hisobga olishni amalga oshirish."
}
let Item7 = {
  img: "http://ecoilm.uz/static/images/qishla-qush.jfif",
  data: "2022 yil",
  info: "O‘zbekiston Respublikasi ochiq suv havzalarida qishlab qoluvchi suv qushlarining qishki sanog‘ini o‘tkazish."
}
let Item8 = {
  img: "http://ecoilm.uz/static/images/qizil-ekpert.jfif",
  data: "2022 yil",
  info: "O‘zbekiston Respublikasi “Qizil kitobi”ga kiritilmagan yovvoyi hayvon va qushlarning sonini hisobga olishni amalga oshirish, olingan hisob maʼlumotlari asosida ekspert xulosalarini tayyorlash."
}
let Item9 = {
  img: "http://ecoilm.uz/static/images/shortan-daraxt.jfif",
  data: "2021 yil",
  info: "Sho‘rtan neft va gaz qazib chiqarish boshqarmasi hududida mavjud ignabargli, manzarali daraxt va butalarning sanitar holatini o‘rganish hamda o‘simliklarda aniqlangan kasallik va zararkunandalariga qarshi kurashish."
}
let Item10 = {
  img: "http://ecoilm.uz/static/images/qush-sutemizchi.jfif",
  data: "2021 yil",
  info: "Sho‘rtan neft va gaz qazib chiqarish boshqarmasi (SHNGQB) hududidan chiqadigan organik birikmalar bilan ifloslangan oqova suvlarni biologik usulda tozalash."
}
let Item11 = {
  img: "http://ecoilm.uz/static/images/qush-sutemizchi.jfif",
  data: "2022 yil",
  info: "Farg‘ona vodiysi hududida iqtisodiy ahamiyatga ega qushlar va sut emizuvchilarning davlat hisobi va kadastrini yuritish."
}

let Item12 = {
  img: "http://ecoilm.uz/static/images/qishla-qush2.jfif",
  data: "2022 yil",
  info: "O‘zbekiston suv havzalarida suv qushlarining qishki sanog‘ini o‘tkazish bo‘yicha."
}






function Loyihalar() {
  return (
    <>
      <Navbar />
      <div className="container-fluid news-header text-start d-flex align-items-center">
        <div>
          <h1 className="text-light ">Barcha Loyihalar</h1>
          <a href="" className="h4 text-light news-p">Institut :</a>
          <a href="" className="h4 text-light news-p"> : Yangiliklar</a>
        </div>
      </div>
      <LoyihalarItem new={Item1} />
      <LoyihalarItem new={Item2} />
      <LoyihalarItem new={Item3} />
      <LoyihalarItem new={Item4} />
      <LoyihalarItem new={Item5} />
      <LoyihalarItem new={Item6} />
      <LoyihalarItem new={Item7} />
      <LoyihalarItem new={Item8} />
      <LoyihalarItem new={Item9} />
      <LoyihalarItem new={Item10} />
      <LoyihalarItem new={Item11} />
      <LoyihalarItem new={Item12} />
      

      <Footer />
    </>
  );
}

export default Loyihalar;