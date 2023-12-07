import React from "react";
import "./home.css"
import { PiVideoDuotone } from "react-icons/pi";


const Home = () => {
	return (
		<div className="container">
			<div className="container1">{/* container1 styles containerFocus and containerNews  */}
			<div className="containerFocus"> 
				<h1>Apprends les Maths et ma tiques en Ligne</h1>
				<p>Mathématiques Simplifiées. Tes exercices, chapitres, et tes cours de maths à l'infini, des questions comme au contrôle, a l’examen, ou a l’evaluation le tout 100% en ligne. </p>
				<div className="niveauClasse">
					<a href="/cours&exercice/terminale">
						<button className="btn btnTerminale" >Terminale</button>
					</a>
					<a href="/cours&exercice/premiere" >
						<button className="btn btnPremiere">Premiere</button>
					</a>
					<a href="/cours&exercice/seconde" >
						<button className="btn btnSeconde">Seconde</button>
					</a>
					<a href="/cours&exercice/troisieme" >
						<button className="btn btnTroisieme">Troisieme</button>
					</a>
				</div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/FeY2PspBunQ?si=Wa-GiEGPJg2HITXh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
			</div>

			<div className="containerNews">
				<h1>Actualites sur le site</h1>
				<p>Nouvelle section, vous avez la possibilite de suivre vos progres sur le site <br /> vous avez desormais la possibilite de discuter avec des camarades sur le site</p>
				<iframe width="500" height="500" src="https://www.youtube.com/embed/FeY2PspBunQ?si=Wa-GiEGPJg2HITXh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
				<h2>Dernieres mises a jours</h2>
				<p>la derniere mise a jours a ete fait le 6 Dec 2023, ce qui vous donne un plus large espace de travail et de travail en groupe</p>
			</div>
			</div>

			<div className="description">
				<h1>Description</h1>
				<p>
					Découvrez les mathématiques de manière ludique et accessible grâce à notre site web interactif. 
					Que vous soyez débutant ou avancé, notre contenu pédagogique de qualité vous aidera à maîtriser les 
					concepts mathématiques avec facilité. Ce qui est base sur les mesures suivantes: vidéos explicatives, 
					des quiz interactifs ou des tutoriels
				</p>
				<div className="description_items">
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>200+</h2>
						<h5>Video detailles</h5>
					</div>
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>200+</h2>
						<h5>Exercices et solutions</h5>
					</div>
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>200+</h2>
						<h5>Chapitres</h5>
					</div>
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>6</h2>
						<h5>Niveaux de classes</h5>
					</div>
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>1500+</h2>
						<h5>Eleves</h5>
					</div>
					<div className="desc_list">
						<img src={PiVideoDuotone} alt="videos" style={{width: '200px', height: '200px'}}/>
						<img src="../../assets/vid.svg" alt="" /> 
						<h2>1</h2>
						<h5>Espace de discussion</h5>
					</div>
				</div>
			</div>

			<div className="avis">
				<h1>Avis de personnes</h1>
				<a href="" >
					<button className="btn btn_avis">Laisser un avis</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
