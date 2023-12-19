import React from "react";
import "./home.css"
import Testimonials from "./testimonials/testimonials";
import vid from "../.././components/assets/vid.svg"
import student from "../.././components/assets/students.svg"
import exercise from "../.././components/assets/exercise.svg"
import discussion from "../.././components/assets/discussion.svg"
import chapter from "../.././components/assets/chapters.svg"
import level from "../.././components/assets/level.svg"

const Home = () => {
	return (
		<div className="container0">
			<div className="container1">
			<div className="containerFocus"> 
				<h1>Apprends les Maths et ma tiques en Ligne</h1>
				<p>Mathématiques Simplifiées. Tes exercices, chapitres, et tes cours de maths à l'infini, des questions comme au contrôle, a l’examen, ou a l’evaluation le tout 100% en ligne. </p>
				<div className="niveauClasse">
					<a href="/cours&exercice/terminale">
						<button className="btn0 btnTerminale" >Terminale</button>
					</a>
					<a href="/cours&exercice/premiere" >
						<button className="btn0 btnPremiere">Premiere</button>
					</a>
					<a href="/cours&exercice/seconde" >
						<button className="btn0 btnSeconde">Seconde</button>
					</a>
					<a href="/cours&exercice/troisieme" >
						<button className="btn0 btnTroisieme">Troisieme</button>
					</a>
				</div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/FeY2PspBunQ?si=Wa-GiEGPJg2HITXh?=hd1080" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
			</div>

			<div className="containerFocus">
				<h1>Actualites sur le site</h1>
				<p>Nouvelle section, vous avez la possibilite de suivre vos progres sur le site <br /> vous avez desormais la possibilite de discuter avec des camarades sur le site</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/t5gb14M6Df4?vq=hd1080&amp;controls=0"  title="la" frameborder="0" allowfullscreen></iframe>
				<h2>Dernieres mises a jours</h2>
				<p>la derniere mise a jours a ete fait le 6 Dec 2023, ce qui vous donne un plus large espace de travail et de travail en groupe</p>
			</div>
			</div>

			<div className="description0">
				<h1>Description</h1>
				<p>
					Découvrez les mathématiques de manière ludique et accessible grâce à notre site web interactif. 
					Que vous soyez débutant ou avancé, notre contenu pédagogique de qualité vous aidera à maîtriser les 
					concepts mathématiques avec facilité. Ce qui est base sur les mesures suivantes: vidéos explicatives, 
					des quiz interactifs ou des tutoriels
				</p>
				<div className="description_items">
					<div className="desc_list">
						<img src={vid} alt="videos" /> 
						<span className="note_importante">200+</span>
						<span className="note">Vidéo detaillés</span>
					</div>
					<div className="desc_list">
						<img src={exercise} alt="exercices" /> 
						<span className="note_importante">200+</span>
						<span className="note">Exercices et solutions</span>
					</div>
					<div className="desc_list">
						<img src={chapter} alt="chapitres" /> 
						<span className="note_importante">200+</span>
						<span className="note">Chapitres</span>
					</div>
					<div className="desc_list">
						<img src={level} alt="niveau" /> 
						<span className="note_importante">6</span>
						<span className="note">Niveaux de classes</span>
					</div>
					<div className="desc_list">
						<img src={student} alt="eleves" /> 
						<span className="note_importante">1500+</span>
						<span className="note">Eleves</span>
					</div>
					<div className="desc_list">
						<img src={discussion} alt="discussion" /> 
						<span className="note_importante">1</span>
						<span className="note">Espace de discussion</span>
					</div>
				</div>
			</div>

			<div className="avis">
				<h1>Avis de personnes</h1>
				<Testimonials/>
				<a href="https://www.youtube.com/@MathsAvecAubin" target="_blank" rel="noreferrer">
					<button className="btn0 btn_avis">Laisser un avis</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
