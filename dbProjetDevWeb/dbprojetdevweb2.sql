CREATE TABLE Catégorie(
   __id__Cat__int VARCHAR(50),
   __Nom___Cat___varchar_255__ VARCHAR(250) NOT NULL,
   PRIMARY KEY(__id__Cat__int)
);

CREATE TABLE Marque(
   __marque_id___int VARCHAR(250),
   Nom_Marque___varchar___50__ VARCHAR(50) NOT NULL,
   PRIMARY KEY(__marque_id___int)
);

CREATE TABLE users_(
   ___client_id___int VARCHAR(250),
   Nom_client___int VARCHAR(50) NOT NULL,
   Prénom_client___int_ VARCHAR(50) NOT NULL,
   adresse_client___Varchar___250_ VARCHAR(250) NOT NULL,
   adresse_mail___varchar__50_ VARCHAR(50),
   PRIMARY KEY(___client_id___int)
);

CREATE TABLE Commande(
   ___commande_id___int VARCHAR(50),
   __produit_id___int VARCHAR(50) NOT NULL,
   __quantité___int VARCHAR(50) NOT NULL,
   _Prix_TVAC___int INT NOT NULL,
   ___client_id___int VARCHAR(250) NOT NULL,
   PRIMARY KEY(___commande_id___int),
   FOREIGN KEY(___client_id___int) REFERENCES Client_(___client_id___int)
);

CREATE TABLE Produit(
   __id___int VARCHAR(50),
   __nom___varchar_255_ VARCHAR(250) NOT NULL,
   __description___text VARCHAR(50) NOT NULL,
   __prix___float DECIMAL(15,2) NOT NULL,
   __taille___varchar_255_ VARCHAR(50) NOT NULL,
   __couleur___varchar_255_ VARCHAR(50) NOT NULL,
   __marque_id___int VARCHAR(50) NOT NULL,
   ___commande_id___int VARCHAR(50),
   __marque_id___int_1 VARCHAR(250) NOT NULL,
   PRIMARY KEY(__id___int),
   FOREIGN KEY(___commande_id___int) REFERENCES Commande(___commande_id___int),
   FOREIGN KEY(__marque_id___int_1) REFERENCES Marque(__marque_id___int)
);

CREATE TABLE appartient(
   __id___int VARCHAR(50),
   __id__Cat__int VARCHAR(50),
   PRIMARY KEY(__id___int, __id__Cat__int),
   FOREIGN KEY(__id___int) REFERENCES Produit(__id___int),
   FOREIGN KEY(__id__Cat__int) REFERENCES Catégorie(__id__Cat__int)
);
