import Header from '../Main-Page/header.js';
import Tuzilma from '../Main-Page/Tuzilma/index.js';
import Vazifafunksiyalar from '../Main-Page/vazifa-funksiyalar/index.js';
import Labaratoriya from '../Main-Page/Labaratoriya/index.js';
import News from '../News/index';
import XorijiyHamkorlik from '../hamkorlik/horijiy-hamkorlik.js';
import Loyihalar from '../hamkorlik/loyihalar.js';
import IlmiyKengash from '../Ilmiy-Kengash/index.js';
import IlmiyJural from '../Ilmiy-Jurnal/ilmiy-jurnal.js';
import QizilKitob from '../OnlaynKutubxona/qizil-kitob.js';
import Kitoblar from '../OnlaynKutubxona/kitoblar.js';
import Hujjatlar from '../OnlaynKutubxona/hujjatlar.js';
import MaqolaChopEtish from '../Ilmiy-Jurnal/maqolaChopEtish.js';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function Link() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Header/>} />
      {/* <Route path='/' element={<IlmiyJural/>} /> */}
      <Route path='/tuzilma' element={<Tuzilma/>} />
      <Route path='/vazifa' element={<Vazifafunksiyalar/>} />
      <Route path='/labaratoriya' element={<Labaratoriya/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/xorijiyhamkorlik' element={<XorijiyHamkorlik/>} />
      <Route path='/loyihalar' element={<Loyihalar/>} />
      <Route path='/labaratoriya' element={<Labaratoriya/>} />
      <Route path='/ilmiyKengash' element={<IlmiyKengash/>} />
      <Route path='/ilmiyJunal' element={<IlmiyJural/>} />
      <Route path='/maqolaChopEtish' element={<MaqolaChopEtish/>} />
      <Route path='/qizilkitob' element={<QizilKitob/>} />
      <Route path='/kitoblar' element={<Kitoblar/>} />
      <Route path='/hujjatlar' element={<Hujjatlar/>} />
      <Route path='/BoshSahifa' element={<Header/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default Link;