- Para rodar o server:

npm run start | nodemon server.js

- Para rodar a query e gerar a table caso o user for postgres e o banco 'testeiuptec':

npm run table

- Para rodar a query e gerar a table de usuarios e bancos com nomes diferentes:

psql -h localhost -U <nome usuario postgres> -d <nome banco de dados> -f table.sql