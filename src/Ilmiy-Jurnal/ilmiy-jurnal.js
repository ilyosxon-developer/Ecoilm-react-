import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'
import IlmiyJuralItem from "./ilmiy-jurnal-item";
let item1 = {
  img: "http://ecoilm.uz/static/images/shortan-neft.jfif",
  data: "2021 yil",
  title:"Sho‘rtan neft va gaz qazib chiqarish boshqarmasi (SHNGQB) hududidan chiqadigan",
  info: "Sho‘rtan neft va gaz qazib chiqarish boshqarmasi (SHNGQB) hududidan chiqadigan organik birikmalar bilan ifloslangan oqova suvlarni biologik usulda tozalash.",
  file:"DDC"
}
function IlmiyJural() {
  return (
    <>
    <Navbar/>
       <div className="container-fluid news-header text-start d-flex align-items-center">
            <div>
                 <h1 className="text-light ">Barcha Loyihalar</h1>
                 <a href="" className="h4 text-light news-p">Institut :</a>
                 <a href="" className="h4 text-light news-p"> Ilmiy Jurnal</a>
            </div>
       </div> 
       <h1>Atrof-muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot instutining Ilmiy Jurnallari</h1>
       <IlmiyJuralItem jurnal={item1} />
    <Footer/>
    </>
  );
}

export default IlmiyJural;