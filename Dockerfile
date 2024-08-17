# Dockerfile for English version(locale) of the site
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that Docusaurus uses
EXPOSE 3000

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
