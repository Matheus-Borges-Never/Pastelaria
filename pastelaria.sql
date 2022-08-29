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
cep numeric (8) not null
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
