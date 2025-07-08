https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql
https://www.youtube.com/watch?v=8UcaOZyAT3E&list=PLRAV69dS1uWRH0QDzQaKLQEYD26YCQ5eS&t=2115s

npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
npx prisma format

npx prisma migrate dev --name init "create table and its colums from schema"
npx prisma db push

npm install prisma @prisma/client
npx prisma generate

vercel
vercel env pull .env

npm install svix
npm install -g localtunnel
to start ==> lt --port 8000
