# Powerapps_ConnecteurCustom_OpenAI
Connecteur personnalisé OpenAI pour applications PowerApps

Le source est livré si vous ne voulez pas reproduire le mode opératoire plus bas :)

Pour importer ce connecteur personnalisé dans votre environnement, il suffit d'aller dans la section "Connecteurs personnalisés", puis choisir "Nouveau connecteur personnalisé", puis l'option "Importer un fichier OpenAPI". Puis sélectionner le fichier json.

![Capture d’écran, le 2023-09-27 à 01 06 47](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/9c9e70d1-ea9e-4093-8f1f-eff853f5521e)


## Création Pas à pas du connecteur personnalisé OpenAI pour intégrer des fonctions d'OpenAI dans les applications PowerApps
Dans PowerApps, choisir "Connecteurs personnalisés" et cliquez sur **"Nouveau connecteur personnalisé"**, puis sur "Créer à partir de zéro"
![Capture d’écran, le 2023-09-26 à 14 42 35](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/66aa2f67-feac-4c75-80f3-786b53b900db)

Lui donner un nom, ici **"OpenAI Connecteur"**

![Capture d’écran, le 2023-09-26 à 14 43 05](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/b8f22d1e-03c5-4ce0-95cb-d720e40e5624)

Ensuite, dans l'écran suivant, ajouter un icône pour votre connecteur. Choisir le schéma HTTPS, Puis dans le champ Hôte, indiquer l'adresse principale de notre API qui compose le connecteur. Passez ensuite à l'étape suivante en cliquant sur "Sécurité".
![Capture d’écran, le 2023-09-26 à 16 21 21](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/ce252d6f-5c3f-4048-8849-20fad83e5703)

Choisir ensuite le type d'authentification. Pour notre Api OpenAI, on utilise une Clé API.
On indique ensuite :
* L'étiquette du paramètre (API Key)
* Le nom du paramètre (Authorization)
* L'emplacement du paramètre (En-tête)
![Capture d’écran, le 2023-09-26 à 20 40 08](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/069191c1-f90d-4885-886e-3822c58536a2)


Ensuite on passe à la "Définition" de notre connecteur personnalisé.
On indique :
* Un résumé : OpenAI ChatGPT API
* Un Id de l'opération : dans notre exemple APIChat

Pour reproduire le comportement de ChatGPT pour notre connecteur, nous allons devoir saisir une demande et nous allons la créer à partir d'un exemple :)

Cliquer sur "Importer à partir de l'exemple"

Nous voulons utiliser la méthode "POST" pour pouvoir envoyer une requête à OpenAI dans notre connecteur. Saisir l'url de OpenAI pour lancer une requête comme sur ChatGPT.
Ici : https://api.openai.com/v1/chat/completions

En-tête : Content-Type application/json

Dans le corps de la requête : 
Le json représentant la requête d'OpenAI. Ici le modèle et le message à envoyer.

Cliquez sur "Importer"
![Capture d’écran, le 2023-09-26 à 20 52 15](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/616b75bd-5d96-4e63-81a3-55f0e1e1995a)

Le détail de l'import apparaît sous la Demande.
![Capture d’écran, le 2023-09-26 à 20 53 21](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/9397600b-cf1d-46cb-8508-213a9bf0d41b)

Cliquez ensuite sur Content-Type puis l'option "Modifier". 
![Capture d’écran, le 2023-09-26 à 20 53 57](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/80fc6f2b-996d-4398-ad72-addd11819579)

On indique la valeur par défaut (application/json), on clique sur "Oui" dans la zone "Est requis ?" et on coche "internal" dans la section Visibilité.

![Capture d’écran, le 2023-09-26 à 20 54 49](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/0bfbbd9a-480f-495d-8111-558f0b5fb305)

On fait la même chose dans la demande mais sur le "body".
![Capture d’écran, le 2023-09-26 à 20 55 11](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/53e9a822-a82b-46f4-bd56-82e5de633619)

On indique que "body" (corps de la requête) est requis (Oui) et la visibilité à "important".

Ensuite, on va rendre obligatoire les paramètres de notre opération "ApiChat".

Pour cela, modifier le content, le role et le model :

![Capture d’écran, le 2023-09-26 à 20 56 49](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/5852971b-9f27-4359-89b6-98cb58e45fbe)

Dans la description "content", mettre "Est requis ?" à Oui et la visibilité à "Important".
![Capture d’écran, le 2023-09-26 à 20 59 03](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/bc7d3afe-a076-4d67-bc4c-9850d396d75e)

