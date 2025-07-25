## Brand
brand->{
       _id,
       name,
       description,
       btnText,
       "slug": slug.current,
       "image": image.asset->url,
       "logo": logo.asset->url,
        brandCategory[]->{
         _id,
          title,
          slug },
        isFeatured,
        isPremium,
        founded,
        country,
        priceRange,
        specialties,
        productCount
        },

## // Example GROQ query for fetching products
*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  price,
  originalPrice,
  discount,
  btnText,
  description,
  productDescription,
  isNew,
  isOnSale,
  rating,

  // Main image
  "image": image.asset->url,

  // Gallery images
  "images": images[].asset->url,
                        }

## Colors
  colors[]->{
    _id,
    productColor,
    hex,
  },

  ##  Gender Categories
  genderCategories[]->{
                        _id,
                        title,
                        slug  
                        },
             
##   // Type Categories
  typeCategories[]->{
    _id,
    title,
    slug
  },

##   // Sizes
  sizes[]->{
    _id,
productSize  },


##  // FAQ
  faq[]->{
    _id,
    question,
    answer
  }
