import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import '../css/index.css'



function LoyihalarItem(props) {
  return (
    <div className="container mt-5 text-start">
        <div className="row w-100">
            <div className="col-5 text-end">
                <img alt="img error" className="img-fluid loyiha-item-img" src={props.new.img} />
            </div>
            <div className="col-5">
                <p>{props.new.data}</p>
                <h4>{props.new.info}</h4>
            </div>
        </div>
    </div>
  );
}

export default LoyihalarItem;