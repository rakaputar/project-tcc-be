FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @google-cloud/storage
# RUN node seed.js
EXPOSE 5000
CMD ["node", "seed.js"]
CMD ["node", "index.js"]