import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { orgs } from '../orgs-data'

const heroImg = '/Life – Dhanraj Nathwani/imgi_2_dhanraj-img.png'
const introImg = '/Life – Dhanraj Nathwani/imgi_24_dhanraj-img-203x300.png'
const interests = [
  {
    id: 'sports',
    label: 'Sports',
    img: '/Life – Dhanraj Nathwani/imgi_3_Football-Zommed-In1-600x350.jpg',
    desc: `Every person has their own hooks in life. Something that excites us to no end. For me, such enthusiasm always surfaces for sports, the national favourite, cricket, is my first love. After that, football has always been the sport that embodies me to cheer on cricket. Together, these two sports make sure that I come alive from time to time.`
  },
  {
    id: 'social-work',
    label: 'Social Work',
    img: '/Life – Dhanraj Nathwani/imgi_4_2-2-600x350.png',
    desc: `Growing up in the shadow of compassionate souls like Shri Dhirubhai Ambani and my father, I have always been aware of the realities of the world. In my own humble way, I feel blessed to help people and work for certain causes in the past. Currently, however, it is the backing of institutions like the Reliance Industries Limited, through their CSR initiatives, have given me a platform to work systematically and vigorously toward the betterment of people, especially of those living in and around Jamnagar.`
  },
  {
    id: 'travel-photography',
    label: 'Travel & Photography',
    img: '/Life – Dhanraj Nathwani/imgi_5_3-1-600x350.png',
    desc: `Gazing the endless horizons make me wonder what lies on the other side of the earth. In those times, I feel in my heart the urge to venture out and explore. Which I do. It is the myriad forms in which nature has created life that catch my fancy and the desire to capture the moment forever with my lens is what directs my next actions. Owing to these passions, I always try to create as many opportunities for travel as my time permits, as the new destinations have been a popular tourist attraction and remote secluded paradises – local and global, and my companions have been my friends, my family or my solitude.`
  },
  {
    id: 'nature-wildlife',
    label: 'Nature & Wildlife',
    img: '/Life – Dhanraj Nathwani/imgi_6_nature.jpg',
    desc: `Having lived in urban landscapes all my life, I feel the strong desire to connect with nature from time to time. The love grows stronger and I am frequently drawn towards destinations that make me feel one with nature. Another however, made me aware of the perils that affect the wildlife and the environment. I use my father’s guidance and in my limited capacity, try to create awareness on these issues from time to time, as I sincerely believe that humble contributions from individuals go a long way in bringing change on a larger scale.`
  },
]
const footerLogo = '/Life – Dhanraj Nathwani/imgi_19_footer-logo.png'

const aboutText = `Dhanraj Parimal Nathwani\n\nPerseverance, for me, is the foundational value of success. Indomitable will fuels great achievements and breakthroughs. The transience of life and its infinite ushers in new challenges, which are eventually navigated in the sunlight and get repaired. The key is to see these hardships as opportunities to actualize and better oneself.\n\nI remain in great reverence to my roots. I am deeply grateful for the head start I got with my Western spiritual lineage, but I feel that traditional Indian values are the strongest driving force in my life. My academic and professional ambitions do not only stand on my level of education, but are defined on the ethics and the philosophy that work the soul. I’ve traveled exhaustingly and I believe as I travel further out in the world, we come closer to ourselves, having a greater experience without resources. It was physically, mental stamina for me. They say that a disciplined soul is always free. The life lessons I encountered made me so rich in effort and experience. I keep learning from the world around me on my journey of self-exploration and growth.`

