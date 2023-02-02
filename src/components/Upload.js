import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("picture", image, image.name);
      formData.append("desc", description);
      formData.append("name", title);
      formData.append("price", price);
      formData.append("cat", category);

      let res = await axios.post(
        "http://localhost:3000/images/upload",
        formData
      );
      console.log(res);
      setError(false);
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

  return (
    <>
      <h3>Upload Image</h3>

      <div className="form-group">
        <label htmlFor="desc">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          className="form-control-title"
          required
          id="desc"
        />
      </div>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            className="form-control"
            required
            id="desc"
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            value={price}
            className="form-control-price"
            required
            id="desc"
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Category</label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            value={category}
            className="form-control-category"
            required
            id="desc"
          />
        </div>

        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="custom-file-input"
              id="image"
            />

            <label className="custom-file-label" htmlFor="image">
              {image ? fileData() : "Choose File"}
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {error ? (
          <div className="text-danger">
            {" "}
            Some error ocurred uploading the file{" "}
          </div>
        ) : null}
      </form>

      <button onClick={handleClose}>Close</button>
    </>
  );
}
