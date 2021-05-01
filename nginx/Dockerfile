FROM nginx:1.15.8

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# Nginxの設定ファイルをコンテナにコピー
ADD nutfes-study-api.conf /etc/nginx/conf.d/nutfes-study-api.conf
ADD nutfes-study.conf /etc/nginx/conf.d/nutfes-study.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