Faire la même chose pour le role et le model.

![Capture d’écran, le 2023-09-26 à 21 00 46](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/68de9b5b-5937-410b-8f2f-a8ac478ce449)

Ensuite, on va tester notre connecteur mais avant il faut lancer la création : Cliquez sur "Créer un connecteur".
![Capture d’écran, le 2023-09-26 à 21 02 40](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/e5798dad-0368-4fb5-8205-f9e6c815b543)

Puis, pour tester notre connecteur, nous avons besoin de créer une connexion à OpenAI. Pour cela, je vais demander à OpenAi de créer une nouvelle clé pour cette démo :)
![Capture d’écran, le 2023-09-26 à 21 05 09](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/dc3dddae-f9d2-4d49-9511-5f753bfdfd48)

Dans l'étape de test, ajouter une nouvelle connexion.
![Capture d’écran, le 2023-09-26 à 21 06 20](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/cf52b307-a328-46f6-9556-5cbb6bf89ca9)

On retrouve ici notre connecteur personnalisé avec notre icône. On indique notre entête qui va nous authentifier auprès de OpenAI avec la clé créée auparavant chez OpenAI.
![Capture d’écran, le 2023-09-26 à 21 07 22](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/40f8ea06-136d-4fae-b321-8d8de3dcc98b)

Notre connecteur est maintenant connecté :)
![Capture d’écran, le 2023-09-26 à 21 07 37](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/58382c67-ca7a-48d7-af66-ffa390598dad)

On continue maintenant le test en modifiant notre connecteur.
![Capture d’écran, le 2023-09-26 à 21 10 49](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/60c7f832-1dd7-4af5-8119-a087fbc62c58)

Après avoir obtenu notre connexion, nous pouvons dans notre opération "ApiChat", indiquer les paramètres que l'on souhaite.
Ici, on va utiliser le modèle gpt turbo de OpenAI, le rôle user et en content une question sur mon Erp préféré :)

![Capture d’écran, le 2023-09-26 à 21 14 30](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/e94fc92e-fbc9-44d9-85cd-2f1a1535240c)

Une fois fait, on clique sur le bouton "Opération de test", et on va dans l'onglet "Réponse" pour voir ce qu'à donné notre appel :)
On voit bien dans "content", la réponse à notre question !
![Capture d’écran, le 2023-09-26 à 21 19 00](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/d1d1135f-048c-438a-a979-1cf3f23174d3)

On va maintenant capturer les éléments de la réponse pour notre connecteur afin de pouvoir l'utiliser dans une app PowerApp par exemple 
Cliquez sur "Default"

![Capture d’écran, le 2023-09-26 à 21 23 46](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/f92ed059-d801-416a-842c-d4526ed91af2)

On obtient l'écran suivant :
Puis cliquer sur "Importer à partir de l'exemple"
![Capture d’écran, le 2023-09-26 à 21 24 08](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/c680f62d-bc75-48c7-bbf4-753bba79e910)

Dans l'écran, dans la section "Corps", copier coller le résultat json de notre réponse (Onglet "Réponse" suite à notre "Opération de test").

![Capture d’écran, le 2023-09-26 à 21 25 47](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/b9b358ce-9b4b-425d-9abc-e54d95afa60f)

Au retour, il affiche tous les éléments du json afin de pouvoir les lire plus tard dans une app PowerApps :)
![Capture d’écran, le 2023-09-26 à 21 27 23](https://github.com/nuage365/Powerapps_ConnecteurCustom_OpenAI/assets/102873102/cd6a574d-14e3-46c0-b44b-8e1258b6b2dc)

Ne pas oublier de mettre à jour le connecteur en cliquant sur l'option en haut et c'est fini :) 

Pour utiliser ensuite le connecteur il suffit ensuite par exemple de créer une PowerApps de type canvas,
de créer un textinput, un bouton, une galerie extensible en hauteur, etc...
Dans le textinput, l'utilisateur va saisir sa question comme dans ChatGPT.

Dans PowerFx, sur le "OnSelect" du bouton le code pourrait ressembler à cela : 
>Set(varResponse,OpenAiConnecteur.APIChat("gpt-3.5-turbo", Collect(mycollectchat,{role:"user",content:TextInput1.text})))
>Collect(mycollectionchat,First(varResponse.choices).message);
>
>Reset(TextInput1)

Ici, on lance donc l'opération APIChat de notre connecteur personnalisé et on va récupérer le premier message de notre requête dans une collection afin d'afficher cela dans notre gallerie :)




