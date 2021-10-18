CREATE table "User" (
	id serial primary key,
	nama varchar not null,
	umur integer,
	is_active boolean
);

INSERT INTO "User" (nama, umur, is_active) values ('Lestari', 20, true);

SELECT * FROM "User";


CREATE table "Registrasi" (
	id_registrasi serial primary key,
	nama varchar not null,
	umur integer,
	password varchar,
	status_regis boolean
);

SELECT * FROM "Registrasi";