---
title: Ajout d'utilisateurs
description: 
published: true
date: 2022-11-03T11:12:30.680Z
tags: 
editor: markdown
dateCreated: 2021-05-10T14:51:51.056Z
---

# Ajouter un utilisateur

Les utilisateurs peuvent être ajoutés par le Gestionnaire système. Pour ajouter des utilisateurs, allez sur :

> Accueil > Utilisateurs et autorisations > **Utilisateur**

Il existe deux principaux types d'utilisateurs :

- **Utilisateurs du site Web** : clients, fournisseurs, étudiants, etc., qui n'ont accès qu'au portail et à aucun module. 

- **Utilisateurs du système** : personnes utilisant DOKOS dans l'entreprise ayant accès aux modules, aux données de l'entreprise, etc.


Sous Utilisateur, de nombreuses informations peuvent être saisies. Dans un souci de convivialité, les informations saisies pour les internautes sont minimes: prénom et e-mail.

Une adresse e-mail est la clé unique (ID) identifiant les utilisateurs.

## 1. Comment créer un nouvel utilisateur

### Ajout rapide
1. Allez dans la liste des utilisateurs, cliquez sur **:heavy_plus_sign: Ajouter utilisateur**.
2. Ajoutez une **adresse e-mail** , le **nom de l'utilisateur** et le **prénom**.
3. **Envoyer un Email de bienvenue** : Si la case est cochéé l'utilisateur ajouté recevra un email de bienvenue à l'adresse email renseigné dans le champs Email.
4. **Type d'utilisateur**
5. **Enregistrer**.

Des détails tels que le nom d'utilisateur et la langue peuvent également être modifiés.

## 2. Caractéristiques

### 2.1 Informations de base

- Email
- Nom et prénom (et dexuième prénom)
- Fuseau horaire
- Nom d'utilisateur
- Langue
- Thème du bureau

### 2. Rôles

Après l'enregistrement, vous verrez une liste de rôles et de cases à cocher à côté d'eux. Cochez simplement les rôles que vous souhaitez que l'utilisateur ait et enregistrez le document. 

Les rôles ont des autorisations prédéfinies. Vous pouvez définir des profils de rôle à utiliser comme modèle qui sélectionne plusieurs rôles d'ensemble.

### 2.2 Informations additionnelles

- Genre
- Téléphone
- Numéro mobile
- Date de naissance
- Lieu
- Intérêts
- Biographie

Cochez la case **Couper les sons** pour couper les sons lors de l'interaction avec les documents. L'utilisateur peut avoir besoin de faire un Paramètres > **Recharger pour que les modifications aient lieu**.

### 2.4 Modification du mot de passe

- **Définir un nouveau mot de passe** : en tant que gestionnaire système, vous pouvez définir un nouveau mot de passe pour l'utilisateur s'il doit être modifié.
- **Envoyer une notification de mise à jour du mot de passe** : envoyez une notification par e-mail à l'utilisateur indiquant que son mot de passe a été modifié.
- **Déconnectez-vous de tous les appareils lors du changement de mot de passe** : lorsque vous modifiez le mot de passe de l'utilisateur, cela déconnecte l'utilisateur du PC et de tout appareil mobile auquel il s'est connecté.

### 2.3 Suivi des documents

Avec cette option, vous pouvez suivre divers documents dans le système et recevoir des notifications par e-mail lorsqu'ils sont mis à jour.

### 2. Email

- **Envoyer des notifications pour les fils de discussion par courrier électronique** : l'utilisateur recevra des notifications pour les conversations par courrier électronique qui ont lieu dans des types de documents tels que les opportunités.
- **Envoyez-moi une copie des e - mails sortants** : envoie à l'utilisateur une copie des e-mails qu'ils envoient. Ceci est utile pour suivre si l'e-mail a été envoyé.
- **Autorisé dans les mentions** : autorise le nom de cet utilisateur à apparaître dans les conversations du fil de discussion afin qu'il puisse être mentionné à l'aide de «@».
- **Signature d'e-mail** : l'ajout d'une signature d'e-mail ici la définira par défaut pour tous les e-mails sortants de l'utilisateur. Ceci est différent d'un pied de page défini à partir du fichier principal de la société .

### 2. Modules activés

