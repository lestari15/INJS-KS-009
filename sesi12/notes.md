1. GraphQL untuk memudahkan proses pengambilan data  atau pengiriman data
2. Squelize ORM object relational mapping

1. intall sequelize sequelize-cli pg
2. panggil diterminal npx sequelize init
3. atur config.json - development - user dan pass dari postgres, dan bisa membuat db baru.
4. jalan kan lagi npx sequelize db:create
5. npx sequelize model:generate --name<nama PascalCase singular/tunggal>-- atributes<nama properti>:<type>
6. npx sequelize db:migrate
7.npx sequelize-cli seed:generate --name demo-user
8. npx sequelize db:seed
atur seeders
npx sequelize db:seed --seed 2021107131500-data-users
npx sequelize db:seed:all

alter table
npx sequelize migration:generate --name add-age
npx sequelize db:migrate

npx sequelize model:generate --name create_password_for_user_table
