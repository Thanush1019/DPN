import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ExternalLink, Users, Target, Award, TrendingUp, Calendar, MapPin } from 'lucide-react'

const Initiatives = () => {
	const [initiativesRef, initiativesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [currentRef, currentInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const initiatives = [
		{
			title: 'Youth Cricket Development Program',
			description: 'Comprehensive training and development program for young cricketers across Gujarat, focusing on skill development, fitness, and character building.',
			icon: '🏏',
			category: 'Sports Development',
			status: 'Active',
			impact: '5000+ youth trained',
			year: '2020-Present',
			location: 'Gujarat',
			link: '#',
		},
		{
			title: 'Digital Cricket Academy',
			description: 'Innovative online platform providing cricket coaching, analysis, and mentorship to players across different skill levels.',
			icon: '💻',
			category: 'Digital Innovation',
			status: 'Active',
			impact: '10,000+ users',
			year: '2021-Present',
			location: 'Pan India',
			link: '#',
		},
		{
			title: 'Infrastructure Modernization',
			description: 'Comprehensive upgrade of cricket facilities and stadiums across Gujarat, including training centers and match venues.',
			icon: '🏟️',
			category: 'Infrastructure',
			status: 'Ongoing',
			impact: '25+ facilities upgraded',
			year: '2019-Present',
			location: 'Gujarat',
			link: '#',
		},
		{
			title: 'Women Cricket Empowerment',
			description: 'Dedicated program to promote and develop women\'s cricket in Gujarat, creating opportunities and pathways for female players.',
			icon: '👩‍🏏',
			category: 'Gender Equality',
			status: 'Active',
			impact: '1000+ women players',
			year: '2022-Present',
			location: 'Gujarat',
			link: '#',
		},
		{
			title: 'Rural Cricket Outreach',
			description: 'Bringing cricket to rural areas of Gujarat, identifying talent and providing opportunities for underprivileged youth.',
			icon: '🌾',
			category: 'Social Impact',
			status: 'Active',
			impact: '200+ villages covered',
			year: '2021-Present',
			location: 'Rural Gujarat',
			link: '#',
		},
		{
			title: 'Leadership Development Program',
			description: 'Training program for cricket administrators, coaches, and officials to enhance leadership skills and administrative capabilities.',
			icon: '🎯',
			category: 'Leadership',
			status: 'Active',
			impact: '500+ leaders trained',
			year: '2020-Present',
			location: 'Gujarat',
			link: '#',
		},
	]

	const currentProjects = [
		{
			title: 'Smart Stadium Initiative',
			description: 'Integration of technology in cricket stadiums for enhanced fan experience and operational efficiency.',
			progress: 75,
			deadline: 'Q4 2024',
		},
		{
			title: 'International Cricket Hub',
			description: 'Development of world-class cricket facilities to host international matches and tournaments.',
			progress: 60,
			deadline: 'Q2 2025',
		},
		{
			title: 'Cricket Analytics Platform',
			description: 'Advanced analytics and performance tracking system for players and teams.',
			progress: 40,
			deadline: 'Q1 2025',
		},
	]

	const categories = ['All', 'Sports Development', 'Digital Innovation', 'Infrastructure', 'Gender Equality', 'Social Impact', 'Leadership']

	return (
		<div className="min-h-screen pt-20">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-violet-100 via-violet-200 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
							Initiatives &{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Projects
							</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
							Transforming cricket administration and community development through innovative 
							initiatives that create lasting impact and opportunities.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Current Projects Section */}
			<section
				ref={currentRef}
				className="py-20 bg-white dark:bg-slate-800"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={currentInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Current Projects
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Active initiatives that are shaping the future of cricket administration and community development.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{currentProjects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 30 }}
								animate={currentInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl"
							>
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										{project.title}
									</h3>
									<span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
										{project.deadline}
									</span>
								</div>
								<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
									{project.description}
								</p>
								
								{/* Progress Bar */}
								<div className="mb-4">
									<div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
										<span>Progress</span>
										<span>{project.progress}%</span>
									</div>
									<div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
										<motion.div
											initial={{ width: 0 }}
											animate={currentInView ? { width: `${project.progress}%` } : {}}
											transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
											className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
										></motion.div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Initiatives Grid Section */}
			<section
				ref={initiativesRef}
				className="py-20 bg-gray-50 dark:bg-slate-900"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={initiativesInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							All Initiatives
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Comprehensive portfolio of projects and programs driving positive change in cricket and community development.
						</p>
					</motion.div>

					{/* Category Filter */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={initiativesInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-wrap justify-center gap-4 mb-12"
					>
						{categories.map((category) => (
							<button
								key={category}
								className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-700"
							>
								{category}
							</button>
						))}
					</motion.div>

					{/* Initiatives Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{initiatives.map((initiative, index) => (
							<motion.div
								key={initiative.title}
								initial={{ opacity: 0, y: 30 }}
								animate={initiativesInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
							>
								{/* Card Header */}
								<div className="p-6">
									<div className="flex items-start justify-between mb-4">
										<div className="text-4xl">{initiative.icon}</div>
										<span className={`px-3 py-1 rounded-full text-xs font-medium ${
											initiative.status === 'Active' 
												? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
												: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
										}`}>
											{initiative.status}
										</span>
									</div>

									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
										{initiative.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
										{initiative.description}
									</p>

									{/* Meta Information */}
									<div className="space-y-2 mb-6">
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<Calendar className="w-4 h-4 mr-2" />
											{initiative.year}
										</div>
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<MapPin className="w-4 h-4 mr-2" />
											{initiative.location}
										</div>
										<div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
											<TrendingUp className="w-4 h-4 mr-2" />
											{initiative.impact}
										</div>
									</div>

									{/* CTA Button */}
									<div className="flex justify-between items-center">
										<span className="text-sm font-medium text-purple-600 dark:text-purple-400">
											{initiative.category}
										</span>
										<a
											href={initiative.link}
											className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group"
										>
											<span className="text-sm font-medium mr-2">Learn More</span>
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Impact Summary Section */}
			<section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							Cumulative Impact
						</h2>
						<p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
							The combined effect of all initiatives has created a transformative impact on cricket 
							development and community empowerment across Gujarat.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							{[
								{ number: '15,000+', label: 'Youth Impacted' },
								{ number: '50+', label: 'Initiatives Launched' },
								{ number: '200+', label: 'Villages Reached' },
								{ number: '₹50Cr+', label: 'Investment Mobilized' },
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="text-center"
								>
									<div className="text-4xl lg:text-5xl font-bold text-white mb-2">
										{stat.number}
									</div>
									<div className="text-purple-100">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default Initiatives 