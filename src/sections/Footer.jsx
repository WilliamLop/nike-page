
import {footerLogo} from '../assets/images'
import SocialMediaCard from '../components/SocialMediaCard'
import { footerLinks, socialMedia } from '../constants'

export const Footer = () => {
  return (
    <section id="footer" className="grid gap-6 max-container lg:grid-cols-[.5fr,1fr] items-start lg:gap-10
    lg:justify-between">
      {/* First Container */}
      <div className="grid gap-4 justify-items-center text-center lg:text-left 
        lg:justify-items-start">
        <img src={footerLogo} alt="" width={150} height={46} />
        <p className="text-white-400 lg:max-w-sm text-lg leading-8">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
        </p>
        <div className="grid grid-cols-3 gap-6">
            {socialMedia.map((social) => (
              <SocialMediaCard key={social} {...social} />
            ))};
        </div>
      </div>

      {/* Second Container */}
      <div className="grid gap-12 justify-center text-center lg:text-left justify-items-end lg:grid-cols-3 items-start">
        {footerLinks.map((section) => (
          <div key={section.title} className="grid gap-4">
            <h4 className="text-white font-palanquin font-medium text-3xl">{section.title}</h4>
            <ul className="leading-10">
              {section.links.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-white-400 text-lg hover:text-coral-red
                duration-300 ease-in-out">{link.name}</a>
              </li>
            ))}
            </ul>
          </div>
        ))};
      </div>

      {/* COPY */}
      <div className="grid justify-center text-slate-300 text-center gap-4 text-lg lg:text-left lg:grid-cols-2
        items-center lg:col-start-1 lg:col-end-3">
        <p className="">Copyright. All rights reserved fenbapps.</p>
        <p className="text-right font-montserrat">Terms & Conditions</p>
      </div>
    </section>
  )
}
export default Footer
