import React from 'react'
import cards from '../assets/cards.png';
import avatar1 from '../assets/danny.jpg';
import avatar2 from '../assets/omid.jpg';
import avatar3 from '../assets/yang.jpg';
import { GrBlockQuote } from 'react-icons/gr';
import { IoEarthSharp } from 'react-icons/io5';


const LandingPage = () => {
  return (
    <div>
      <div className="block premier">
        <div>Trackmania</div>
        <div>Devenez la meilleure version de vous même.</div>
        <a href="/auth">Partez !</a>
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
          <div>
            <IoEarthSharp />
            <p><span>Trackmania</span> a fait ses preuves aux quatres coins du monde. A vous de faire les votres ! Rejoignez une communauté ambitieuse et soudée.</p>
          </div>
          <a href="/auth">Je suis prêt !</a>
        </div>
      </div>
      <div className="block quatrième">
        <div>
          <img src={avatar1} alt="portrait"></img>
          <div>
            <GrBlockQuote />
            <p>Trackmania m'a aidé à passer en première division. Mon rêve.</p>
            <p>- Danny</p>
          </div>
        </div>
        <div>
          <img src={avatar2} alt="portrait"></img>
          <div>
            <GrBlockQuote />
            <p>J'ai réussi à franchir les 9km en moins d'une heure grâce à Trackmania. Maintenant je vise les 10km !</p>
            <p>- Omid</p>
          </div>
        </div>
        <div>
          <img src={avatar3} alt="portrait"></img>
          <div>
            <GrBlockQuote />
            <p>Trackmania a changé ma vie en m'aidant à retrouver une forme physique.</p>
            <p>- Yang</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
