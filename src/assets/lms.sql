/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de creation :  11/03/2026 13:34:46                      */
/*==============================================================*/


drop table if exists ANNEXER;

drop table if exists APPRENANT;

drop table if exists TRAVAILLER;

drop table if exists RELIER;

drop table if exists BADGE;

drop table if exists CATEGORIEPARCOURS;

drop table if exists CENTREFORMATION;

drop table if exists CHALLENGE;

drop table if exists CLASSEMENT;

drop table if exists COHORTE;

drop table if exists COMMENTAIRE;

drop table if exists COMPLETER;

drop table if exists CONTENUSESSION;

drop table if exists FORMATEUR;

drop table if exists INSCRIPTION;

drop table if exists MODULE;

drop table if exists OBTENIR;

drop table if exists PARCOURS;

drop table if exists PROJETFINAL;

drop table if exists PUBLICATION;

drop table if exists SESSION;

drop table if exists SOUSPROJET;

drop table if exists TYPECONTENU;

drop table if exists UTILISATEUR;

/*==============================================================*/
/* Table : ANNEXER                                              */
/*==============================================================*/
create table ANNEXER
(
   IDPARCOURS           int not null,
   IDMODULE             int not null,
   DATEAJOUT            date,
   ORDREPASSAGE         int,
   primary key (IDPARCOURS, IDMODULE)
);

/*==============================================================*/
/* Table : APPRENANT                                            */
/*==============================================================*/
create table APPRENANT
(
   CODEAPPRENANT        varchar(10) not null,
   IDUTILISATEUR        int not null,
   OBJECTIFSAPPRENANT   varchar(255),
   POINTSTOTAUXAPPRENANT int,
   STREAKACTUELAPPRENANT int,
   STREAKMAXAPPRENANT   int,
   DERNIERECONNAPPRENANT date,
   primary key (CODEAPPRENANT)
);

/*==============================================================*/
/* Table : TRAVAILLER                                           */
/*==============================================================*/
create table TRAVAILLER
(
   CODECENTREFORMATION  varchar(10) not null,
   CODEFORMATEUR        varchar(10) not null,
   DATEEMBAUCHE         date,
   primary key (CODECENTREFORMATION, CODEFORMATEUR)
);

/*==============================================================*/
/* Table : RELIER                                               */
/*==============================================================*/
create table RELIER
(
   CODECOHORTE          varchar(10) not null,
   IDPARCOURS           int not null,
   ORDREPASSAGECOHORTE  int not null,
   DATEDEBUT            date,
   DATEFIN              date,
   primary key (CODECOHORTE, IDPARCOURS)
);

/*==============================================================*/
/* Table : BADGE                                                */
/*==============================================================*/
create table BADGE
(
   IDBADGE              int AUTO_INCREMENT not null,
   LIBELLEBADGE         varchar(30),
   ICONBADGE            varchar(250),
   POINTSBADGE          int,
   primary key (IDBADGE)
);

/*==============================================================*/
/* Table : CATEGORIEPARCOURS                                    */
/*==============================================================*/
create table CATEGORIEPARCOURS
(
   IDCATEGORIEPARCOURS  int AUTO_INCREMENT not null,
   LIBELLECATEGORIEPARCOURS varchar(200),
   ICONECATEGORIEPARCOURS varchar(200),
   DESCRIPTIONCATEGORIEPARCOURS varchar(255),
   primary key (IDCATEGORIEPARCOURS)
);

/*==============================================================*/
/* Table : CENTREFORMATION                                      */
/*==============================================================*/
create table CENTREFORMATION
(
   CODECENTREFORMATION  varchar(10) not null,
   IDUTILISATEUR        int not null,
   ADRESSECENTREFORMATION varchar(200),
   NUMTELCENTREFORMATION varchar(50),
   SITEWEBCENTREFORMATION varchar(200),
   NUMAGREMENTCENTREFORMATION varchar(200),
   primary key (CODECENTREFORMATION)
);

/*==============================================================*/
/* Table : CHALLENGE                                            */
/*==============================================================*/
create table CHALLENGE
(
   IDCHALLENGE          int AUTO_INCREMENT not null,
   LIBELLECHALLENGE     varchar(100),
   DESCRIPTIONCHALLENGE varchar(255),
   DEBUTCHALLENGE       varchar(255),
   SOLUTIONCHALLENGE    varchar(255),
   DUREECHALLENGE       time,
   primary key (IDCHALLENGE)
);

