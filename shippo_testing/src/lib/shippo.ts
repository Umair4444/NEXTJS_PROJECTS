// import { Shippo } from "shippo";

// const shippo_token = process.env.SHIPPO_API_TOKEN;

// if (!process.env.SHIPPO_API_TOKEN) {
//   throw new Error("SHIPPO_API_TOKEN is required");
// }

// const shippoClient = new Shippo({ apiKeyHeader: shippo_token });

// export { shippoClient };

// // Helper function to create address object
// export const createAddress = (addressData: {
//   name: string;
//   street1: string;
//   street2?: string;
//   city: string;
//   state: string;
//   zip: string;
//   country: string;
//   phone?: string;
//   email?: string;
// }) => {
//   return {
//     name: addressData.name,
//     street1: addressData.street1,
//     street2: addressData.street2 || "",
//     city: addressData.city,
//     state: addressData.state,
//     zip: addressData.zip,
//     country: addressData.country,
//     phone: addressData.phone || "",
//     email: addressData.email || "",
//   };
// };

// // Helper function to create parcel object
// export const createParcel = (parcelData: {
//   length: number;
//   width: number;
//   height: number;
//   weight: number;
//   distanceUnit?: "in" | "cm";
//   massUnit?: "lb" | "kg";
// }) => {
//   return {
//     length: parcelData.length.toString(),
//     width: parcelData.width.toString(),
//     height: parcelData.height.toString(),
//     weight: parcelData.weight.toString(),
//     distance_unit: parcelData.distanceUnit || "in",
//     mass_unit: parcelData.massUnit || "lb",
//   };
// };


import { Shippo } from 'shippo';

if (!process.env.SHIPPO_API_TOKEN) {
  throw new Error('SHIPPO_API_TOKEN is required');
}

const shippoClient = new Shippo({
  apiKeyHeader: process.env.SHIPPO_API_TOKEN,
});

export { shippoClient };