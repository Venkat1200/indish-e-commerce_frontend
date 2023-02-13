import { useState } from "react";
import "./upload.css";

export default function Upload({ setSignal, signal, user }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [articleTitle, setArticleTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");

  const url1 = "https://indish-e-commerce.onrender.com";
  const url2 = "http://localhost:3000";

  const resetForm = () => {
    setImage(null);
    setArticleTitle("");
    setPrice(0);
    setCategory("");
    setSignal(!signal);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("picture", image, image.name);

      formData.append("articleTitle", articleTitle);
      formData.append("price", price);
      formData.append("category", category);

      let res = await fetch(url2 + "/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });

      if (res.ok) {
        setError(null);
        resetForm();
        alert("Article successfully uploaded");
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const fileData = () => {
    if (image)
      return (
        <h5>
          {" "}
          <em> {image.name} </em>{" "}
        </h5>
      );

    return null;
  };

  const options = ["Decor", "paintings", "Kitchen and Dining", "Jewellery"];
  console.log("HHHHHH", category);
  return (
    <>
      <div className=" upload-container">
        <center>
          <div className="upload-center">
            <form className="form-container" onSubmit={onSubmit}>
              <h1>Upload your Product</h1>
              <div className="form-group">
                <label htmlFor="desc">Title : </label>
                <input
                  onChange={(e) => setArticleTitle(e.target.value)}
                  type="text"
                  value={articleTitle}
                  className="emailnput"
                  id="desc"
                  placeholder="Enter your Title"
                  required="required"
                />
              </div>

              <div className="form-group">
                <label htmlFor="desc">Price : </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  value={price}
                  className="emailnput"
                  id="desc"
                  placeholder="Enter Amount"
                  required="required"
                />
              </div>

              <div className="form-group">
                <label htmlFor="desc">Category : </label>

                <select
                  className="emailnput"
                  id="exampleFormControlSelect1"
                  name="platform"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option selected value="">
                    select a category
                  </option>
                  {options.map((value) => (
                    <>
                      <option value={value} key={value}>
                        {value}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="custom-file-input"
                    id="image"
                  />

                  <label className="emailnput " htmlFor="image">
                    {image ? fileData() : ""}
                  </label>
                </div>
              </div>

              <button className="sub-btn" type="submit">
                Submit
              </button>

              {error ? (
                <div className="text-danger">
                  Some error ocurred uploading the file
                </div>
              ) : null}
            </form>
          </div>
        </center>
      </div>
    </>
  );
}
