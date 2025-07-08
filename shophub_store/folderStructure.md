link : https://www.figma.com/design/zcuvkUTQoPsYnyvLvOL49Q/Ecommerce-Desktop-Website.--Community-?node-id=0-1&p=f&t=PNwzBSfle0cO7ns2-0

ecommerce-template/
├── app/
│   ├── (routes)/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── my-account/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   └── page.tsx       # Home page
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── (ui)/              # Design System (from shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── (shared)/          # Global reusable components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── cart-sidebar.tsx
│   ├── (products)/        # Domain-specific components
│   │   ├── product-detail.tsx
│   │   ├── product-grid.tsx
│   │   ├── product-filters.tsx
│   │   ├── related-products.tsx
│   │   └── featured-products.tsx
│   └── (marketing)/       # Hero, newsletter etc.
│       ├── hero.tsx
│       └── newsletter.tsx
├── constants/
│   └── index.ts           # Any enums, app constants (e.g., currency, filters, API routes)
├── hooks/
│   ├── use-mobile.ts
│   ├── use-toast.ts
│   └── use-cart.ts        # Custom domain hooks can go here
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── api.ts             # API client (axios/fetch helpers)
│   └── validations.ts     # zod or yup schemas
├── services/
│   └── product.service.ts # Fetching from backend or CMS (can be separated per domain)
├── middleware.ts          # For Next.js middleware usage (auth, redirects)
├── public/
│   └── images/
│       └── logo.png
├── types/
│   └── index.ts           # Global TypeScript types/interfaces
├── env.d.ts               # For environment variable typing
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
