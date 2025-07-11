import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroBg = '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_3_about-img.jpg'
const profileImg = '/Life – Dhanraj Nathwani/imgi_2_dhanraj-img.png'
const logo = '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_16_footer-logo.png'
const blogImg = '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_9_DPN-BLOG-IMAGE-400x220.png'
const galleryImgs = [
	'/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_10_DSC_0582.jpg',
	'/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_11_img3.jpg',
	'/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_12_img1.jpg',
	'/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_14_img4.jpg',
]

const perseveranceText = `Perseverance, for me, is the foundational value of success. Indomitable will fuels great achievements and breakthroughs. The transience of life and its infinite ushers in new challenges, which are eventually navigated in the sunlight and get repaired. The key is to see these hardships as opportunities to actualize and better oneself.\n\nI remain in great reverence to my roots. I am deeply grateful for the head start I got with my Western spiritual lineage, but I feel that traditional Indian values are the strongest driving force in my life. My academic and professional ambitions do not only stand on my level of education, but are defined on the ethics and the philosophy that work the soul. I’ve traveled exhaustingly and I believe as I travel further out in the world, we come closer to ourselves, having a greater experience without resources. It was physically, mental stamina for me. They say that a disciplined soul is always free. The life lessons I encountered made me so rich in effort and experience. I keep learning from the world around me on my journey of self-exploration and growth.`

const blogData = {
	title: 'Future India Talks',
	subtitle: 'New India: Marching towards a Green Revolution',
	img: blogImg,
	excerpt: `Climate change has emerged as the greatest threat to humanity today and it is expected to wreak havoc on this planet for future generations. All stakeholders around the globe are looking at ways to curb these adverse effects as climate change is a harsh reality that we are staring at where even the changing rainfall is no longer in check, where heat patterns, famines, water scarcity, distressed agriculture haunts...`,
}

const socialLinks = [
	{ icon: Facebook, href: '#', label: 'Facebook' },
	{ icon: Twitter, href: '#', label: 'Twitter' },
	{ icon: Linkedin, href: '#', label: 'LinkedIn' },
]

