'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Menu, X, Zap, Trophy, Gamepad2, Users } from 'lucide-react';

const MINT = 'https://gravemint.io/mint/4cdoxf';
const questions = [
  'What is Excited Hamsters?',
  'What are the planned collection supplies and release dates?',
  'Which collection comes first?',
  'What are the Power-Up NFT types?',
  'What utility is being considered?',
  'Is Excited Hamsters becoming a game?',
  'What roles are planned for the characters?',
  'What is a Genesis Holder?',
  'How do Discord XP and Power-Up support work?',
  'Where can I follow roadmap updates?',
  'What are the Phase 1 mint details?'
];
const features = [
  ['01', 'Character Collections in Progress', 'Phase 1 includes 250 Hamster NFTs and is planned for October 23, 2026. Beaver and Moose collections are in pre-production, with supplies and release timing TBD.'],
  ['02', 'Developing Game Roles', 'Hamsters lead the race, Beavers build obstacles and Moose clear the path. More gameplay details will be shared as development continues.'],
  ['03', 'Power-Ups With Purpose', 'Green supports eligible evolution claims, while Red and Yellow redeem through Discord for 10 XP and 50 XP. Power-Ups used in completed claims are burned.'],
  ['04', 'An Evolving Roadmap', 'The roadmap moves forward as each collection is ready. Follow official updates for finalized launch details, Vault features and new playable experiences.']
];
const phases = [
  ['PHASE 1 · OCTOBER 23, 2026', 'Hamsters', 'Phase 1 includes 250 Hamster NFTs and is planned for release on October 23, 2026. The mint price is 80 USDC on the Ethereum network.'],
  ['PHASE 2 · TBD', 'Beavers', 'Beaver visual direction is developed, while large-scale trait and collection production has not begun. Supply and release timing remain TBD. The collection is currently slated to begin in 2D, with 3D versions planned for later metaverse use.'],
  ['PHASE 3 · TBD', 'Moose', 'Moose visual direction is developed, while large-scale trait and collection production has not begun. Supply and release timing remain TBD. The collection is currently slated to begin in 2D, with 3D versions planned for later metaverse use.']
];
function CTA({ children, href = MINT, outline = false }: {children: React.ReactNode; href?: string; outline?: boolean}) {
  return <a className={outline ? 'cta cta-outline' : 'cta'} href={href} target={href.startsWith('#') ? undefined : '_blank'} rel="noreferrer">{children}<ArrowUpRight size={16}/></a>;
}
export default function Home() {
  const [faq, setFaq] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);
  const [slide, setSlide] = useState(0);
  return <main>
    <div className="ticker"><span>EXCITED HAMSTERS</span><span>RACE · SABOTAGE · TEAM UP</span><a href={MINT}>LIVE PHASE 1 MINT ↗</a></div>
    <header className="nav shell">
      <a className="logo" href="#home"><span>🐹</span><b>EXCITED<br/>HAMSTERS</b></a>
      <nav className={menu ? 'links show' : 'links'}>
        {['Characters','Collection','Media','Game','Community','FAQ'].map((v,i)=><a key={v} href={['#characters','#collection','#media','#game','#community','#faq'][i]} onClick={()=>setMenu(false)}>{v}</a>)}
      </nav>
      <div className="nav-end"><CTA>Mint now</CTA><button className="menu-button" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button></div>
    </header>

    <section className="hero" id="home">
      <div className="hero-shape shape-a"/><div className="hero-shape shape-b"/>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><i/>WELCOME TO EXCITED HAMSTERS</div>
          <h1>Race.<br/><em>Sabotage.</em><br/>Team Up.</h1>
          <p>Explore a planned collectible and mobile-game ecosystem where Hamsters race through maze-like courses, Beavers create obstacles, Moose clear paths, and Power-Ups add another layer of strategy.</p>
          <div className="hero-buttons"><CTA>JOIN THE RACE</CTA><CTA href="#characters" outline>MEET THE CHARACTERS</CTA></div>
          <div className="hero-caption"><span>01 / 03</span><span>THE RACE STARTS HERE ↓</span></div>
        </div>
        <div className="race-art">
          <div className="race-scene">
            <div className="cloud cloud-one"/><div className="cloud cloud-two"/>
            <div className="pine pine-one">♠</div><div className="pine pine-two">♠</div><div className="pine pine-three">♠</div>
            <div className="race-logo">EXCITED<br/><strong>HAMSTERS</strong><small>RACE · SABOTAGE · SURVIVE</small></div>
            <div className="driver driver-one">🐹</div><div className="driver driver-two">🫎</div>
            <div className="kart kart-one">🏎️</div><div className="kart kart-two">🚙</div>
            <div className="road-stripe"/>
          </div>
          <div className="sticker sticker-left">🏁<b>RACE</b><small>TO THE FINISH!</small></div>
          <div className="sticker sticker-right">⚡<b>POWER UP</b><small>WIN TOGETHER!</small></div>
        </div>
      </div>
      <div className="hero-footer shell"><span>BUILT FOR THE BOLD</span><span>HAMSTER HOLLOW · EST. 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="mint shell" id="collection">
      <div className="mint-copy">
        <div className="eyebrow gold">LIVE PHASE 1 MINT</div>
        <h2>The First Hamster<br/><em>Collectible</em></h2>
        <p>Live mint details come directly from GraveMint, including the current phase, price, opening time, wallet limit, and mint count.</p>
        <div className="stats">
          <div><small>PHASE</small><b>Whitelist</b></div><div><small>OPENS</small><b>Oct 23 at 6:15 PM CDT</b></div>
          <div><small>WHITELIST PRICE</small><b>70 USDC</b></div><div><small>MINT LIMIT</small><b>10 per wallet</b></div>
        </div>
        <p className="discount">Whitelist price: 70 USDC — 10 USDC off the 80 USDC public price.</p>
        <div className="mint-actions"><CTA>VIEW LIVE MINT DETAILS</CTA><a href={MINT}>Refresh details ↗</a></div>
        <small className="note">The mint page includes the full countdown, age confirmation, wallet-safety guidance, and a verified link to GraveMint checkout.</small>
      </div>
      <div className="mint-art"><span className="open-pill">OPEN NOW</span><div className="king">👑<span>🐹</span></div><div className="mint-meter"><b>Whitelist is open</b><span>51 of 250 minted</span><i><b/></i><small>199 remaining</small></div></div>
    </section>

    <section className="section shell" id="characters">
      <div className="section-heading"><div><div className="eyebrow">THE WORLD OF EXCITED HAMSTERS</div><h2>Cute Characters.<br/><em>Chaotic Competition.</em></h2></div><p>Excited Hamsters is building a collectible ecosystem around planned Hamster, Beaver and Moose collections, three Power-Up NFT types, live Discord community systems, a published Decentraland world and a developing mobile racing and maze game.</p></div>
      <div className="feature-grid">{features.map((f,i)=><motion.article className="feature" key={f[0]} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span className="number">{f[0]}</span><div className="feature-icon">{[<Trophy/>,<Gamepad2/>,<Zap/>,<ArrowUpRight/>][i]}</div><h3>{f[1]}</h3><p>{f[2]}</p></motion.article>)}</div>
    </section>

    <section className="gallery" id="media"><div className="shell"><div className="eyebrow">OFFICIAL CHARACTER ARTWORK</div><div className="gallery-heading"><h2>Meet the Hamsters—and the collections still <em>ahead</em></h2><div className="arrows"><button onClick={()=>setSlide(Math.max(0,slide-1))}><ChevronLeft/></button><button onClick={()=>setSlide(Math.min(6,slide+1))}><ChevronRight/></button></div></div><p className="gallery-intro">Scroll through nine official Hamster previews, followed by the Beaver and Moose silhouettes representing future planned character collections.</p><div className="nft-track" style={{transform:'translateX(-'+(slide*245)+'px)'}}>{Array.from({length:9},(_,i)=><article className="nft-card" key={i}><div className="nft-picture"><span>{['🐹','👑🐹','🐹','🐹','🐹','🐹','🐹','🐹','🐹'][i]}</span><small>EXCITED HAMSTERS</small></div><div><small>OFFICIAL HAMSTER ARTWORK</small><b>Hamster Preview {String(i+1).padStart(2,'0')}</b></div></article>)}</div><div className="gallery-foot">Scroll or use the arrow controls to explore the full set.</div></div></section>

    <section className="community" id="community"><div className="shell"><div className="eyebrow gold">DISCORD COMMUNITY + LIVE WORLD</div><div className="section-heading"><h2>The community is live.<br/><em>The ecosystem is growing.</em></h2><p>Join the Excited Hamsters Discord for community XP, Vault news, project announcements and Support Desk access, or explore our growing Decentraland and Spawn worlds.</p></div>
      <div className="community-grid">
        <article><label>LIVE IN DISCORD</label><div className="community-icon">⚡</div><h3>Discord XP</h3><p>Community members can earn XP through activity in the official Excited Hamsters Discord.</p><ul><li>Everyone may accumulate Discord XP.</li><li>Genesis Holders earn XP at a higher rate.</li><li>Check your XP and community standings through Discord.</li></ul></article>
        <article><label>LIVE IN DISCORD</label><div className="community-icon">🎟️</div><h3>Support Desk &amp; Power-Up claims</h3><p>Open a private Discord Support Desk ticket for help or to begin a Power-Up claim.</p><ul><li>Green, Red and Yellow Power-Up claims begin in Discord.</li><li>Follow the Support Desk prompts to submit your request.</li></ul></article>
        <article><label className="blue-label">ACTIVE DEVELOPMENT</label><div className="community-icon">🔐</div><h3>Excited Hamsters Vault</h3><p>The Vault connects Discord XP with holder rewards and metaverse experiences.</p><ul><li>XP earned before holder verification remains with the member.</li><li>Verified Hamster, Beaver and Moose holders can unlock holder-only Vault features.</li><li>Vault reward redemptions will be announced as they become available.</li></ul></article>
        <article><label className="blue-label">LIVE · ACTIVE DEVELOPMENT</label><div className="community-icon">🌎</div><h3>Excited Hamsters in Decentraland</h3><p>The world at excitedhamsters.dcl.eth is live, with more activities and experiences on the way.</p><ul><li>Explore the world at excitedhamsters.dcl.eth.</li><li>Evolved 3D avatars are planned for future game and metaverse use.</li></ul></article>
        <article><label className="blue-label">LIVE · ACTIVE DEVELOPMENT</label><div className="community-icon">🎮</div><h3>Excited Hamsters on Spawn</h3><p>The playable Excited Hamsters world on Spawn is live and continues to grow.</p><ul><li>Jump into the current playable experience on Spawn.</li><li>New world details and activities will be shared through project updates.</li></ul></article>
      </div>
      <div className="community-buttons"><CTA href="https://discord.com/">JOIN DISCORD</CTA><CTA href="https://decentraland.org/">ENTER DECENTRALAND</CTA><CTA href="https://spawn.co/@bitfiend/excited-hamsters">PLAY ON SPAWN</CTA></div>
    </div></section>

    <section className="roadmap shell" id="game"><div className="eyebrow">THREE CHARACTER COLLECTIONS · THREE POWER-UP TYPES</div><h2>Ecosystem <em>Roadmap</em></h2><p className="roadmap-intro">The roadmap brings together Hamster, Beaver and Moose collections with Green, Red and Yellow Power-Up utility. Phase 1 includes 250 Hamster NFTs planned for October 23, 2026; Beaver and Moose supplies and release timing remain TBD.</p>
      <div className="timeline">{phases.map((p,i)=><motion.article key={p[1]} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="phase"><span className="phase-number">0{i+1}</span><div><small>{p[0]}</small><h3>{p[1]}</h3><p>{p[2]}</p></div><label>{i===0?'PHASE 1':'PLANNED'}</label></motion.article>)}</div><div className="roadmap-button"><CTA href="#faq" outline>REVIEW THE FULL ROADMAP</CTA></div>
    </section>

    <section className="faq" id="faq"><div className="shell"><div className="eyebrow">BEFORE THE STARTING FLAG</div><h2>Roadmap <em>Questions</em></h2><p>See what's planned, what's already live and what's taking shape across the Excited Hamsters universe.</p><div className="faq-list">{questions.map((q,i)=><div className="faq-row" key={q}><button onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}>{q}<ChevronDown className={faq===i?'turned':''}/></button>{faq===i&&<div className="answer">{['Excited Hamsters is building a collectible ecosystem around planned Hamster, Beaver and Moose collections, three Power-Up NFT types, live Discord community systems, a published Decentraland world and a developing mobile racing and maze game.','Phase 1 includes 250 Hamster NFTs. Beaver and Moose supplies and release timing remain TBD.','Hamsters are the first collection.','The three Power-Up NFT types are Green, Red and Yellow.','Green supports eligible evolution claims, while Red and Yellow redeem through Discord for 10 XP and 50 XP.','A mobile racing and maze game is in development.','Hamsters lead the race, Beavers build obstacles and Moose clear the path.','Genesis Holders earn XP at a higher rate.','Green, Red and Yellow Power-Up claims begin in Discord.','Follow official updates for finalized launch details, Vault features and new playable experiences.','Live mint details come directly from GraveMint.'][i]}</div>}</div>)}</div></div></section>

    <footer><div className="shell"><div className="footer-main"><div><a className="logo footer-logo" href="#home"><span>🐹</span><b>EXCITED<br/>HAMSTERS</b></a><h2>Race together.<br/>Build together.<br/><em>Create chaos together.</em></h2></div><div className="footer-links"><div><b>EXPLORE</b>{['Characters','Collection','Media','Game','Race Map','Community','Updates','FAQ','Mint'].map((v,i)=><a key={v} href={['#characters','#collection','#media','#game','#game','#community','#community','#faq',MINT][i]}>{v}</a>)}</div><div><b>COMMUNITY</b><a href="https://discord.com/">Discord</a><a href="https://decentraland.org/">Decentraland</a><a href="https://spawn.co/@bitfiend/excited-hamsters">Spawn</a></div></div></div><div className="footer-bottom"><span>© 2026 Excited Hamsters. All rights reserved.</span><span><a href="https://excitedhamsters.com/terms/">Terms of Use</a><a href="https://excitedhamsters.com/privacy/">Privacy Policy</a></span></div></div></footer>
  </main>;
}
