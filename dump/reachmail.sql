PGDMP                          r         	   reachmail    9.3.3    9.3.2 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           1262    16385 	   reachmail    DATABASE     {   CREATE DATABASE reachmail WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE reachmail;
             root    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    5            �           0    0    public    ACL     �   REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;
                  postgres    false    5            �            3079    11791    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    171            �            1259    16429    person    TABLE     )  CREATE TABLE person (
    accountid character varying(2044) NOT NULL,
    username character varying(2044) NOT NULL,
    password character varying(2044) NOT NULL,
    phone character varying(2044) NOT NULL,
    status character varying(2044) NOT NULL,
    sid character varying(2044) NOT NULL
);
    DROP TABLE public.person;
       public         root    false    5            G           2606    16439    person_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY person
    ADD CONSTRAINT person_pkey PRIMARY KEY (accountid);
 <   ALTER TABLE ONLY public.person DROP CONSTRAINT person_pkey;
       public         root    false    170    170           