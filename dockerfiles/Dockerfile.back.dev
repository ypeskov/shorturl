FROM node:lts-hydrogen

WORKDIR /app

RUN npm install -g @nestjs/cli@8.0.0

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:debug"]
# CMD ["bash"]