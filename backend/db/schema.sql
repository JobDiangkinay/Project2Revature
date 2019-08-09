drop table if exists articles;
drop table if exists users;
drop table if exists persons;
create table persons(
    id serial primary key,
    firstname text not null,
    lastname text not null,
    phonenumber text not null,
    email text not null
);

create table users(
    id serial primary key,
    username text not null,
    usertype text not null,
    person integer REFERENCES persons(id) on delete cascade,
    saltpassword bytea not null,
    hashpassword bytea not null
   
);


create table articles(
    id serial primary key,
    title text not null,
    content text not null,
    date text not null,
    category text not null,
    status text not null,
    author_id INTEGER REFERENCES persons(id)
);
insert into persons(firstname,lastname,phonenumber,email) values('Job','Diangkinay','9494909895','jobdiangkinay@gmail.com');
insert into users(username,hashpassword,saltpassword,usertype,person) values ('kbui314','{88,-60,80,-58,82,-52,-50,-63,82,-52,-104,-95,15,17,89,23,91,122,118,-58,71,61,85,-4,-94,77,-55,-113,56,113,-12,-15,5,92,-119,-107,-95,120,28,-91,125,115,-114,32,-39,-57,-90,-30,-17,76,-11,55,115,-78,-87,-13,39,77,72,-57,18,-32,-36,-62}','{101,98,1,-42,-34,46,-127,113,127,99,8,110,-88}','user',1);
