FROM node:19.0.0-bullseye AS Backend

WORKDIR /app/backend

COPY contatosBackend.js /app/backend

RUN npm install express
RUN npm install

EXPOSE 3412

CMD ["node", "contatosBackend.js"]