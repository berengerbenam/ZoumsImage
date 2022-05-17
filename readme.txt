Affichage d'image avec vrais zoom---------------------------------
Url     : http://codes-sources.commentcamarche.net/source/50648-affichage-d-image-avec-vrais-zoomAuteur  : @karamelDate    : 07/12/2016
Licence :
=========

Ce document intitulé « Affichage d'image avec vrais zoom » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

le script sert a afficher en grand une image avec option de zoom dirigÃ© par rap
port au curseur effectue avec la molette de la sourie le clic gauche de la souri
s sert a deplacer l'image.le plus c'est que la mise en oeuvre du script est simp
le
<br />
<br />
<br /><a href='http://scriptevol.free.fr/contenu/visual_1/vi
sual.html' rel='noopener noreferrer' target='_blank'>lien de teste</a>
<br /><a
 name='mise-en-place'></a><h2> mise en place </h2>
il suffit de priciser le fich
ier ce meme fichier peut etre Ã©diter afin de modifÃ© les option qui se trouve a
u dÃ©but
<br />
<br /><pre class="code" data-mode="js">

function kmage(){

th
is.opacite_fond=0.5;			//opacite du fond valeur comprise entre 0 et 1
this.coule
ur_fond="black";		//couleur du fond
this.chemin="images/";			//repertoire ou se 
trouves les images
this.taille=80;				// taille de l'image en pourcentage a l'af
fichage par rapport a la taille de la fenetre du navigateur
.....
</pre>
<br />

<br />quand au html pour chaque image il faudra ajoute l'attribut data-lk
<br
 />
<br /><pre class="code" data-mode="html">&lt;img src="images_t/euphorbes.jp
g" style="z-index:5;position:absolute;top:10%;left:20%;height:100px;" data-lk&gt
;
&lt;img src="images_t/magnolia.jpg" style="position:absolute;top:50%;left:20%;
height:100px;" data-lk&gt;
&lt;img src="images_t/primevere.jpg" style="position:
absolute;top:10%;left:50%;height:100px;"data-lk&gt;
.....</pre>
<br />
<br />e
t en ce qui concerne les image elle devront avoir le meme nom que les image mini
ature mis dans des dossier diffÃ©rent bien Ã©videment
<br /><a name='conclusion
'></a><h2> Conclusion : </h2>
ouep
