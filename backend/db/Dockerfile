FROM postgres:10
ENV POSTGRES_USER projecttwodb
ENV POSTGRES_PASSWORD password
ADD schema.sql /docker-entrypoint-initdb.c
EXPOSE 5432