import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ExternalLink, Calendar, Tag, Newspaper, Video, Mic, Globe } from 'lucide-react'

const Media = () => {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [mediaRef, mediaInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const mediaItems = [
		{
			id: 1,
			title: 'Gujarat Cricket Association\'s Digital Transformation Under Dhanraj Nathwani',
			description: 'An in-depth look at how technology is revolutionizing cricket administration in Gujarat.',
			type: 'Article',
			category: 'Cricket Administration',
			date: '2024-01-15',
			source: 'Cricket Today',
			image: '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_6_DPN-Social-Media-May-2022-35-400x220.png',
			url: '#',
			featured: true,
		},
		{
			id: 2,
			title: 'Youth Development: The Nathwani Way',
			description: 'Interview discussing strategies for nurturing young cricket talent and creating opportunities.',
			type: 'Video Interview',
			category: 'Youth Development',
			date: '2024-01-10',
			source: 'Sports Central',
			image: '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_7_DPN-Social-Media-March-2022-7-3-400x220.png',
			url: '#',
			featured: false,
		},
		{
			id: 3,
			title: 'Leadership in Sports Administration',
			description: 'Panel discussion on modern leadership approaches in sports management and administration.',
			type: 'Panel Discussion',
			category: 'Leadership',
			date: '2024-01-05',
			source: 'Leadership Forum',
			image: '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_8_DPN-Social-Media-November-2021-20-400x220.png',
			url: '#',
			featured: false,
		},
		{
			id: 4,
			title: 'Infrastructure Development: Building the Future of Cricket',
			description: 'Comprehensive coverage of stadium modernization and facility development projects.',
			type: 'Article',
			category: 'Infrastructure',
			date: '2023-12-20',
			source: 'Infrastructure Weekly',
			image: '/Life – Dhanraj Nathwani/imgi_15_Gujarat-Ecological-Education-and-Research-GEER-Foundation-1.jpg',
			url: '#',
			featured: true,
		},
		{
			id: 5,
			title: 'Women\'s Cricket: Breaking Barriers in Gujarat',
			description: 'Feature story on initiatives to promote and develop women\'s cricket in the state.',
			type: 'Feature Story',
			category: 'Women Cricket',
			date: '2023-12-15',
			source: 'Women in Sports',
			image: '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_6_DPN-Social-Media-May-2022-35-400x220.png',
			url: '#',
			featured: false,
		},
		{
			id: 6,
			title: 'Digital Innovation in Cricket: A Conversation with Dhanraj Nathwani',
			description: 'Podcast episode exploring the intersection of technology and sports administration.',
			type: 'Podcast',
			category: 'Digital Innovation',
			date: '2023-12-10',
			source: 'Tech Sports Podcast',
			image: '/Dhanraj Nathwani – Director – Reliance New Energy Limited/imgi_8_DPN-Social-Media-November-2021-20-400x220.png',
			url: '#',
			featured: false,
		},
		{
			id: 7,
			title: 'Community Development Through Sports',
			description: 'Documentary-style coverage of rural cricket outreach programs and their impact.',
			type: 'Documentary',
			category: 'Social Impact',
			date: '2023-12-05',
			source: 'Community Focus',
			image: '/Life – Dhanraj Nathwani/imgi_41_Gujarat-Ecological-Education-and-Research-GEER-Foundation-1-300x150.jpg',
			url: '#',
			featured: true,
		},
		{
			id: 8,
			title: 'The Future of Cricket Administration in India',
			description: 'Thought leadership piece on evolving trends and future directions in cricket management.',
			type: 'Article',
			category: 'Leadership',
			date: '2023-11-30',
			source: 'Sports Management Today',
			image: '', // No image available
			url: '#',
			featured: false,
		},
	]

	const categories = ['All', 'Cricket Administration', 'Youth Development', 'Leadership', 'Infrastructure', 'Women Cricket', 'Digital Innovation', 'Social Impact']
	const types = ['All', 'Article', 'Video Interview', 'Panel Discussion', 'Feature Story', 'Podcast', 'Documentary']

	const filteredItems = mediaItems.filter(item => 
		(selectedCategory === 'All' || item.category === selectedCategory)
	)

	const getTypeIcon = (type) => {
		switch (type) {
			case 'Video Interview':
			case 'Documentary':
				return Video
			case 'Podcast':
				return Mic
			case 'Article':
			case 'Feature Story':
				return Newspaper
			default:
				return Globe
		}
	}

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}

	return (
		<div className="min-h-screen pt-20">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
							Media &{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Press
							</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
							Press coverage, interviews, and media appearances showcasing leadership, 
							initiatives, and impact in cricket administration and community development.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Featured Media Section */}
			<section className="py-20 bg-white/90">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Featured Coverage
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Highlighted media appearances and press coverage that showcase key initiatives and leadership impact.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{mediaItems.filter(item => item.featured).map((item, index) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
							>
								{item.image && !item.image.includes('/api/placeholder') && (
									<div className="h-64 w-full flex items-center justify-center overflow-hidden bg-gray-100">
										<img src={item.image} alt={item.title} className="object-cover w-full h-full" />
									</div>
								)}
								
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
											Featured
										</span>
										<div className="flex items-center text-sm text-gray-500">
											<Calendar className="w-4 h-4 mr-1" />
											{formatDate(item.date)}
										</div>
									</div>
									
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{item.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{item.description}
									</p>
									
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-purple-600">
											{item.source}
										</span>
										<a
											href={item.url}
											className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300"
										>
											<span className="text-sm font-medium mr-2">Read More</span>
											<ExternalLink className="w-4 h-4" />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Media Grid Section */}
			<section
				ref={mediaRef}
				className="py-20 bg-gray-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={mediaInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							All Media Coverage
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Comprehensive collection of press mentions, interviews, and media appearances.
						</p>
					</motion.div>

					{/* Filters */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={mediaInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-wrap justify-center gap-4 mb-12"
					>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full transition-all duration-300 border ${
									selectedCategory === category
										? 'bg-purple-600 text-white border-purple-600'
										: 'bg-white text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600'
								}`}
							>
								{category}
							</button>
						))}
					</motion.div>

					{/* Media Grid */}
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedCategory}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						>
							{filteredItems.map((item, index) => {
								const TypeIcon = getTypeIcon(item.type)
								return (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
									>
										{item.image && !item.image.includes('/api/placeholder') && (
											<div className="h-48 w-full flex items-center justify-center overflow-hidden bg-gray-100">
												<img src={item.image} alt={item.title} className="object-cover w-full h-full" />
											</div>
										)}
										
										<div className="p-6">
											<div className="flex items-center justify-between mb-3">
												<div className="flex items-center text-sm text-gray-500">
													<TypeIcon className="w-4 h-4 mr-2" />
													{item.type}
												</div>
												<div className="flex items-center text-sm text-gray-500">
													<Calendar className="w-4 h-4 mr-1" />
													{formatDate(item.date)}
												</div>
											</div>
											
											<h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
												{item.title}
											</h3>
											<p className="text-gray-600 mb-4 leading-relaxed text-sm">
												{item.description}
											</p>
											
											<div className="flex items-center justify-between">
												<span className="text-sm font-medium text-purple-600">
													{item.source}
												</span>
												<a
													href={item.url}
													className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300"
												>
													<span className="text-sm font-medium mr-2">View</span>
													<ExternalLink className="w-4 h-4" />
												</a>
											</div>
										</div>
									</motion.div>
								)
							})}
						</motion.div>
					</AnimatePresence>
				</div>
			</section>

			{/* Media Stats Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							Media Impact
						</h2>
						<p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
							Reaching audiences across multiple platforms and media channels to share insights 
							and inspire positive change in sports administration.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							{[
								{ number: '50+', label: 'Media Appearances' },
								{ number: '25+', label: 'Publications Featured' },
								{ number: '10+', label: 'Video Interviews' },
								{ number: '5+', label: 'Podcast Episodes' },
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

export default Media 