/*==============================================================*/
/* Table : CLASSEMENT                                           */
/*==============================================================*/
create table CLASSEMENT
(
   IDCLASSEMENT         int AUTO_INCREMENT not null,
   RANGCLASSEMENT       int,
   SCORECLASSEMENT      int,
   primary key (IDCLASSEMENT)
);

/*==============================================================*/
/* Table : COHORTE                                              */
/*==============================================================*/
create table COHORTE
(
   CODECOHORTE          varchar(10) not null,
   CODECENTREFORMATION  varchar(10) not null,
   CODEFORMATEUR        varchar(10) not null,
   IDCLASSEMENT         int not null,
   NOMCOHORTE           varchar(100),
   DESCRIPTIONCOHORTE   varchar(100),
   DATEDEBUTCOHORTE     date,
   DATEFINCOHORTE       date,
   CAPACITECOHORTE      int,
   NBREINSCRITCOHORTE   int,
   STATUTCOHORTE        boolean,
   URLCOHORTE           varchar(200),
   CAPMAXCOHORTE        int,
   primary key (CODECOHORTE)
);

/*==============================================================*/
/* Table : COMMENTAIRE                                          */
/*==============================================================*/
create table COMMENTAIRE
(
   CODECOMMENTAIRE      varchar(100) not null,
   IDUTILISATEUR        int not null,
   CODEPUBLICATION      varchar(10) not null,
   CODECOHORTE          varchar(10) not null,
   CONTENUCOMMENTAIRE   longtext,
   IMAGECOMMENTAIRE     varchar(200),
   primary key (CODECOMMENTAIRE)
);

/*==============================================================*/
/* Table : COMPLETER                                            */
/*==============================================================*/
create table COMPLETER
(
   CODEAPPRENANT        varchar(10) not null,
   IDSESSION            int not null,
   STATUTCOMPLETERSESSION boolean,
   NOTESESSION          int,
   FINSESSION           datetime,
   DEBUTSESSION         time,
   primary key (CODEAPPRENANT, IDSESSION)
);

/*==============================================================*/
/* Table : CONTENUSESSION                                       */
/*==============================================================*/
create table CONTENUSESSION
(
   IDCONTENUSESSION     int  AUTO_INCREMENT not null,
   IDTYPECONTENU        int not null,
   IDSESSION            int not null,
   TITRECONTENUSESSION  varchar(200),
   CORPSCONTENUSESSION  longtext,
   URLCONTENUSESSION    varchar(200),
   ORDRECONTENUSESSION  int,
   primary key (IDCONTENUSESSION)
);

/*==============================================================*/
/* Table : FORMATEUR                                            */
/*==============================================================*/
create table FORMATEUR
(
   CODEFORMATEUR        varchar(10) not null,
   IDUTILISATEUR        int not null,
   PORTFOLIOFORMATEUR_  varchar(255),
   NUMTELFORMATEUR_     varchar(30),
   ANNEEEXP             int,
   primary key (CODEFORMATEUR)
);

/*==============================================================*/
/* Table : INSCRIPTION                                          */
/*==============================================================*/
create table INSCRIPTION
(
   CODEINSCRIPTION      varchar(10) not null,
   CODEAPPRENANT        varchar(10) not null,
   CODECOHORTE          varchar(10) not null,
   STATUTINSCRIPTION    boolean,
   DATEINSCRIPTION      datetime,
   MONTANTINSCRIPTION   int,
   primary key (CODEINSCRIPTION)
);

/*==============================================================*/
/* Table : MODULE                                               */
/*==============================================================*/
create table MODULE
(
   IDMODULE             int AUTO_INCREMENT not null,
   IDCATEGORIEPARCOURS  int not null,
   IDSOUSPROJET         int not null,
   LIBELLEMODULE        varchar(200),
   SLUGMODULE           varchar(200),
   ORDREMODULE          int,
   DUREEMODULE          time,
   ESTACTIFMODULE       boolean,
   PRIXMODULE           int,
   PREREQUISMODULE      varchar(250),
   primary key (IDMODULE)
);

/*==============================================================*/
/* Table : OBTENIR                                              */
/*==============================================================*/
create table OBTENIR
(
   CODEAPPRENANT        varchar(10) not null,
   IDBADGE              int not null,
   DATEOBTENTION        date,
   ESTACTIF             boolean,
   primary key (CODEAPPRENANT, IDBADGE)
);

