"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/myButton";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define validation schema using zod
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(3, "Zip code is required"),
  address1: z.string().min(5, "Address is required"),
  address2: z.string().optional(),
  billingSameAsShipping: z.boolean().optional(),
});

// Props include a callback for form submission
const CheckOutForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  // Initialize the form with default values and schema validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      country: "",
      city: "",
      zipCode: "",
      address1: "",
      address2: "",
      billingSameAsShipping: false,
    },
  });

  // Handle form submission and pass data to parent component
  const handleSubmitForm = (data: any) => {
    console.log("Checkout Form Data:", data);
    console.log("first");
    onSubmit(data);
  };

  return (
    <div className="bg-white text-black my-20 mx-6">
      <h1 className="font-bold text-xl mb-5">Shipping Address</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {/* First Name Field */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter your first name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name Field */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Enter your email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Field (Optional) */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <Input
                  placeholder="Enter your company name (optional)"
                  {...field}
                />
              </FormItem>
            )}
          />

          {/* Country Field using a Select component */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Your Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="USA">
                      United States Of America
                    </SelectItem>
                    <SelectItem value="Turkey">Turkey</SelectItem>
                    <SelectItem value="China">China</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Field using a Select component */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Your City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pakistan" disabled>
                      Pakistan
                    </SelectItem>
                    <SelectItem value="Karachi">Karachi</SelectItem>
                    <SelectItem value="Islamabad">Islamabad</SelectItem>
                    <SelectItem value="Lahore">Lahore</SelectItem>
                    <SelectItem value="Peshawar">Peshawar</SelectItem>
                    <SelectItem value="United States Of America" disabled>
                      United States Of America
                    </SelectItem>
                    <SelectItem value="NewYork">New York</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="WashingtonDC">Washington DC</SelectItem>
                    <SelectItem value="China" disabled>
                      China
                    </SelectItem>
                    <SelectItem value="WashingtonDC">Beijing</SelectItem>
                    <SelectItem value="WashingtonDC">Shanghai</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Zip Code Field */}
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <Input placeholder="Enter your zip code" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address 1 Field */}
          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 1</FormLabel>
                <Input placeholder="Enter your address" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address 2 Field (Optional) */}
          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 2</FormLabel>
                <Input
                  placeholder="Enter additional address details (optional)"
                  {...field}
                />
              </FormItem>
            )}
          />

          {/* Checkbox for "Same as shipping address" */}
          <FormField
            control={form.control}
            name="billingSameAsShipping"
            render={({ field }) => (
              <FormItem className="lg:col-span-2 flex items-center space-x-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FormLabel>Same as shipping address</FormLabel>
              </FormItem>
            )}
          />

          {/* Navigation Buttons */}
          <Button
            title="< Back to Cart"
            xpadding="px-10"
            ypadding="py-2"
            width="w-full"
          />
          <Button
            title="Proceed to Payment >"
            xpadding="px-10"
            ypadding="py-2"
            width="w-full"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
};

export default CheckOutForm;
