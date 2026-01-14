"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async() => {
	const products = await dbConnect("products").find().toArray();
	return products;
};

export const getTopProducts = async() => {
	const products = await dbConnect("products").find().sort({rating: -1}).limit(6).toArray();
	return products;
}

export const getLatestProducts = async() => {
	const products = await dbConnect("products").find().sort({createdAt: -1}).limit(6).toArray();
	return products;
}

export const getSingleProduct = async(id) => {
	if (id.length != 24) {
		return {};
	}
	const query = { _id: new ObjectId(id) };

	const product = await dbConnect("products").findOne(query);

	return { ...product, _id: product._id.toString() } || {};
};

export const postProduct = async(product) => {
	const newProduct = {
		...product,
		createdAt: new Date().toISOString(),
	}

	const result = await dbConnect("products").insertOne(newProduct);
	if(result.acknowledged){
        return{
            success: true,
            message: `Product added successfully.`
        };
    }
    else{
        return{
            success: false,
            message: "Something went wrong. Try again."
        };
    }
}