/*==============================================================*/
/* Table : PARCOURS                                             */
/*==============================================================*/
create table PARCOURS
(
   IDPARCOURS           int AUTO_INCREMENT not null,
   IDCATEGORIEPARCOURS  int not null,
   IDPROJETFINAL        int not null,
   SLUGPARCOURS         varchar(200),
   DESCRIPTIONPARCOURS  varchar(255),
   PRIXPARCOURS         int,
   ESTACTIFPARCOURS     boolean,
   ESTPUBLICPARCOURS    boolean,
   DATEAJOUTPARCOURS    date,
   DATEMAJPARCOURS      date,
   PREREQUISPARCOURS    varchar(250),
   primary key (IDPARCOURS)
);

/*==============================================================*/
/* Table : PROJETFINAL                                          */
/*==============================================================*/
create table PROJETFINAL
(
   IDPROJETFINAL        int AUTO_INCREMENT not null,
   LIBELLEPROJETFINAL   varchar(100),
   DESCRIPTIONPROJETFINAL varchar(200),
   DUREEPROJETFINAL     time,
   SOLUTIONPROJETFINAL  varchar(200),
   DEBUTPROJETFINAL     varchar(200),
   primary key (IDPROJETFINAL)
);

/*==============================================================*/
/* Table : PUBLICATION                                          */
/*==============================================================*/
create table PUBLICATION
(
   CODEPUBLICATION      varchar(10) not null,
   IDUTILISATEUR        int not null,
   CODECOHORTE          varchar(10) not null,
   TITREPUBLICATION     varchar(50),
   CONTENUPUBLICATION   longtext,
   IMAGEPUBLICATION     varchar(200),
   primary key (CODEPUBLICATION)
);

/*==============================================================*/
/* Table : SESSION                                              */
/*==============================================================*/
create table SESSION
(
   IDSESSION            int AUTO_INCREMENT not null,
   IDMODULE             int not null,
   IDCHALLENGE          int not null,
   LIBELLESESSION       varchar(200),
   SLUGSESSION          varchar(200),
   ORDRESESSION         int,
   DUREESESSION         time,
   ESTACTIFSESSION      boolean,
   primary key (IDSESSION)
);

/*==============================================================*/
/* Table : SOUSPROJET                                           */
/*==============================================================*/
create table SOUSPROJET
(
   IDSOUSPROJET         int AUTO_INCREMENT not null,
   LIBELLESOUSPROJET    varchar(100),
   DESCRIPTIONSOUSPROJET varchar(200),
   SOLUTIONSOUSPROJET   varchar(200),
   DUREESOUSPROJET      varchar(200),
   primary key (IDSOUSPROJET)
);

/*==============================================================*/
/* Table : TYPECONTENU                                          */
/*==============================================================*/
create table TYPECONTENU
(
   IDTYPECONTENU        int AUTO_INCREMENT not null,
   LIBELLETYPECONTENU   varchar(50),
   ICONETYPECONTENU     varchar(200),
   primary key (IDTYPECONTENU)
);

/*==============================================================*/
/* Table : UTILISATEUR                                         */
/*==============================================================*/
create table UTILISATEUR
(
   IDUTILISATEUR        int AUTO_INCREMENT not null,
   EMAILUTILISATEUR     varchar(50),
   PSEUDOUTILISATEUR    varchar(50),
   PASSWORDUTILISATEUR  varchar(250),
   NOMUTILISATEUR       varchar(50),
   PRENOMUTILISATEUR    varchar(50),
   AVATARUTILISATEUR    varchar(255),
   BIOUTILISATEUR       varchar(255),
   ESTACTIFUTILISATEUR  boolean,
   DATECREATIONUTILISATEUR date,
   ESTVERIFIEUTILISATEUR boolean,
   primary key (IDUTILISATEUR)
);

alter table ANNEXER add constraint FK_ANNEXER foreign key (IDPARCOURS)
      references PARCOURS (IDPARCOURS) on delete restrict on update restrict;

alter table ANNEXER add constraint FK_ANNEXER2 foreign key (IDMODULE)
      references MODULE (IDMODULE) on delete restrict on update restrict;

alter table APPRENANT add constraint FK_ASSOCIATION_27 foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR) on delete restrict on update restrict;

alter table TRAVAILLER add constraint FK_TRAVAILLER_CENTREFORMATION foreign key (CODECENTREFORMATION)
      references CENTREFORMATION (CODECENTREFORMATION) on delete restrict on update restrict;

alter table TRAVAILLER add constraint FK_TRAVAILLER_FORMATEUR foreign key (CODEFORMATEUR)
      references FORMATEUR (CODEFORMATEUR) on delete restrict on update restrict;

