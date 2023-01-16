---
title: Articles
description: 
published: true
date: 2022-11-14T10:37:01.902Z
tags: 
editor: markdown
dateCreated: 2021-05-20T13:30:43.388Z
---

# Articles
Un article est un produit ou un service proposé par votre entreprise.

Le terme Article s'applique également aux matières premières ou aux composants de produits à fabriquer (avant qu'ils ne puissent être vendus aux clients). DOKOS vous permet de gérer toutes sortes d'articles comme les matières premières, les sous-ensembles, les produits finis, les variantes d'articles et les articles de service.

DOKOS est optimisé pour la gestion détaillée de vos ventes et achats. Si vous êtes dans les services, vous pouvez créer un élément pour chaque service que vous proposez. Remplir le Item Master est très essentiel pour la mise en œuvre réussie dans DOKOS.

---

Pour accéder à la liste des éléments, accédez à:

>Accueil > Stock > Articles et prix > **Article**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un élément, il est conseillé de créer d'abord les éléments suivants :

- **Groupe d'articles**
- **[Entrepôt](/fr/stocks/warehouse)**
- **Une unité de mesure si nécessaire**

## 2. Comment créer un article

### 2.1 Ajout rapide d'un article

1. Allez dans la liste des articles, cliquez sur **:heavy_plus_sign: Ajouter article**
2. Entrez le **code de l'article**
2. Saisir le **nom de l'article**
3. Choisir un **groupe d'article**
4. Définissez l'**unité de mesure par défaut**
5. Indiquez un **stock d'ouverture**
6. Entrez le **prix de vente standard**
7. **Enregistrez**

### 2.2 Ajout complet d'un article
1. Allez dans la liste des articles, cliquez sur **:heavy_plus_sign: Ajouter article**
2. Faire **Modifier en pleine page**
3. Remplir les différents champs de la fiche d'article : 

#### Propriété de l'article
- **Code de l'article** : Le code d' article est une forme abrégée pour désigner votre article. Si vous avez très peu d'articles, il est conseillé de conserver le nom de l'article et le code d'article identiques. Cela aide les nouveaux utilisateurs à reconnaître et à mettre à jour les détails de l'article dans toutes les transactions. Dans le cas où vous avez beaucoup d'éléments avec des noms longs et que la liste se chiffre par centaines, il est conseillé de coder. Pour comprendre nommer les codes d'article voir article Codification . Vous pouvez également générer un code article basé sur une série de dénomination en activant cette fonction dans les paramètres de stock .
- **Nom de l'article** : le nom de l'article est le nom réel de votre produit ou service.
- **Groupe d'article** : Le groupe d' articles est utilisé pour classer un article selon divers critères tels que les produits, les matières premières, les services, les sous-ensembles, les consommables ou tous les groupes d'articles. Créez votre liste de groupe d'articles par défaut sous Configuration> Groupe d'articles et présélectionnez l'option tout en remplissant les détails de votre nouvel article sous Groupe d'articles . Les groupes d'articles peuvent être des sous-ensembles, des matières premières, etc., ou basés sur votre cas d'utilisation métier.
- **Unité de mesure par défaut (UDM)** : Il s'agit de l'unité de mesure par défaut que vous utiliserez pour votre produit. Il peut s'agir : Kgs, Mètres, etc. Vous pouvez stocker toutes les UDM dont votre produit aura besoin sous Configurer > Données de base > **Unité de mesure**. Ceux-ci peuvent être présélectionnés lors du remplissage du nouvel élément en utilisant le signe% pour afficher une fenêtre contextuelle de la liste UdM. Visitez la page UDM pour plus de détails

#### Options lors de la création d'un élément
- **Désactivé** : Cochez si vous voulez désactivé l'article. Si vous désactivez un élément, il ne peut être sélectionné dans aucune transaction.
- **Stock d'ouverture** : Le stock d'ouverture correspond au stock que vous avez actuellement en entrepôt et qui est disponible.
- **Taux de valorisation** : Le taux de valorisation est un attribut permettant d'ajouter le coût supplémentaire du produit (Frais de livraison, frais de douane). Par exemple, un produit coûtant 10€ à l'unité, aura des frais de livraison de 1,50€ par unité. Il existe deux options pour maintenir la valorisation des actions. FIFO (premier entré - premier sorti) et moyenne mobile. Pour comprendre ce sujet en détail, veuillez visiter Évaluation des articles, FIFO et Moyenne mobile.
- **Est une immobilisation** : Cochez cette case si cet élément est un actif de la société. Consultez le module Actif pour en savoir plus.
	- **Créer automatiquement des actifs lors de l'achat** : si l'article est un actif de la société, cochez cette case si vous souhaitez créer automatiquement des actifs lors de l'achat de cet article via le cycle d'achat . Consultez la page des ressources pour en savoir plus.
	- **Catégorie d'actif** : Sélectionner la catégorie de l'actif. 
