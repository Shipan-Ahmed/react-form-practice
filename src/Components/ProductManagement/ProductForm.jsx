import React from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const submitHandler = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const productDetails = {
            name, 
            price, 
            quantity
        }
        // console.log(productDetails);
        handleAddProduct(productDetails);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder='product name' id="" />
                <br />
                <input type="text" name="price" placeholder='product price' id="" />
                <br />
                <input type="text" name="quantity" placeholder='product quantity' id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;