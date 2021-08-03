import React from 'react'
import cards from '../assets/cards.png';

const LandingPage = () => {
  return (
    <div>
      <div className="block premier">
        <div>Trackmania</div>
        <div>Devenez la meilleure version de vous même.</div>
        <a href="/">Partez !</a>
      </div>
      <div className="block deuxième">
        <div className="paragraphe">
          <p><span>Trackmania</span> enregistre vos performances sportives afin que vous ayez toujours un oeil sur vos objectifs.</p>
          <p>Son design intuitif et ergonomique vous permet de l'emmener partout avec vous.</p>
        </div>
        <div><img src={cards} alt="cards"></img></div>
      </div>
      <div className="block troisième">
        <div></div>
        <div className="paragraphe">
          <p>Rejoignez une communauté ambitieuse et soudée.</p>
          <a href="/">Bouton</a>
        </div>
      </div>
      <div className="block quatrième"></div>
    </div>
  )
}

export default LandingPage