- **Autoriser un article alternatif** : Parfois, lors de la production d'un produit fini, un matériau spécifique peut ne pas être disponible. Si vous cochez cette case, vous pouvez créer et sélectionner un article alternatif dans la liste Alternative d'article.
- **Inclure l'article dans la fabrication** : il s'agit des articles de matières premières qui seront utilisés pour créer des produits finis. Si l'article est un service supplémentaire comme le «lavage» qui sera utilisé dans la nomenclature, ne cochez pas cette case.

## 3. Caractéristiques

### 3.1 Description

- **Marque** : si vous avez plusieurs marques, enregistrez-les sous Vente > **Marque** et présélectionnez-les lors du remplissage d'un nouvel article.
- **Description** : Description de l'article. Le texte du code d'article sera récupéré par défaut.

### 3.2 Codes-barres

Les codes-barres peuvent être enregistrés dans les articles pour les numériser rapidement et les ajouter dans les transactions. Dans le tableau Codes-barres, vous pouvez ajouter le code - barres d' un article pour la numérisation . Il existe deux types de codes-barres dans DOKOS :

- **EAN** : Le numéro d'article européen est un numéro à 13 chiffres. EAN est utilisé internationalement et reconnu par plus de systèmes de point de vente.
- **UPC-A** : Le code de produit universel est un numéro à 12 chiffres. UPC-A est généralement utilisé uniquement aux États-Unis et au Canada.

### 3.3 Inventaire

- **Durée de conservation en jours** : Il s'agit d'un lot de produits . Le nombre de jours après lequel le lot de produits sera inutilisable. Par exemple, les médicaments.
- **Fin de vie** : Pour un seul article / produit, la date après laquelle il sera complètement inutilisable. Autrement dit, l'article sera inutilisable dans les transactions et la fabrication. Par exemple, vous utilisez des cristaux de plastique pour fabriquer des articles pour les 5 prochaines années, après quoi vous souhaitez utiliser des perles en plastique.
- **Garantie** : Pour suivre une période de garantie, il est nécessaire que l'article soit de série. Lors de la livraison de cet Article, la date de livraison et la période d'expiration sont enregistrées dans la fiche Numéro de série. Grâce au numéro de série maître, vous pouvez suivre l'état de la garantie.

Une période de garantie est une période pendant laquelle un produit acheté peut être retourné ou échangé.

- **Unité de Mesure (UDM) de poids** : Unité de mesure de l'article. Il peut s'agir Kilo, etc. L'Unité de mesure de poids que vous utilisez en interne peut être différente de l'UDM d'achat.

- **Poids par unité** : Le poids réel par unité de l'article. Ex: 1 kilo de biscuits ou 10 biscuits par paquet.
- **Type de demande de matériel par défaut** : Lorsque vous créez une nouvelle demande de matériel pour cet article, le champ défini ici sera sélectionné par défaut dans la nouvelle demande de matériel. Ceci est également connu sous le nom de «retrait».
- **Méthode de valorisation** : Sélectionnez la méthode de valorisation que ce soit FIFO ou Moyenne mobile. Lisez les méthodes d'évaluation des articles pour en savoir plus.

### 3.4 Réapprovisionnement automatique

Lorsque le stock d'un article plonge sous une certaine quantité, vous pouvez définir une réapprovisionnement automatique dans la section **Réapprovisionnement automatique**. Cela devrait être activé dans les paramètres de stock . Cela déclenchera une demande de matériel pour l'article. L'utilisateur avec les rôles Responsable des achats et Responsable des stocks sera informé de la création de la demande de matériel.