Les utilisateurs auront accès à tous les modules pour lesquels ils ont un accès basé sur les rôles. Si vous souhaitez restreindre l'accès à certains modules pour cet utilisateur, décochez les modules de cette liste.

#### 2. .1 Profils des modules

Les profils de rôle agissent comme un modèle pour stocker et sélectionner l'accès à plusieurs modules. Ce profil de rôle peut ensuite être attribué à un utilisateur. Par exemple, les utilisateurs RH auront accès à plusieurs modules comme les RH, la paie, etc. Les profils de rôle sont utiles pour donner accès à plusieurs modules à la fois lors de l'ajout de plusieurs utilisateurs.

### 2. Paramètres de sécurité

- **Sessions simultanées** : sessions de connexion simultanées auxquelles l'utilisateur est autorisé. Vous pouvez utiliser le même ensemble d'informations d'identification pour plusieurs utilisateurs en autorisant plus de sessions. Cela peut être restreint globalement à partir des paramètres système . Pour un compte cloud, le nombre total de sessions simultanées ne peut pas dépasser le nombre total d'utilisateurs abonnés.
- **Type d'utilisateur** : si l'utilisateur a un rôle coché autre que Client, Fournisseur, Patient ou Étudiant, il devient automatiquement un utilisateur système. Ce champ est en lecture seule.
- **Connexion après, connexion avant** : si vous souhaitez donner à l'utilisateur l'accès au système uniquement entre les heures de bureau ou pendant les week-ends, spécifiez-le ici. Par exemple, si les heures de bureau sont de 10 h à 18 h, définissez les heures d'ouverture de session après, de connexion avant à 10 h et 18 h.
- **Restreindre IP** : limitez la connexion de l'utilisateur aux adresses IP spécifiées ici. Cela peut être utilisé pour que l'utilisateur ne puisse se connecter qu'à partir d'ordinateurs de bureau. Plusieurs adresses IP peuvent être ajoutées séparées par des virgules.

Cette section affiche également d'autres détails tels que la dernière connexion, la dernière adresse IP et l'heure de la dernière activité de l'utilisateur.

### 2. Authentification tierce

Cela permettra aux utilisateurs d'utiliser Facebook, Google ou GitHub pour se connecter. Pour utiliser cette fonctionnalité, inscrivez-vous à un compte développeur avec Facebook, Google, GitHub, etc. Créez une application sur leur console, spécifiez un nom d'application, l'URL d'origine et l'URL de rappel, copiez l'ID client et les informations secrètes du client ici pour commencer à utiliser.

### 2. Accès API

Vous pouvez générer des clés secrètes API à partir de cette section à l'aide du bouton Générer des clés. Cela peut être utilisé pour accéder aux données de votre compte à partir d'une autre application, par exemple, un système de point de vente hors ligne.

## 3. Après l'enregistrement

Après avoir enregistré un utilisateur, ces boutons seront visibles dans la zone du tableau de bord du maître des utilisateurs.

### 3.1 Autorisations 
- **Définir les autorisations utilisateur** : vous amènera à la page Autorisations utilisateur de Bruce à partir de laquelle vous pouvez restreindre l'accès de Bruce aux documents.
- **Afficher les documents autorisés** : vous amènera au rapport «Documents autorisés pour l'utilisateur» pour cet utilisateur. Ici, vous pouvez voir à quels documents Bruce a accès. Par exemple, sur une commande client sélectionnée, la liste des commandes client auxquelles Bruce a accès sera affichée.

### 3.2 Mot de passe 
- **Réinitialiser le mot de passe** : un e-mail contenant des instructions pour réinitialiser le mot de passe de l'utilisateur sera envoyé au compte de messagerie de l'utilisateur .
- **Réinitialiser le secret OTP** : réinitialiser le secret OTP pour se connecter via l'authentification à deux facteurs.

Créer un e-mail d'utilisateur vous permettra de créer un compte de messagerie pour l'utilisateur en fonction de l'e-mail saisi dans le maître des utilisateurs.

## 4. Méthodes de connexion

Dans les paramètres système, sous la section Sécurité, si vous cochez la case **Autoriser la connexion à l'aide du numéro de mobile**, un numéro de mobile peut également être utilisé pour vous connecter. Même si un numéro de mobile sera unique, il ne sera pas traité comme un identifiant d'utilisateur.

**Types de connexion** :

- Connectez-vous par e-mail
- Connectez-vous avec e-mail ou mobile