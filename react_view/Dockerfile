# ベースイメージの作成
FROM node:12.16.1
# コンテナ内で作業するディレクトリを指定
WORKDIR /app/react-project
COPY ./react-project/ /app/react-project
RUN npm install \
    npm install @material-ui/core \
    npm install @material-ui/icons \
    npm install axios \
    npm install react-router-dom
