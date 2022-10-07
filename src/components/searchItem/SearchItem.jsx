import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels/a");
  };

  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1600813547757-39c40da12c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">$150</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
