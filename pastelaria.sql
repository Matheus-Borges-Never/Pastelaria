create database pastelaria

create table gestao(
id_gestor int primary key identity(1,1),
emailGestor varchar (70) not null,
senha varchar (70) not null
)

create table usuarios(
id_usuario int primary key identity(1,1),
nome varchar (70) not null,
emailUsuario varchar (70) not null,
senha varchar (70) not null,
dataNascimento date not null,
telFixo numeric (12),
celular numeric (13) not null,
uf char (2) not null,
cidade varchar (50) not null,
bairro varchar (50) not null,
rua varchar (50) not null,
complemento varchar (30),
numero varchar (6) not null,
cep numeric (8) not null,
foto varchar (200) 
)

create table tarefas(
id_tarefa int primary key identity(1,1),
tarefa varchar (200) not null,
id_gestor int not null,
id_usuario int not null
)

alter table tarefas
add constraint FK_gestao
foreign key (id_gestor)
references gestao(id_gestor)

alter table tarefas
add constraint FK_usuarios
foreign key (id_usuario)
references usuarios(id_usuario)

insert into gestao (emailGestor,senha) 
values ('opotunidades@smn.com.br',' teste123')

insert into usuarios (nome,emailUsuario,senha,dataNascimento,telFixo,celular,uf,cidade,bairro,rua,complemento,numero,cep,foto)
values ('Alex','alex@smn.com.br','123456','01-02-2001',1635269874,16987654321,'sp','Franca','Noemia','Av. Sao Vicente','lado par','4100',14403830,'')

insert into tarefas (tarefa,id_gestor,id_usuario) 
values ('Preparar imagem de marketing para a propaganda de quinta-feira',1,2)

select * from gestao
select * from usuarios
select * from tarefas

drop table tarefas
drop table usuarios
drop table gestao