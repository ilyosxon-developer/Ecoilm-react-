import Navbar from "../../navbar/navbar";
import Footer from "../../Footer/footer";
import '../../css/index.css'

function Labaratoriya() {
  return (
    <>
    <Navbar/>
        <div className="container text-start">
            <h1 className="labar-h1 mt-5 mb-5">Labaratoriya va bo'limlar haqida malumot</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Yer resurslarini muhofaza qilish” laboratoriyasi
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h4>Laboratoriya quyidagi vazifalarni bajaradi:</h4>
                        <li>yer resurslarini muhofaza qilishga qaratilgan ilmiy tadqiqotlar olib borish, yerlardagi degradatsiya jarayoniga qarshi kurashish va uning oldini olish bo'yicha ilmiy asoslangan takliflar ishlab chiqadi;</li>
                        <li>yer resurslarini muhofaza qilishda tuproqlarning ifloslanishi, degradatsiyalanishi, eroziyalanishi, cho'llanish, sho'rlanish kabi mezonlarning darajasini baholaydi;</li>
                        <li>yer resurslarini muhofaza qilishda tuproq unumdorligini saqlash, tuproqlarning fizik, kimyoviy, agrokimyoviy va boshqa xossalari bo'yicha ekologik-meliorativ holatini yaxshilashga qaratilgan chora-tadbirlar ishlab chiqadi;</li>
                        <li>yerlarni suv va shamol eroziyasidan, qayta sho'rlanishdan, sahrolanishdan, ishlab chiqarish chiqindilari bilan kimyoviy ifloslanishidan muhofaza qiladi hamda degradatsiyalanishni oldini olishga texnologiyalarini ishlab chiqadi;</li>
                        <li>yer resurslari muhofazasida sho'rtoblanishga duchor yerlarda sho'rtoblangan tuproqlarning singdirish kompleksidagi natriy kationini tabiiy meliorantlar orqali siqib chiqarish texnologiyasini ishlab chiqadi hamda tuproq unumdorligini saqlash va muhofaza qilishga ilmiy asoslangan tavsiyalar beradi;</li>
                        <li>yer resurslarini muhofaza qilishda degradatsiyaga uchragan yerlarni rekul`tivatsiya qilish, qaytadan ekin maydonlari oborotiga kirtish, tuproq unumdorligini saqlash va muhofaza qilish bo'yicha yo'riqnoma va tavsiyalar ishlab chiqadi.</li>

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bioxilmaxillikni saqlash laboratoriyasining faoliyati
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Laboratoriya quyidagi vazifalarni bajaradi:</h4>
                        <li>tadqiqot natijalarini amaliy tajribalar bilan muvofiqlashtirish va muayyan ilmiy takliflar kiritadi;</li>
                        <li>hayvonot va o‘simlik olami bioxilmaxilligini o‘rganish orqali ekologik xavfsizlikni ta’minlaydi;</li>
                        <li>noyob o‘simlik va hayvon turlarini yo‘q bo‘lib ketishini oldini olishni ta’minlovchi mutlaqo yangi va samarali uslub, ilg‘or xorijiy texnologiyalar va innovatsiyalarni o‘rganish hamda tahlil qilish, olingan natijalarni amaliyotga tadbiq etadi;</li>
                        <li>biologik xilmaxillikni saqlash masalalari bo‘yicha talab va standartlarni ishlab chiqishda ishtirok etadi;</li>
                        <li>tabiiy bioxilmaxillikni saqlash sohasida xorijiy ilmiy-tadqiqot muassasalari va markazlari bilan hamkorlikni rivojlantirishda, ilmiy konferensiyalarda, seminarlarda, qo‘shma tadqiqotlarda, loyihalarni amalga oshirishda ishtirok etadi;</li>
                        <li>xalqaro standartlar darajasida yuqori malakali kadrlar tayyorlash, ekologiya va atrof-muhitni muhofaza qilish sohasidagi oliy o‘quv muassasalari o‘qituvchilari hamda mutaxassislari bilan hamkorlikda tadqiqotlar olib boradi.</li>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    “Suv resurslarini muhofaza qilish texnologiyalari” laboratoriyasi
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Laboratoriya quyidagi vazifalarni bajaradi:</h4>
                        <li>suv resurslarini muhofaza qilish borasida istiqbolli tadqiqotlar bilan shug‘ullanadi.</li>
                        <li>suv havzalarini asrashda rivojlangan mamlakatlar tajribalarini o‘rganadi va mavjud usullarni qo‘llash ustida ilmiy tadqiqotlar olib boradi.</li>
                        <li>Respublikaning ishlab chiqarish tarmoqlarida xosil bo‘ladigan turli oqova suvlar tarkibini o‘rganadi, tozalash texnologiyalarini yaratadi va shartnoma asosida qayta ishlash bo‘yicha tavsiyalar beradi.</li>
                        <li>biologik xilmaxillikni saqlash masalalari bo‘yicha talab va standartlarni ishlab chiqishda ishtirok etadi;</li>
                        <li>turli sanoat korxonalari tozalash inshootlarini loyihalash jarayonlari uchun shartnoma asosida tavsiyalar ishlab chiqadi.</li>
                        <li>sanoat oqova suvlarini zamonaviy va kombinirlangan usullarda tozalash texnologiyalari ustida ilmiy tadqiqotlar olib boradi, tadqiqot natijalarini ilmiy jurnallarda nashr etadi.</li>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFix" aria-expanded="false" aria-controls="collapseFix">
                    “Atmosfera havosini muhofaza qilish” laboratoriyasi
                    </button>
                    </h2>
                    <div id="collapseFix" className="accordion-collapse collapse" aria-labelledby="headingFix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Laboratoriya quyidagi vazifalarni bajaradi:</h4>
                        <li>atmosfera havosining ifloslanishini kamaytirishni ta’minlovchi mutlaqo yangi va samarali uslub va texnologiyalarni ishlab chiqadi;</li>
                        <li>atmosfera havosini muhofaza qilish sohasidagi ilg‘or xorijiy texnologiyalar va innovatsiyalarni moslashtirish va amaliyotga tatbiq etadi;</li>
                        <li>atmosfera havosini muhofaza qilish masalalari bo‘yicha talab va standartlarni ishlab chiqishda ishtirok etadi;</li>
                        <li>atmosfera havosini muhofaza qilish sohasida xorijiy ilmiy-tadqiqot muassasalari va markazlari bilan hamkorlikni rivojlantirishda, ilmiy konferensiyalarda, seminarlarda, qo‘shma tadqiqotlarda, loyihalarda, xodimlarning malakasini oshirish va ularni o‘qitishni tashkil etishda ishtirok etadi;</li>
                        <li>xalqaro standartlar darajasida yuqori malakali kadrlar tayyorlash, ekologiya va atrof-muhitni muhofaza qilish sohasidagi oliy o‘quv muassasalari o‘qituvchilari hamda mutaxassislarini qayta tayyorlash va ularning malakasini oshirishda ishtirok etadi.</li>
                        
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    “Chiqindilarni qayta ishlash va utilizatsiya qilish” laboratoriyasi
                    </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Laboratoriya quyidagi vazifalarni bajaradi:</h4>
                        <li>chiqindilarni hosil bo‘lishini oldini olish, kamaytirish qayta ishlash, utilizatsiya qilish, ularning atrof-muhit va tabiatga ta’sirini oldini olish bo‘yicha innovatsion va amaliy tadqiqotlarni amalga oshiradi;</li>
                        <li>chiqindilarini qayta ishlash va utilizatsiya qilishni ta’minlovchi yangi samarali uslub va texnologiyalarni ishlab chiqadi;</li>
                        <li>ishlab chiqarish va ist’emol chiqindilarini qayta ishlash sohasini tartibga solish tajribasini o‘rganish va ilg‘or xorijiy texnologiyalar asosida tadqiqotlarni amalga oshirish va amaliyotga tadbiq etish bo‘yicha tavsiyalar ishlab chiqadi;</li>
                        <li>atrof muhitni muhofaza qilish va ekologik xavfsizlikni ta’minlash bo‘yicha maqsadli dasturlarni amalga oshiradi, davlat dasturlarini ishlab chiqishda ishtirok etadi;</li>
                        <li>chiqindilarini qayta ishlash va utilizatsiya qilish sohasiga qaratilgan ilmiy seminarlar, konferensiyalar, qo‘shma tadqiqotlar ishtirok etadi va tadbirlarni amalga oshiradi.</li>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Ekotizim xizmatlari va normativ hujjatlarni ishlab chiqish bo‘limi
                    </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Bo‘lim quyidagi vazifalarni bajaradi:</h4>
                        <li>respublikada ekologik holatni yaxshilash, ekologik xavfsizlikni ta’minlash maqsadida ilmiy-tadqiqot ishlari natijalarni amaliy tajribalar bilan muvofiqlashtirish orqali ekotizim xizmatlari bo‘yicha va sohaga oid normativ hujjatlar loyihalarini tayyorlaydi.</li>
                        <li>ekotizim xizmatlarini amalga oshirish orqali atrof-muhitni muhofaza qiladi;</li>
                        <li>ekotizim xizmatlarini amalga oshirishni xalqaro talablar darajasiga yetkazish choralarini ko‘radi;</li>
                        <li>tizimga aloqador bo‘lgan va Institut zimmasiga yuklatilgan uzoq muddatli, o‘rta va qisqa muddatli ichki va davlat maqsadli dasturlari hamda davlatlararo maqsadli dasturlarni shakllantirishga ishtirok etadi;</li>
                        <li>tabiatni muhofaza qilish va ulardan oqilona foydalanish va ekotizim xizmatlari sohasiga oid qo‘llanma, metodolgiya hamda normativ-huquqiy hujjatlarni ishlab chiqishda ishtirok etadi;</li>
                        <li>tabiatni muhofaza qilish va ulardan oqilona foydalanish va ekotizim xizmatlari sohasidagi ma’lumotlar bazasini va axborotlashtirish tizimining uzluksizligini ta’minlash, shu jumladan, bu boradagi loyihalarni ishlab chiqilishida hamda amaliyotga tadbiq etilishida faol ishtirok etadi.</li>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    “Ekologik ta’lim va targ‘ibot” bo‘limi
                    </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h4>Bo‘lim quyidagi vazifalarni bajaradi:</h4>
                        <li>aholining ekologik madaniyatini yanada oshiradigan istiqbolli tadqiqotlar bilan shug‘ullanadi;</li>
                        <li>tabiiy resurslardan oqilona foydalanish muammolari bo‘yicha ilmiy-amaliy konferensiyalar tashkil etadi;</li>
                        <li>hududiy ekologiya va atrof muhitni muhofaza qilish boshqarmalari bilan hamkorlikda joylardagi maktabgacha ta’lim tashkilotlari hamda umumiy o‘rta va o‘rta maxsus ta’lim muassasalarida ekologik ta’limni rivojlantitish bo‘yicha seminar va davra suhbatlarini tashkil qiladi;</li>
                        <li>muhim ekologik sanalarga bag‘ishlangan tadbirlarni tashkil etadi;</li>
                        <li>ekologik muammolar va ularning yechimlari bilan bog‘liq mavzular bo‘yicha materiallar tayyorlaydi;</li>
                        <li>ekologik madaniyat va ekologik savodxonlikni baholovchi ilmiy-tadqiqotlar olib boradi.</li>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    <Footer/>
    </>
  );
}

export default Labaratoriya;