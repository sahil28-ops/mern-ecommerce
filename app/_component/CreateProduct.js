"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  useEffect(() => {
    const fetchCategory = async () => {
      let response = await fetch(`http://localhost:3001/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      let data = await response.json();
      setCategories(data.categories);
    };
    fetchCategory();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((product) => ({
      ...product,
      [name]: value,
    }));
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, price } = product;
    const response = await axios.post(`http://localhost:3001/product`, {
      name,
      description,
      price,
    });
    if (response.data.success) {
      console.log(response.data.message);
    } else if (response.data.message) {
      console.log(response.data.message);
    }
    setProduct({ name: "", description: "", price: "" });
  };
  console.log(categories);
  console.log(category);
  console.log(product);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter product description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />

        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />

        <Form.Select
          aria-label="Select category"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Open this select menu</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Select>

        <Button variant="primary" type="submit" className="mt-4">
          Add Product
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
