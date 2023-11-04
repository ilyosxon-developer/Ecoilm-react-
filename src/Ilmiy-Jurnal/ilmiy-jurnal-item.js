import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'



function IlmiyJuralItem(props) {
  return (
    <div className="container mt-5 text-start">
        <div className="row w-100">
            <div className="col-5 text-end">
                <img alt="img error" className="img-fluid loyiha-item-img" src={props.jurnal.img} />
            </div>
            <div className="col-5">
                <small>{props.jurnal.data}</small> <br/>
                <h4 style={{color:"#33691e"}}>{props.jurnal.title}</h4>
                <p>{props.jurnal.info}</p>
                <p>File turi{props.jurnal.file}</p>
            </div>
        </div>
    </div>
  );
}

export default IlmiyJuralItem;