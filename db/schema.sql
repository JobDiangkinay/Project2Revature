drop table if exists users;
drop table if exists persons;
drop table if exists articles;

create table users(
    id serial primary key,
    username text not null,
    hashpassword bytea not null,
    saltpassword bytea not null,
    usertype text not null
);

create table persons(
    id serial primary key,
    firstname text not null,
    lastname text not null,
    phonenumber text not null,
    email text not null,
    user_id INTEGER REFERENCES users(id)
);

create table articles(
    id serial primary key,
    title text not null,
    content text not null,
    author text not null,
    date text not null,
    category text not null,
    status text not null,
    author_id INTEGER REFERENCES persons(id)
);