alter table RELIER add constraint FK_RELIER_COHORTE foreign key (CODECOHORTE)
      references COHORTE (CODECOHORTE) on delete restrict on update restrict;

alter table RELIER add constraint FK_RELIER_PARCOURS foreign key (IDPARCOURS)
      references PARCOURS (IDPARCOURS) on delete restrict on update restrict;

alter table CENTREFORMATION add constraint FK_ASSOCIATION_26 foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR) on delete restrict on update restrict;

alter table COHORTE add constraint FK_ASSOCIATION_17 foreign key (IDCLASSEMENT)
      references CLASSEMENT (IDCLASSEMENT) on delete restrict on update restrict;

alter table COHORTE add constraint FK_POSSEDER foreign key (CODECENTREFORMATION)
      references CENTREFORMATION (CODECENTREFORMATION) on delete restrict on update restrict;

alter table COHORTE add constraint FK_SUPERVISER foreign key (CODEFORMATEUR)
      references FORMATEUR (CODEFORMATEUR) on delete restrict on update restrict;

alter table COMMENTAIRE add constraint FK_ASSOCIATION_22 foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR) on delete restrict on update restrict;

alter table COMMENTAIRE add constraint FK_ASSOCIATION_24 foreign key (CODECOHORTE)
      references COHORTE (CODECOHORTE) on delete restrict on update restrict;

alter table COMMENTAIRE add constraint FK_DEPENDRE foreign key (CODEPUBLICATION)
      references PUBLICATION (CODEPUBLICATION) on delete restrict on update restrict;

alter table COMPLETER add constraint FK_COMPLETER foreign key (CODEAPPRENANT)
      references APPRENANT (CODEAPPRENANT) on delete restrict on update restrict;

alter table COMPLETER add constraint FK_COMPLETER2 foreign key (IDSESSION)
      references SESSION (IDSESSION) on delete restrict on update restrict;

alter table CONTENUSESSION add constraint FK_APPARTIENT foreign key (IDTYPECONTENU)
      references TYPECONTENU (IDTYPECONTENU) on delete restrict on update restrict;

alter table CONTENUSESSION add constraint FK_JOINDRE foreign key (IDSESSION)
      references SESSION (IDSESSION) on delete restrict on update restrict;

alter table FORMATEUR add constraint FK_HERITER foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR) on delete restrict on update restrict;

alter table INSCRIPTION add constraint FK_ASSOCIATION_19 foreign key (CODEAPPRENANT)
      references APPRENANT (CODEAPPRENANT) on delete restrict on update restrict;

alter table INSCRIPTION add constraint FK_ASSOCIATION_20 foreign key (CODECOHORTE)
      references COHORTE (CODECOHORTE) on delete restrict on update restrict;

alter table MODULE add constraint FK_ASSOCIATION_28 foreign key (IDCATEGORIEPARCOURS)
      references CATEGORIEPARCOURS (IDCATEGORIEPARCOURS) on delete restrict on update restrict;

alter table MODULE add constraint FK_LIER foreign key (IDSOUSPROJET)
      references SOUSPROJET (IDSOUSPROJET) on delete restrict on update restrict;

alter table OBTENIR add constraint FK_OBTENIR foreign key (CODEAPPRENANT)
      references APPRENANT (CODEAPPRENANT) on delete restrict on update restrict;

alter table OBTENIR add constraint FK_OBTENIR2 foreign key (IDBADGE)
      references BADGE (IDBADGE) on delete restrict on update restrict;

alter table PARCOURS add constraint FK_CLASSIFIER foreign key (IDCATEGORIEPARCOURS)
      references CATEGORIEPARCOURS (IDCATEGORIEPARCOURS) on delete restrict on update restrict;

alter table PARCOURS add constraint FK_RATTACHER foreign key (IDPROJETFINAL)
      references PROJETFINAL (IDPROJETFINAL) on delete restrict on update restrict;

alter table PUBLICATION add constraint FK_ASSOCIATION_21 foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR) on delete restrict on update restrict;

alter table PUBLICATION add constraint FK_ASSOCIATION_23 foreign key (CODECOHORTE)
      references COHORTE (CODECOHORTE) on delete restrict on update restrict;

alter table SESSION add constraint FK_ASSOCIER foreign key (IDMODULE)
      references MODULE (IDMODULE) on delete restrict on update restrict;

alter table SESSION add constraint FK_EXECUTER foreign key (IDCHALLENGE)
      references CHALLENGE (IDCHALLENGE) on delete restrict on update restrict;

