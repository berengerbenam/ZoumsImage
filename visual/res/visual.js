//-------------------------------------------------------------
//  Nom Document : voile
//  Auteur       : Berenger
//  Objet        : image voile et zoom   http://www.javascriptfr.com/
//  Création     : 05.10.2009
//-------------------------------------------------------------
//  Mise a Jour  : 25.11.16
//  Objet        : optimisation
//-------------------------------------------------------------
//-(*)------------------

addEventListener('load',function(){

		var inst=new kmage()

		},false);


function kmage(){

this.opacite_fond=0.5;			//opacite du fond valeur comprise entre 0 et 1
this.couleur_fond="black";		//couleur du fond
this.chemin="images/";			//repertoire ou se trouves les images
this.taille=80;				// taille de l'image en pourcentage a l'affichage par rapport a la taille de la fenetre du navigateur
this.hou=0;
this.rar=true;
this.setX=0;
this.setY=0;
this.erreur=false;
this.zidex=1;
this.imag=new Image();
var that=this;
this.drag=function(e){that.posi.call(that,e)}
this.init();
}

kmage.prototype={

	init:function(){
		
	var allElements = document.getElementsByTagName('*');
		var vaval=1;
		var vaz=0;

		for (var i = 0; i< allElements.length; i++){

			vaz = parseInt(getComputedStyle(allElements[i],null).zIndex);

			if(vaz>vaval){
				vaval=vaz+1;
			}
		}
		this.zidex=vaval;
		
		var allElements = document.getElementsByTagName('img');

		for (var i = 0; i< allElements.length; i++){

			if(allElements[i].hasAttribute("data-lk")){
				allElements[i].onclick=this.precharge.bind(this)
			}
		}
	},
	
	//fonction pour la creation du voile et de l'image de precharge avec leur attributs ainsi que le prechargement

	precharge:function(e){
		
		var tb=e.currentTarget.src.split("/")
		var ii=tb[tb.length-1]
		
		var voile=document.createElement('div');
		voile.style.position='fixed';
		voile.style.top=0+"px";
		voile.style.left=0+"px";
		voile.style.height=100+"%";
		voile.style.width=100+"%";
		voile.style.backgroundColor=this.couleur_fond;
		voile.style.opacity =0;
		voile.style.zIndex=this.zidex;
		this.voile=document.body.appendChild(voile);
		
		var imad=document.createElement('img');
		imad.setAttribute("src", "data:image/gif;base64,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");
		imad.style.position='fixed';
		imad.style.width=120+"px";
		imad.style.zIndex=this.zidex+1;
		this.imadiv=document.body.appendChild(imad);

		this.sscro();

		if(this.imag.getAttribute("src")==this.chemin+ii && !this.erreur){
			this.inimage();
			return false;
		}
		this.imag.setAttribute("src", this.chemin+ii);
		var that=this
		this.imag.onload=function(){that.inimage();that.erreur=false}
		this.imag.onerror=function(){that.quit();that.erreur=true}
	},


	//fonction de suppression de l'image du voile et des evenement lie au document

	quit:function(){

		this.voile.parentNode.removeChild(this.voile);
		this.imadiv.parentNode.removeChild(this.imadiv);
	},

	//fonction pour le positionne de l'image et du voile

	sscro:function(){

		var dde=document.documentElement;
		var imad=this.imadiv;
		var ddn=document.body.scrollTop ? document.body : document.documentElement;
		
		imad.style.left=((dde.clientWidth-imad.offsetWidth)/2)+'px';
		imad.style.top=(dde.clientHeight-imad.offsetHeight)/2+ddn.scrollTop+"px";
	},

	//fonction pour l'initialisation de l'image et des evenements

	inimage:function(){

		this.imadiv.parentNode.removeChild(this.imadiv);

		this.imadiv=document.createElement('img');
		this.imadiv.style.opacity =0;
		this.imadiv.src=this.imag.getAttribute('src');
		this.imadiv.style.position='absolute';
		var plus=(document.documentElement.clientHeight*(this.taille/100))/this.imadiv.height
		var large=Math.round(plus*this.imadiv.width)
		large<document.documentElement.clientWidth ? this.imadiv.style.height=this.taille+"%" : this.imadiv.style.width=this.taille+"%";

		this.imadiv.style.cursor= 	'zoom-in';
		this.imadiv.style.zIndex=this.zidex+1;
		document.body.appendChild(this.imadiv);

		this.sscro();
		this.opacite();
	},


	opacite:function(){

		var imad=this.imadiv;

		if(this.hou<1){

			this.hou+=0.1;
			this.voile.style.opacity =Number(this.voile.style.opacity)+(this.opacite_fond/10);
			imad.style.opacity =this.hou;

			setTimeout(this.opacite.bind(this),40);
		}
		else{
			this.voile.onclick=this.quit.bind(this);

			imad.onmousedown=this.sp.bind(this);
			imad.onmouseup=this.sp2.bind(this);
			imad.addEventListener('wheel', this.dirizoom.bind(this), false);
			this.hou=0;
		}
	},

	//fonction pour annuler l'action  par default du navigateur

	selecte:function(ev){
		ev.preventDefault();
	},

	//fonction pour le zoom directionnel

	dirizoom:function(e){

		var dde=document.documentElement.scrollTop ? document.documentElement : document.body;
		e.preventDefault();
		var val = e.deltaY > 0 ? -0.15 : 0.15;
		var imad=this.imadiv;
		var bound=imad.getBoundingClientRect();
		var setX=e.clientX;
		var setY = e.clientY;
		var dirle=bound.width-setX+bound.left;
		var dirto=bound.height-setY+bound.top;
		var lf=bound.width;
		var rf=bound.height;
		imad.style.width=lf+(lf*val)+'px';
		imad.style.height=rf+(rf*val)+'px';
		var bound=imad.getBoundingClientRect();
		imad.style.left=bound.left-((bound.width-lf))+(dirle*val)+dde.scrollLeft+'px';
		imad.style.top=bound.top-((bound.height-rf))+(dirto*val)+dde.scrollTop+'px';
	},

	//partie drag

	sp:function(evt){

		if(this.rar){
			
			evt.preventDefault();
			var cen= evt.currentTarget;
			this.setX=evt.clientX;
			this.setY=evt.clientY;
			document.documentElement.addEventListener("mousemove", this.drag, false)
			this.rar=false;
		}
	},

	sp2:function(e){

		if(!this.rar){
			document.documentElement.removeEventListener("mousemove", this.drag, false)
			this.rar=true;
		}
	},

	posi:function(e){

		e.preventDefault();
		var bound=this.imadiv.getBoundingClientRect();
		this.imadiv.style.left=bound.left-(this.setX-e.pageX)+"px";
		this.imadiv.style.top=bound.top-(this.setY-e.pageY)+"px";
		this.setX=e.clientX;
		this.setY=e.clientY;
	}
}
