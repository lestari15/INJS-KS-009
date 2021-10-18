create table "Kategori" (
	id serial primary key,
	nama varchar
);
-- membuat table
create table "Barang" (
	id serial primary key,
	nama varchar(255),
	harga float,
	stok integer,
	categori_id integer references "Kategori"(id)
);

alter table "Barang" add column "is_active" boolean;

insert into "Penjualan_buku" (nama, harga, stok, is_active, categori_id) values 
('Habis Gelap Terbitlah terang', 30000, 10, true, 1),
('abc', 20000, 5, true, 2),
('defgh', 50000, 0, false, 1);

insert into "Barang" (nama, harga, stok, is_active, category_id)
('ROG', 10000, 0, false, 1),
('ZARA baby', 20000, 5, true, 2),
('Erigo', 50000, 50, true, 3);


create table "Jenis"(
	id serial primary key,
	nama varchar
);

create table "Penjualan_buku" (
	id serial primary key,
	nama varchar(255),
	harga float,
	stok integer,
	categori_id integer references "Jenis"(id)
);

insert into "Penjualan_buku" (nama, harga, stok, is_active, categori_id) values 
('Habis Gelap Terbitlah terang', 30000, 10, true, 1),
('abc', 20000, 5, true, 2),
('defgh', 50000, 0, false, 3);

create table "Jenis"(
	id serial primary key,
	nama varchar
);

insert into "Jenis" (nama) values 
('Novel'),
('Komik')
;

create table "Penjualan_buku" (
	id serial primary key,
	nama varchar(255),
	harga float,
	stok integer,
	categori_id integer references "Jenis"(id)
);

insert into "Penjualan_buku" (nama, harga, stok, is_active, categori_id) values 
('Habis Gelap Terbitlah terang', 30000, 10, true, 1),
('abc', 20000, 5, true, 2),
('defgh', 50000, 0, false, 3);

select * from "Penjualan_buku";

create table "Satu_lagi"(
	nama varchar
);

drop table "Satu_lagi";

update "Penjualan_buku" set "stok" = 3;

delete from "Penjualan_buku" where is_active = false;