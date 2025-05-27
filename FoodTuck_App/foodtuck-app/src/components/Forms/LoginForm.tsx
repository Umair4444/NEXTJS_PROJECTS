// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter Valid email",
//   }),
//   password: z.string(),
// });

// export function LoginForm() {
//   // Initialize useForm with Zod resolver
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "", // Default value for the username field
//       email: "", // Default value for the email field
//       password: "",
//     },
//   });

//   const router = useRouter();

//   // Handle form submission
//   const onSubmit = async (data: any) => {
//     console.log("Form Submitted:", data);

//     try {
//       const res = await fetch(`/api/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to login");
//       }

//       const response = await res.json(); // ✅ Fix: Use `res.json()`

//       if (response.redirectUrl) {
//         router.push(response.redirectUrl);
//       }

//       console.log(response);
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="bg-[#EDEAE3] text-black  flex justify-center pb-10">
//       <div className="shadow-md shadow-slate-500 bg-white sm:w-2/3  md:w-3/5 lg:w-2/4">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-8  text-black flex flex-col my-10  "
//           >
//             <div className="flex flex-col justify-start gap-4 p-7">
//               <FormField
//                 control={form.control}
//                 name="username"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Your Name" className="" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>E-mail</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Your E-mail"
//                         className=""
//                         type="email"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Your Password"
//                         className=""
//                         type="password"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className="flex items-center justify-between mt-2">
//                 <h1 className="text-blue-500 hover:underline mx-3">
//                   <Link href={"/signup"}>I'm a New User! SignUp Now</Link>
//                 </h1>
//                 <h1 className="text-blue-500 hover:underline mx-3">
//                   <Link href={"/signup"}>Forget Password</Link>
//                 </h1>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="flex items-center self-center justify-center gap-5 border-2 py-2 px-3 w-1/3"
//             >
//               Submit
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string(),
});

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("Form Submitted:", data);

    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const response = await res.json();

      if (response.redirectUrl) {
        router.push(response.redirectUrl); // Handle successful login redirection
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-[#EDEAE3] text-black flex justify-center pb-10">
      <div className="shadow-md shadow-slate-500 bg-white sm:w-2/3 md:w-3/5 lg:w-2/4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-black flex flex-col my-10"
          >
            <div className="flex flex-col justify-start gap-4 p-7">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name"
                      type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your E-mail"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-blue-500 hover:underline mx-3">
                  <Link href="/signup">I am a New User! SignUp Now</Link>
                </h1>
                <h1 className="text-blue-500 hover:underline mx-3">
                  <Link href="/forgot-password">Forget Password</Link>
                </h1>
              </div>
            </div>

            <Button
              type="submit"
              className="flex items-center self-center justify-center gap-5 border-2 py-2 px-3 w-1/3"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
