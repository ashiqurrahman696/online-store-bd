"use client";
import { postProduct } from '@/actions/server/product';
import { showAlert } from '@/utils/showAlert';
import React from 'react';

const AddProductForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            title: form.title.value,
            category: form.category.value,
            price: Number(form.price.value),
            stock: Number(form.stock.value),
            rating: Number(form.rating.value),
            imageURL: form.imageURL.value,
            description: form.description.value,
        }
        if (!formData.title ||
            !formData.category ||
            !formData.price ||
            !formData.stock ||
            !formData.rating ||
            !formData.imageURL ||
            !formData.description
        ){
            return showAlert("Error", "Please fill up all fields", "error");
        }
        const result = await postProduct(formData);
        if (!result.success) {
            return showAlert("Error", result.message, "error");
        }
        showAlert("Success", result.message, "success");
    }
    return (
        <div className="min-h-[calc(100vh-76px)] flex justify-center items-center p-6">
            <div className="card bg-base-300 w-full max-w-2xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Add Product</h2>
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="label mb-1">Title</label>
                            <input type="text" name="title" className="input w-full" placeholder="Title" />
                        </div>
                        <div>
                            <label className="label mb-1">Category</label>
                            <select type="text" name="category" className="select w-full">
                                <option value="" selected disabled>Choose Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Smartphone">Smartphone</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Sports">Sports</option>
                                <option value="Foods">Foods</option>
                                <option value="Home">Home</option>
                                <option value="Job">Job</option>
                                <option value="Service">Service</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="label mb-1">Price</label>
                            <input type="text" name="price" className="input w-full" placeholder="Price" />
                        </div>
                        <div>
                            <label className="label mb-1">Stock</label>
                            <input type="text" name="stock" className="input w-full" placeholder="Stock" />
                        </div>
                        <div>
                            <label className="label mb-1">Rating</label>
                            <input type="text" name="rating" className="input w-full" placeholder="Rating" />
                        </div>
                        <div>
                            <label className="label mb-1">Image URL</label>
                            <input type="text" name="imageURL" className="input w-full" placeholder="Image URL" />
                        </div>
                        <div className="col-span-full">
                            <label className="label mb-1">Description</label>
                            <textarea name="description" className="textarea w-full resize-none" rows={5} placeholder="Description" />
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-info btn-block mt-4">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;