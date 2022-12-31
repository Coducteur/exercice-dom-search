.[SNCF Lyon] Amina Chakir
  11 h 28
@ici Hey les Devs Gones :tête_de_lion: Les vacances se passent bien ?
Pour éviter un retour difficile la semaine pro (eh oui, déjà :las:), je vous propose un exercice qui mêle syntaxe :js: (création d’un tableau d’objets, d’une fonction) et manipulation du dom). Il n’y a pas de piège, les consignes sont là pour vous guider tout au long du développement.
L’idée va être de concevoir une page web qui, à l’aide d’un formulaire, affichera les films qui correspondent à la recherche de l’utilisateur :filmer:
Dans ce repo vous sont fournis les codes HTML et CSS, un dossier assets contenant les affiches des films, ainsi qu’un fichier JS avec les étapes à suivre.
INSTRUCTIONS
Dans un 1er temps, vous allez créer un tableau d’objets, que vous appellerez movies, reprenant les données de ce tableau (on se rappelle de la syntaxe d’un tableau, d’un objet, puis d’un tableau d’objets)
Ensuite, vous créerez une fonction displayMovies, qui prend un tableau en paramètre, et qui pour chacun des éléments du tableau créera :
Une balise div, avec une classe movie-container, et qui sera rattachée à l’élément html dont l’id est movies-container,
Une balise p qui contiendra le titre du film et qui sera rattachée à l’élément avec la classe movie-container
Une balise img qui contiendra dans son attribut src la route vers l’affiche du film et qui sera rattachée à l’élément avec la classe movie-container
Une balise ul qui sera rattachée à l’élément avec la classe movie-container et qui contiendra une li pour chaque acteur du film.
Vous appellerez ensuite votre fonction avec le tableau movies en argument. A cette étape, vous devez voir s’afficher 10 films sur votre navigateur.
Vous gérerez ensuite le formulaire de recherche :
=> Lorsque le formulaire est soumis, il faut :
Tout d’abord supprimer chaque films déjà affiché (pensez à la méthode remove)
Ensuite créer un tableau, que vous pouvez nommer searchedMovies, ne contenant que les films dont le titre contient la saisie de l’utilisateur (le filtre ne doit pas être sensible à la casse).
Puis appeler la fonction displayMovies créée précédemment pour afficher les films répondant au critère de recherche
N'hésitez pas à me dire si vous trouvez une coquille ou si vous êtes bloqués, le but est de refaire connaissance avec son clavier pour ceux dont la machine est dans le sac depuis qu'on s'est quitté :sourire_et_yeux_rieurs:
Bon courage à vous !