function Home() {
	const [galleryIdx, setGalleryIdx] = useState(0)
	const [modalOpen, setModalOpen] = useState(false)

	const nextGallery = () => setGalleryIdx((galleryIdx + 1) % galleryImgs.length)
	const prevGallery = () => setGalleryIdx((galleryIdx - 1 + galleryImgs.length) % galleryImgs.length)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	return (
		<div className={`min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-white`}>
			{/* Hero Section */}
			<section className='relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 pt-28 pb-12 bg-gradient-to-br from-blue-100 via-blue-200 to-white dark:from-slate-900 dark:via-black dark:to-blue-900'>
				{/* Animated SVG/Blob Backgrounds */}
				<motion.div
					className='absolute inset-0 z-0 pointer-events-none'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<svg className='absolute -top-32 -left-32 w-96 h-96 opacity-40 animate-float-slow' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<radialGradient id='grad1' cx='50%' cy='50%' r='50%'>
								<stop offset='0%' stopColor='#60a5fa' stopOpacity='0.7' />
								<stop offset='100%' stopColor='#7c3aed' stopOpacity='0.3' />
							</radialGradient>
						</defs>
						<circle cx='100' cy='100' r='100' fill='url(#grad1)' />
					</svg>
					<svg className='absolute bottom-0 right-0 w-80 h-80 opacity-30 animate-float-slower' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<radialGradient id='grad2' cx='50%' cy='50%' r='50%'>
								<stop offset='0%' stopColor='#a5b4fc' stopOpacity='0.6' />
								<stop offset='100%' stopColor='#6366f1' stopOpacity='0.2' />
							</radialGradient>
						</defs>
						<ellipse cx='100' cy='100' rx='100' ry='80' fill='url(#grad2)' />
					</svg>
				</motion.div>

				{/* Main Content Container: Asymmetrical, responsive layout */}
				<div className='relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 md:gap-20'>
					{/* Left: Glassmorphic Card with Headline and CTAs */}
					<motion.div
						className='flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left'
						initial='hidden'
						animate='visible'
						variants={{
							hidden: {},
							visible: {
								transition: { staggerChildren: 0.15 }
							}
						}}
					>
						{/* Glassmorphic Card */}
						<motion.div
							className='w-full max-w-2xl bg-white/40 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-800/40 shadow-2xl px-6 sm:px-10 py-12 mb-8 md:mb-0 mx-auto flex flex-col items-center md:items-start relative'
							style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							{/* Badge */}
							<motion.span
								className='inline-block px-4 py-1 bg-blue-900/80 text-blue-200 rounded-full text-xs font-semibold tracking-wider shadow-lg animate-pulse mb-4'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								Group President at Reliance Industries Limited.






							</motion.span>
							{/* Animated Gradient Headline */}
							<motion.h1
								className='text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight drop-shadow-xl'
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, delay: 0.1 }}
							>
								Empowering <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x'>Leaders</span> &<br />
								<span className='bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x'>Entrepreneurs</span> to Succeed
							</motion.h1>
							{/* Subtitle */}
							<motion.p
								className='text-xl text-gray-700 dark:text-blue-100 mb-10 max-w-2xl'
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, delay: 0.2 }}
							>
								Director – Reliance New Energy Limited, Vice President of Gujarat Cricket Association, and passionate advocate for youth empowerment and sports development.
							</motion.p>
							{/* Action Buttons */}
							<motion.div
								className='flex flex-wrap gap-6 mb-10 justify-center md:justify-start'
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, delay: 0.3 }}
							>
								<Link to='/connect' className='px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400'>
									Contact US
								</Link>
								<Link to='/initiatives' className='px-8 py-4 border-2 border-blue-400 text-blue-600 dark:text-blue-200 font-semibold rounded-xl shadow-xl hover:bg-blue-800/40 hover:scale-105 active:scale-95 transition-all duration-300 text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400'>
									View Initiatives
								</Link>
							</motion.div>
							{/* Social Proof/Links */}
							<motion.div
								className='flex flex-wrap gap-4 mb-8 justify-center md:justify-start'
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, delay: 0.4 }}
							>
								<a href='https://www.linkedin.com/in/dhanraj-nathwani-b5b07951/?originalSubdomain=in' className='px-5 py-2 bg-blue-900/70 text-blue-200 rounded-lg text-base font-medium hover:bg-blue-800/90 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400'>LinkedIn</a>
								<a href='https://x.com/DhanrajNathwani' className='px-5 py-2 bg-blue-900/70 text-blue-200 rounded-lg text-base font-medium hover:bg-blue-800/90 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400'>Twitter</a>
								<a href='https://www.facebook.com/DhanrajPNathwani/' className='px-5 py-2 bg-yellow-700/80 text-yellow-200 rounded-lg text-base font-medium hover:bg-yellow-800/90 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400'>Facebook</a>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right: Profile Image with Glow/Overlap and Floating Brand Icons */}
					<motion.div
						className='flex-1 flex items-center justify-center w-full mt-12 md:mt-0 relative'
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<div className='absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 blur-2xl opacity-60 animate-pulse pointer-events-none'></div>
						<img
							src={profileImg}
							alt='Dhanraj Nathwani profile'
							className='w-64 sm:w-80 md:w-[340px] lg:w-[400px] h-auto object-contain border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 animate-float-slower bg-white/80 dark:bg-slate-900/80 rounded-2xl'
						/>
						{/* Floating Brand Icons (for extra modern touch) */}
						<motion.div
							className='absolute -top-8 -right-8 flex flex-col gap-4 items-center'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.6 }}
						>
							<span className='bg-white/80 dark:bg-slate-900/80 p-2 rounded-full shadow-lg border border-blue-200 dark:border-blue-900 animate-float'>
								<svg width='28' height='28' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='12' fill='#6366f1'/></svg>
							</span>
							<span className='bg-white/80 dark:bg-slate-900/80 p-2 rounded-full shadow-lg border border-purple-200 dark:border-purple-900 animate-float-slower'>
								<svg width='28' height='28' fill='none' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='8' fill='#7c3aed'/></svg>
							</span>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* About/Intro Section */}
			<section className="py-16 flex justify-center items-center bg-white">
				<motion.div
					className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 text-gray-800 relative"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h3 className="text-2xl font-bold mb-4 text-purple-700">About Dhanraj Parimal Nathwani</h3>
					<p className="mb-6 whitespace-pre-line leading-relaxed">{perseveranceText}</p>
					<Link to="/about" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
						Read More
					</Link>
				</motion.div>
			</section>

			{/* Impact/Stats Section */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="relative z-20 w-full flex justify-center items-center py-10 sm:py-14 bg-gradient-to-br from-blue-50 via-purple-50 to-white"
			>
				<div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl px-2 sm:px-6 py-6 md:py-8">
					{/* Stat 1 */}
					<div className="flex flex-col items-center justify-center text-center px-2 py-4 md:border-r border-white/30">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-3 shadow-lg animate-float">
							<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3b82f6" opacity="0.2"/><path d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
						<div className="text-gray-500 text-base font-medium">Lives Impacted</div>
					</div>
					{/* Stat 2 */}
					<div className="flex flex-col items-center justify-center text-center px-2 py-4 md:border-r border-white/30">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mb-3 shadow-lg animate-float-slow">
							<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ec4899" opacity="0.2"/><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
						<div className="text-gray-500 text-base font-medium">Community Projects</div>
					</div>
					{/* Stat 3 */}
					<div className="flex flex-col items-center justify-center text-center px-2 py-4 md:border-r border-white/30">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-3 shadow-lg animate-float">
							<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e" opacity="0.2"/><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
						<div className="text-gray-500 text-base font-medium">Goals Achieved</div>
					</div>
					{/* Stat 4 */}
					<div className="flex flex-col items-center justify-center text-center px-2 py-4 md:border-r border-white/30">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-3 shadow-lg animate-float-slower">
							<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#a78bfa" opacity="0.2"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
						<div className="text-gray-500 text-base font-medium">Years Experience</div>
					</div>
					{/* Stat 5 */}
					<div className="flex flex-col items-center justify-center text-center px-2 py-4">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-3 shadow-lg animate-float">
							<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#f59e42" opacity="0.2"/><path d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1L12 2l3.09 6.24 6.91 1-5 4.87 1.18 6.88z" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
						<div className="text-gray-500 text-base font-medium">Awards Won</div>
					</div>
				</div>
			</motion.section>

			{/* Blog/Featured Section */}
			<section className="py-24 flex justify-center items-center w-full min-h-[420px]">
				<motion.div
					className="max-w-5xl w-full bg-white/80 dark:bg-slate-800/80 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 items-center backdrop-blur-lg border border-white/30 dark:border-slate-700/60"
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<img src={blogData.img} alt="Blog" className="w-56 h-40 object-cover rounded-2xl shadow-lg mb-4 md:mb-0" />
					<div className="flex-1 flex flex-col items-center md:items-start">
						<h4 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2 uppercase tracking-wider">BLOG</h4>
						<h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{blogData.title}</h2>
						<h3 className="text-xl text-blue-700 dark:text-blue-300 mb-2 font-semibold">{blogData.subtitle}</h3>
						<p className="text-gray-700 dark:text-gray-200 mb-6 text-base leading-relaxed">{blogData.excerpt}</p>
						<Link to="/leadership-journal" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 text-lg">Read More</Link>
					</div>
				</motion.div>
			</section>

			{/* Gallery Section */}
			<section className="py-24 flex flex-col items-center w-full min-h-[500px] bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
				<h3 className="text-3xl font-bold mb-12 text-purple-700 dark:text-purple-400 text-center">Gallery</h3>
				<div className="relative w-full max-w-6xl flex items-center justify-center">
					<button onClick={prevGallery} className="absolute left-0 z-10 p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:bg-purple-100 dark:hover:bg-purple-700 transition-all"><ArrowLeft className="w-7 h-7 text-purple-600" /></button>
					<motion.img
						key={galleryIdx}
						src={galleryImgs[galleryIdx]}
						alt={`Gallery ${galleryIdx + 1}`}
						className="w-full max-w-4xl h-[420px] sm:h-[500px] object-cover rounded-3xl shadow-2xl mx-8 cursor-pointer hover:scale-105 hover:shadow-3xl transition-transform duration-300"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						onClick={openModal}
					/>
					<button onClick={nextGallery} className="absolute right-0 z-10 p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:bg-purple-100 dark:hover:bg-purple-700 transition-all"><ArrowRight className="w-7 h-7 text-purple-600" /></button>
				</div>
				{/* Modal for enlarged image */}
				<AnimatePresence>
					{modalOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
							onClick={closeModal}
						>
							<motion.img
								src={galleryImgs[galleryIdx]}
								alt={`Gallery Large ${galleryIdx + 1}`}
								className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl border-4 border-white"
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								transition={{ duration: 0.3 }}
							/>
							<button onClick={closeModal} className="absolute top-8 right-8 bg-white/80 hover:bg-white text-purple-700 rounded-full p-2 shadow-lg"><X className="w-7 h-7" /></button>
						</motion.div>
					)}
				</AnimatePresence>
			</section>

			{/* Latest Media Coverage Section */}
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="py-20 bg-gradient-to-br from-violet-100 via-violet-200 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
							Latest Media Coverage
						</h2>
						<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
							Stay updated with Dhanraj Nathwani's latest interviews, speeches, and media appearances highlighting his work in energy, social initiatives, and public service.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
						{/* Main Featured Media (left) */}
						<div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between mb-8 lg:mb-0">
							<div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
								<img
									src="/Gallery – Dhanraj Nathwani/imgi_15_3-600x380.jpg"
									alt="Latest Interview on Energy Solutions"
									className="absolute inset-0 w-full h-full object-cover rounded-xl"
								/>
								<button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300">
									<svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
								</button>
								<span className="sr-only">Play Video</span>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Latest Interview on Energy Solutions</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-2">Discussing sustainable energy initiatives and future plans</p>
						</div>
						{/* Media List (right) */}
						<div className="flex-1 flex flex-col gap-4">
							<div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 flex flex-col gap-4">
								<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors duration-200 cursor-pointer">
									<img src="/Gallery – Dhanraj Nathwani/imgi_15_3-600x380.jpg" alt="Parliamentary Address" className="w-16 h-12 object-cover rounded-lg" />
									<div className="flex-1">
										<a href="#" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">Parliamentary Address on Renewable Energy</a>
										<div className="text-xs text-gray-500">December 2023</div>
									</div>
									<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								</div>
								<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors duration-200 cursor-pointer">
									<img src="/Gallery – Dhanraj Nathwani/imgi_17_9-600x380.jpg" alt="Social Development" className="w-16 h-12 object-cover rounded-lg" />
									<div className="flex-1">
										<a href="#" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">Social Development Initiatives in Gujarat</a>
										<div className="text-xs text-gray-500">November 2023</div>
									</div>
									<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								</div>
								<div className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors duration-200 cursor-pointer">
									<img src="/Gallery – Dhanraj Nathwani/imgi_18_8-600x380.jpg" alt="Leadership in Public Service" className="w-16 h-12 object-cover rounded-lg" />
									<div className="flex-1">
										<a href="#" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">Leadership in Public Service</a>
										<div className="text-xs text-gray-500">October 2023</div>
									</div>
									<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								</div>
							</div>
							<a href="#" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg">View All Media</a>
						</div>
					</div>
				</div>
			</motion.section>
  </div>
)
}

export default Home 