- **Enregsitrement (groupe)** : Dans quel groupe entrepôts vérifier la quantité de l'article.
- **Demander pour** : Quel entrepôt pour stocker l'article réapprovisionné.
- **Niveau de réapprovisionnement** : Lorsque cette quantité est atteinte, la commande est déclenchée. Le niveau de commande peut être déterminé en fonction du délai et de la consommation quotidienne moyenne. Par exemple, vous pouvez définir le niveau de commande de la carte mère à 10. Lorsqu'il ne reste que 10 cartes mères en stock, le système crée automatiquement une demande de matériel dans votre compte DOKOS.
- **Quantité de réapprovisionnement** : Le nombre d'unités à réorganiser pour que la somme du coût de commande et du coût de détention soit à son minimum. La quantité de commande à nouveau est basée sur la «quantité de commande minimum» spécifiée par le fournisseur et de nombreux autres facteurs.

Par exemple, si le niveau de commande est de 100 articles, votre quantité de commande ne sera pas nécessairement de 100 articles mais de 200. La quantité de réapprovisionnement peut être supérieure ou égale au niveau de réapprovisionnement. Cela peut dépendre du délai de livraison, de la remise, du transport et de la consommation quotidienne moyenne.

**Type de demande de matériel** : Le type de demande de matériel avec lequel le stock sera réorganisé. Cela dépend si vous achetez l'article, que vous le fabriquez vous-même ou que vous le transférez entre les entrepôts.

### 3.5 Unité de mesure (UDM)

Vous pouvez ajouter d'autres Unité de mesure pour un élément. Si l'UDM par défaut dans laquelle vous vendez est des nombres mais que vous la recevez en kilos, vous pouvez définir une UDM supplémentaire avec un facteur de conversion approprié. Par exemple, 500 nombre d'unité = 1 kilogramme, sélectionnez donc Kilogramme / litre comme UDM et définissez le facteur de conversion sur 500. Pour en savoir plus sur la vente dans différentes UDM, visitez cette page.

### 3.6 N° de série et lots

#### 3.6.1 Numéro de série

Avec les numéros de série, vous pouvez suivre la garantie et les retours. Dans le cas où un article individuel est rappelé par le fournisseur, le système de numérotation aide à suivre l'article individuel. Le système de numérotation gère également les dates d'expiration.

Veuillez noter que si vous vendez vos articles par milliers, et si les articles sont très petits comme des stylos ou des gommes à effacer, vous n'avez pas besoin de les mettre série.

Dans DOKOS, vous devrez mentionner le numéro de série dans certaines écritures comptables. Si votre produit n'est pas un gros article de consommation durable, s'il n'a pas de garantie et n'a aucune chance d'être rappelé, évitez de donner des numéros de série.

#### 3.6.1 Numéro de lots

Un ensemble d'articles peut être fabriqué par lots. Ceci est utile pour déplacer le lot et associer une date d'expiration à un certain lot.

- **A un numéro de lot** : Les options pour le numéro de lot, la date d'expiration et la conservation du stock d'échantillons seront révélées en cochant cette case. Vous ne pouvez pas l'activer s'il existe une transaction préexistante pour cet article. Si cela est désactivé, vous devrez entrer les numéros de série manuellement pour chaque transaction.

- **Série de numéros de lot** : Préfixe qui sera appliqué aux numéros de lot. Si vous définissez 1ABC, le premier lot sera nommé comme 1ABC00001 lors de la première transaction / fabrication.

- **Créer automatiquement un nouveau lot** : si le numéro de lot n'est pas mentionné dans les transactions, ils seront automatiquement créés selon un format tel que AAAA.00001. Si vous souhaitez toujours créer manuellement un numéro de lot pour cet article, laissez ce champ vide. Ce paramètre remplacera **Préfixe de la série de noms** dans les paramètres de stock. Les numéros de lot peuvent être définis pour être générés automatiquement si vous fabriquez les articles ou peuvent être saisis manuellement s'ils proviennent d'un fabricant externe.

- **A une date d'expiration** : Si vous cochez cette case, le numéro de lot sera créé en fonction de la date d'expiration. Les dates d'expiration peuvent être définies dans le **Lot** maître.

- **Conserver l'échantillon** : Pour conserver un nombre minimum d'échantillons de stock de l'article. Pour cela, vous devez définir un entrepôt de conservation d'échantillons dans les paramètres de stock. Pour en savoir plus, cliquez ici.