function About() {
	return (
		<div className="min-h-screen pt-20 bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-violet-100 via-violet-200 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="flex-1 text-center md:text-left"
					>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
							About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dhanraj Parimal Nathwani</span>
						</h1>
						<h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-blue-200 mb-4">Business Leader <span className="mx-2">|</span> Visionary <span className="mx-2">|</span> Sports Administrator</h2>
						<p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
							"Elevated for the next generation. Blue horizons, bold ambitions, bright spirit."
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1 }}
						className="flex-1 flex justify-center md:justify-end"
					>
						<img src={heroImg} alt="Dhanraj Nathwani Hero" className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-violet-400 shadow-2xl" />
					</motion.div>
				</div>
			</section>

			{/* About/Intro Section */}
			<section className="py-20 bg-white dark:bg-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
					<motion.img
						src={introImg}
						alt="Dhanraj Nathwani Intro"
						className="w-56 h-80 object-cover rounded-xl shadow-xl border-4 border-violet-300/60 bg-white/20"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					/>
					<motion.div
						className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-3xl font-bold mb-4 text-violet-700 dark:text-violet-300">About Dhanraj Parimal Nathwani</h3>
						<div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full mb-6 animate-pulse" />
						<p className="mb-6 whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-100 text-lg font-medium">{aboutText}</p>
					</motion.div>
				</div>
			</section>

			{/* Interests Section */}
			<section className="py-20 bg-gray-50 dark:bg-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h3 className="text-3xl lg:text-4xl font-bold text-violet-700 dark:text-violet-300 mb-4">Interests</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							A glimpse into my passions and pursuits beyond business and leadership.
						</p>
					</motion.div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{interests.map((interest, idx) => (
							<motion.button
								key={interest.id}
								onClick={() => {
									const el = document.getElementById(interest.id)
									if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
								}}
								className="relative group rounded-2xl overflow-hidden shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-400"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								tabIndex={0}
								aria-label={`Go to ${interest.label}`}
							>
								<img src={interest.img} alt={interest.label} className="w-full h-48 object-cover" />
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									whileFocus={{ opacity: 1 }}
									className="absolute inset-0 bg-violet-900/80 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
								>
									{interest.label}
								</motion.div>
							</motion.button>
						))}
					</div>
					{/* Detailed Interest Sections */}
					<div className="mt-24 flex flex-col gap-24">
						{interests.map((interest, idx) => (
							<motion.section
								id={interest.id}
								key={interest.id}
								className={`scroll-mt-32 flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 md:gap-20`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: idx * 0.1 }}
							>
								<img src={interest.img} alt={interest.label} className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-xl" />
								<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
									<h4 className="text-2xl md:text-3xl font-bold mb-4 text-violet-700 dark:text-violet-300">{interest.label}</h4>
									<div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full mb-6 animate-pulse" />
									<p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-medium mb-2">{interest.desc}</p>
								</div>
							</motion.section>
						))}
					</div>
				</div>
			</section>

			{/* Organizations/Initiatives Section */}
			<section className="py-20 bg-white dark:bg-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h3 className="text-3xl lg:text-4xl font-bold text-violet-700 dark:text-violet-300 mb-4">Organizations & Initiatives</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							A portfolio of organizations and initiatives I am proud to be part of.
						</p>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{orgs.map((org, idx) => (
							<motion.div
								key={org.slug}
								className="bg-gray-50 dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col md:flex-row items-center gap-8 overflow-hidden"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
							>
								<img src={org.img} alt={org.title} className="w-full md:w-56 h-48 md:h-56 object-cover rounded-xl" />
								<div className="flex-1 p-6 flex flex-col items-center md:items-start text-center md:text-left">
									<h4 className="text-xl md:text-2xl font-bold mb-2 text-violet-700 dark:text-violet-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{org.title}</h4>
									<p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-2">{org.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900 text-white py-12 mt-16 rounded-t-3xl shadow-2xl border-t-2 border-violet-400/30">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
					<img src={footerLogo} alt="Footer Logo" className="w-32 mb-4 md:mb-0" />
					<div className="text-center md:text-right">
						<p className="text-lg font-semibold mb-2">Feel free to connect for collaborations, mentorship, or to know more about my journey.</p>
						<p className="text-blue-200 text-sm">© {new Date().getFullYear()} Dhanraj Nathwani. All rights reserved.</p>
    </div>
				</div>
			</footer>
  </div>
)
}

export default About 