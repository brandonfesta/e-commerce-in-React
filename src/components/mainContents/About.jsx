import { Link } from "react-router-dom"

export default function About(){
   return (
      <div>
         <section className="hero">
            <div className="overlay"></div>

            <div className="hero-content">
               <h1>Learn more about what we do</h1>
               <p>Everything you need to know about <b>Discovery</b></p>
            </div>
         </section>

         <section className="about">

            <h1>Welcome to Discovery</h1>

            <p>
               <strong>Discovery</strong> exists for one simple reason: information should be accessible to everyone.
            </p>

            <p>
               We live in a world where news is everywhere, yet understanding is often missing.
               Headlines move fast, stories disappear in minutes, and important topics often get
               buried under noise. Discovery was created to slow things down — not to lecture,
               but to help people see what’s happening and why it matters.
            </p>

            <p>
               This site is driven by curiosity and a sense of responsibility. Curiosity to explore
               the world as it is, and responsibility to share information clearly, honestly, and
               without unnecessary complexity. News should not feel distant or intimidating —
               it should feel understandable.
            </p>

            <p>
               Discovery covers general news across politics, technology, science, culture,
               economy, and society. The goal is not to tell you what to think, but to give you
               the tools to form your own opinions through reliable and accessible reporting.
            </p>

            <p>
               Informing people is not just a passion — it’s a duty. A well-informed society is
               a stronger society, and access to information should never be a privilege.
               Discovery exists to contribute, even in a small way, to that idea.
            </p>

            <p>
               Whether you are here to stay updated, to learn something new, or simply to
               understand the world a little better, Discovery welcomes you.<br/><br /><small>---- Made by ChatGPT ;)</small>
            </p>
         </section>
      </div>
   )
};

