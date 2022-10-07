import "./propertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="A Warm Hotel Room"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>250 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1478707734876-10bbf5b7a44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="A Cosy Apartment"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>200 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="A Beautiful Resort"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>70 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="A Luxurious Villa"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>50 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="A Cabin In Nature"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>20 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
