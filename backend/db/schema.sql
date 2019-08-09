drop table user if exists;
drop table person if exists;
drop table article if exists;

create table user(
    id primary key serial,
    username text not null,
    hashpassword bytea not null,
    saltpassword bytea not null,
    usertype text not null,
);

create table person(
    person_id primary key serial,
    firstname text not null,
    lastname text not null,
    phonenumber text not null,
    email text not null
    user_id INTEGER REFERENCES user(id)
);

create table article(
    article_id serial primary key,
    title text not null,
    content text not null,
    author text not null,
    date text not null,
    category text not null,
    status text not null,
    author_id INTEGER REFERENCES person(person_id);
);

