import React, { useState } from "react";

const Assignment = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [sortorder,SetsortOrder] = useState("")

  const ApiCall = async () => {
    if (search.trim() === "") {

      alert("Please enter a product name");
      return;
    }
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  const sort  = (e) => {
    const order = e.target.value;
    SetsortOrder(order);

    const sortedorder = [...products].sort((a,b) => {
        if(order === "low"){
            return a.price - b.price;
        }else{
            return b.price - a.price;
        }
    });
    setProducts(sortedorder);
  }



  return (

    <div>

      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={ApiCall}>Search</button>
      <select value={sortorder} onChange={sort}>

        <option value="">Sort By Price</option>

        <option value="low">Low to High</option>

        <option value="high">High to Low</option>

      </select>
        <div

        style={{

          display: "flex",

          flexWrap: "wrap",

          gap: "20px",

          marginTop: "20px",

        }}

      >

      {products.map((product) => (
        <div key={product.id}
         style={{

              border: "1px solid black",

              width: "220px",

              padding: "10px",

              textAlign: "center",

              borderRadius: "10px",

            }}>

          <img src={product.thumbnail} alt={product.title} width="150" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          </div>
      ))}
</div>

        </div>



    </div>

  );

};

export default Assignment;