- **A un numéro de série** : Ceci est similaire à la série de numéros de lot, il sera créé lorsque vous effectuez des transactions / fabrication. Si vous définissez Série de numéros de série sur AA, lors de la première transaction, un numéro de série tel que AA00001 sera créé.

::alert{type=warning}
**Conseil** : Lors de la saisie d'un code article dans une table Articles, si la table nécessite des détails d'inventaire, vous pouvez saisir immédiatement les numéros de série ou de lot dans une boîte de dialogue contextuelle, selon que l'article saisi est groupé ou sérialisé.
::

### 3.7 Variante

Une variante d'article est une version différente d'un article. Pour en savoir plus sur la gestion des variantes, consultez Variantes d'article.

### 3.8 Valeurs par défaut pour les ventes, les achats et la comptabilité

Dans cette section, vous pouvez définir les valeurs par défaut liées aux transactions à l'échelle de l'entreprise pour cet article.

- **Société** : Nom de la société qui est concerné par cet article.
- **Entrepôt par défaut** : C'est l'entrepôt qui est automatiquement sélectionné dans vos transactions avec cet article.
- **Liste de prix par défaut** : qu'il s'agisse de vente standard ou d'achat standard. De même, vous pouvez également définir les comptes par défaut d'achat et de vente
- **Fournisseur** : Si un fournisseur par défaut est défini, ce fournisseur sera sélectionné pour les nouvelles transactions d'achat.
- **Compte de dépenses par défaut** : C'est le compte dans lequel le coût de l'article sera débité.
- **Compte de revenus par défaut** : C'est le compte dans lequel les revenus de la vente de l'article seront crédités.
- **Centre de coûts par défaut** : il est utilisé pour suivre les dépenses de cet article.

### 3.9 Détails d'achat et de réapprovisionnement

- **Unité de mesure d'achat par défaut à l'achat** : UDM par défaut qui sera utilisée dans les transactions d'achat.
- **Quantité minimum de commande** : La quantité minimum requise pour les transactions d'achat telles que les bons de commande. S'il est défini, le système ne vous permettra pas de procéder à la transaction d'achat si la quantité d'article dans la transaction d'achat est inférieure à la quantité définie dans ce champ.
- **Stock de sécurité** : Le Stock de sécurité est utilisé dans le rapport Niveau de commande recommandé par article. Sur la base du stock de sécurité, de la consommation quotidienne moyenne et du délai de livraison, le système suggère le niveau de réapprovisionnement d'un article.

