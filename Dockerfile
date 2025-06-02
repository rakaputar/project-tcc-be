# Gunakan image Node.js resmi
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Salin package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Salin semua source code ke container
COPY . .

# Set port yang digunakan oleh aplikasi (harus cocok dengan yang digunakan di app)
ENV PORT=8080

# Jalankan server
CMD [ "node", "app.js" ]
