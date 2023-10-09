# node-sequelize

npm i express express-session memorystore sequelize mysql2 sequelize-cli sequelize-auto
-g nodemon

기본 폴더 생성
npx sequelize init

auto 생성 예시
npx sequelize-auto -o "./models" -d class -h "localhost" -u "root" -p "3306" -x "root" -e mysql