Niveau de commande = Stock de sécurité + (Consommation quotidienne moyenne * Délai d'exécution)

- **Dernier taux d'achat** : Le taux auquel vous avez acheté cet article pour la dernière fois à l'aide d'une facture d'achat sera affiché ici.
- **Est un article d'achat** : si cette option n'est pas cochée, vous ne pourrez pas utiliser cet article dans les transactions d'achat.
- **Article fourni par le client** : coché si l'article est fourni par un client et reçu via Saisie de stock> Réception d'articles . Si coché, le champ Client est obligatoire en tant que client par défaut pour la demande d'article . Pour en savoir plus, visitez cette page .
- **Jours de délai de livraison** : Les jours de délai de livraison sont le nombre de jours entre la commande de l'article et son arrivée à l'entrepôt.

### 3.10 Détails du fournisseurs

- **Livré par le fournisseur (livraison directe)** : Si l'article est livré directement par le fournisseur au client, cochez cette case. En savoir plus ici.
- **Codes fournisseur** : Suivez le code article défini par les fournisseurs pour cet article. Dans les transactions d'achat, lors de la sélection d'un article, un numéro de pièce fournisseur sera également récupéré pour référence du fournisseur. Vous pouvez en savoir plus ici.

### 3.11 Détails du commerce extérieur

Si vous achetez l'article dans un autre pays, vous pouvez définir les détails ici.

- **Pays d'origine** : Le pays d'où vous achetez l'article.
- **Numéro du tarif douanier** : Vous pouvez créer un numéro de tarif douanier avec une description et l'utiliser comme référence ici pour le partager avec les agences douanières. Plus tard, il peut être utilisé pour ajouter des bons de livraison.

### 3.12 Détails de ventes

- **Unité de mesure de vente par défaut à la vente** : UDM par défaut qui sera récupérée pour les transactions de vente.
- **Créer un abonnement basé sur :** Vous pouvez choisir un modèle d'abonnement pour l'article crée. 
- **Remise maximale (%)** : Vous pouvez définir la remise maximale en % à appliquer à un article. Ex: si vous définissez 20%, vous ne pouvez pas vendre cet article avec une remise supérieure à 20%.
- **Est un article de vente** : Si cette option n'est pas cochée, vous ne pourrez pas utiliser cet article dans les transactions de vente.

### 3.13 Produits comptabilisés d'avance et Frais différés

Vous pouvez activer les revenus ou les dépenses différés à partir de l'élément. Une fois que vous cochez la case, vous verrez des options pour définir le compte de dépenses différées et le nombre de mois pendant lesquels les revenus / dépenses sont différés.

Par exemple, pensez à un abonnement annuel à une salle de sport, vous payez l'argent d'avance en une fois, mais le service est offert tout au long de l'année. Pour le propriétaire de la salle de sport, il s'agit d'un revenu différé et pour le client, il s'agit d'une dépense différée.

### 3.12 Détails du client

Le client peut identifier un article avec un code article différent. Ceci est similaire au code fournisseur .

- **Nom du client** : Sélectionnez un client ici.
- **Groupe de clients** : Il sera récupéré en fonction du client que vous avez sélectionné dans le champ précédent.
- **Code de référence** : un client peut identifier cet article avec un numéro différent. Vous pouvez suivre le code article attribué par le client pour cet article. Lorsque vous créez une commande client, le code de référence du client pour cet article s'affiche.

### 3.14 Taxe sur l'article

Ces paramètres ne sont requis que si un article particulier a un taux de taxe différent du taux défini dans le compte de taxe standard.

Vous devez créer un nouveau **modèle de taxe sur les articles** ou en choisir un existant. Par exemple, si vous avez un compte fiscal, TVA 20% et que cet article particulier est exonéré de taxe, vous sélectionnez TVA 20% dans la première colonne et définissez "0" comme taux de taxe dans la deuxième colonne. Visitez la page du modèle de taxe sur les articles pour plus de détails.

### 3.15 Critères d'inspection

**Modèle d'inspection qualité** : si un contrôle qualité est préparé pour cet article, ce modèle de critères sera automatiquement mis à jour dans le tableau Contrôle qualité du contrôle qualité. Des exemples de critères sont: le poids, la longueur, la finition, etc.
**Inspection requise avant l'achat** : Si une inspection est obligatoire avant l'achat de l'article, c'est-à-dire avant de générer un reçu d'achat, cochez cette case.
**Inspection requise avant la livraison** : Si une inspection est requise au moment de la livraison par votre fournisseur est obligatoire pour cet article, cochez cette case. Autrement dit, avant de générer un bon de livraison.

L'inspection de la qualité peut être effectuée avec Quick View et vous n'avez pas besoin d'aller sur une autre page pour mettre à jour l'inspection des détails dans DOKOS.

### 3.16 Fabrication

**BOM Par défaut** : La valeur par défaut nomenclature utilisée pour la fabrication de cet article.
**Fournir des matières premières pour l'achat** : Si vous sous-traitez à un fournisseur, vous pouvez choisir de leur fournir les matières premières pour fabriquer l'article en utilisant la nomenclature par défaut.
Fabricant: sélectionnez le fabricant qui a fabriqué cet article.
**Numéro de pièce du fabricant** : saisissez le numéro de pièce du fabricant que le fabricant a attribué à cet article.

Les détails du fabricant s'affichent une fois que vous avez créé un «Fabricant d'article» à partir du tableau de bord et sélectionné cet enregistrement par défaut. Ici, ajoutez des détails pour:

- Code de l'article
- Entrez le nom du fabricant
- Entrez le numéro de pièce que le fabricant utilise pour identifier cet article
- Sélectionnez Est par défaut pour afficher le fabricant et le numéro de pièce dans l'enregistrement d'article

### 3.16 Site web

**Afficher sur le site Web** : Choisissez si vous souhaitez afficher cet élément sur votre site Web. Une fois que vous cochez cette case, des options supplémentaires seront visibles pour configurer l'élément sur votre site Web. Pour afficher l'article sur le site Web, cliquez sur le lien «Voir sur le site Web» en haut à gauche juste au-dessus de l'image de l'article. Visitez le module Site Web pour en savoir plus.