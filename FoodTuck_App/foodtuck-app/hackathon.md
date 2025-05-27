<!-- setup Sanity  -->
<!-- Get Data from your frontend(admin) to Sanity and then Sanity to frontend(user) -->

1. Get Secret key publish and token from sanity and make a .env.local file and paste the keys there for security purpose
2. now connect client.ts with .env.local
3. write your schema for the product and pass this schema in index.ts file of my chema folder
4. now get groq query from sanity using vision tab
5. Create a SanityFunc.ts for sending data to sanity here I write a code to make sure imagge is a valid image and data should match schema and slug cannot be empty cause it can crash app
6. Now make a form for frontend to submit your data from frontend to sanity and follow sanity scchema and converting number because when we submit form it converts everything to string and I am using number formula on fields such as price and discount during add to cart and checkout and i have define these fields as number in my schema
7. During Submitting the form I make sure that tiitle, price, description and image should be provided at least for better ui/ux
8. After Submitting it get store in Sanity studio and from there it get to my menu page.
9. To use this feature the user need to login as admin and for that he must give right credintals
   username == admin (required), password == admin (required) and email == admin@gmail.com is (optional)

   My liitle effort to make admin panel interactive for user to experience real world experience and products from frontend without using sanity studio.

<!-- Redux toolkit  -->

1. I am using redux toolkit for managing data across my app
2. to setup make a folder for redux and save all the files there 1. store 2.hooks 3.features 4.persists config 1. store will be like a store that saves all your slices(data) to be available in all parts of your apps 2. hooks and import data from store 3. feature here you will save your data that you want to access across the app 4. persists will store your data in local storage
   3.now there are two methods useSelector and useDispatch
   useSelector will get the data from store into your component just like prop drilling
   useDispatch will dispatch will send data to your store after performing a event like submitting and that data can be store in store for accessing it globally like I did it with ADD TO CART and CHECKOUT PAGE and FETCHING DATA FROM SANITY

<!-- Login Form using Shadcn form using react-hook-form and Zod for validation -->

1. Install shadcn form using shadcn library
2. zod help in validation like using of how many character a user can enter , fields type ,
3. react-hook-form helps in input tracking and assign type to input fields
4. write your on submit fuction that is when user submit data it get store somewhere in my case i store in a api using post method
5. make an api in api==>login==>route.ts for login api
6. here I made a condition that only if user provide admin as username and password and I am saving this in cookies and
   when user enter right credintals it will be redirected towards admin page
7. I am using middleware for users to not enter admin panel without login as admin and redirect all users to home
8. Only admin can add products to sanity.

<!-- CLOUDINARY  -->

1. The user selects an image file to upload via the avatar input.
2. The handleAvatarChange function generates a preview and uploads the image to Cloudinary.
3. The uploadToCloudinary function handles the upload to Cloudinary and returns the image's secure URL.
4. The form's avatar field is updated with the Cloudinary URL.
5. The file input is reset to allow for further image selections.
