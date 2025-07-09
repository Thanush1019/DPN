import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter } from 'lucide-react'

const LeadershipJournal = () => {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [searchQuery, setSearchQuery] = useState('')
	const [journalRef, journalInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const journalPosts = [
		{
			id: 1,
			title: 'The Future of Cricket Administration: Embracing Digital Transformation',
			excerpt: 'As we navigate the evolving landscape of sports administration, the integration of technology has become not just a choice, but a necessity. The digital transformation of cricket administration is reshaping how we engage with players, fans, and stakeholders.',
			content: 'The landscape of cricket administration is undergoing a profound transformation, driven by the rapid advancement of technology and changing expectations of stakeholders. As Vice President of the Gujarat Cricket Association, I\'ve witnessed firsthand how digital innovation can revolutionize every aspect of sports management... (full article)',
			category: 'Digital Innovation',
			date: '2024-01-20',
			readTime: '8 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Digital Transformation', 'Cricket Administration', 'Technology'],
			featured: true,
			image: '/Gallery – Dhanraj Nathwani/imgi_6_professional1-600x380.jpg',
		},
		{
			id: 2,
			title: 'Youth Empowerment Through Sports: Building Tomorrow\'s Leaders',
			excerpt: 'Sports have the unique ability to transform lives and build character. Through our youth development programs, we\'re not just training cricketers, but nurturing future leaders who will make a positive impact on society.',
			content: 'The power of sports extends far beyond the playing field. It\'s a vehicle for character development, leadership training, and community building. In Gujarat, we\'ve seen how cricket can serve as a catalyst for positive change in young lives... (full article)',
			category: 'Youth Development',
			date: '2024-01-15',
			readTime: '6 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Youth Development', 'Leadership', 'Community'],
			featured: false,
			image: '/Gallery – Dhanraj Nathwani/imgi_11_sport18-600x380.jpg',
		},
		{
			id: 3,
			title: 'Leadership Lessons from the Cricket Field',
			excerpt: 'The principles of effective leadership are universal, whether in sports, business, or community development. Here are the key lessons I\'ve learned from managing cricket teams and organizations.',
			content: 'Leadership is not about being in charge; it\'s about taking care of those in your charge. This principle has guided my approach to cricket administration and team management. The cricket field offers unique insights into effective leadership... (full article)',
			category: 'Leadership',
			date: '2024-01-10',
			readTime: '10 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Leadership', 'Team Management', 'Sports'],
			featured: true,
			image: '/Gallery – Dhanraj Nathwani/imgi_13_sport20-600x380.jpg',
		},
		{
			id: 4,
			title: 'Breaking Barriers: Women\'s Cricket in Gujarat',
			excerpt: 'The growth of women\'s cricket represents one of the most significant developments in Indian sports. In Gujarat, we\'re committed to creating equal opportunities and breaking down barriers for female athletes.',
			content: 'The journey of women\'s cricket in India has been nothing short of inspirational. From facing societal barriers to becoming world champions, the transformation has been remarkable. In Gujarat, we\'ve made it our mission to ensure that every girl with talent and passion has the opportunity to pursue cricket... (full article)',
			category: 'Women Cricket',
			date: '2024-01-05',
			readTime: '7 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Women Cricket', 'Gender Equality', 'Sports Development'],
			featured: false,
			image: '/Gallery – Dhanraj Nathwani/imgi_8_social2-600x380.jpg',
		},
		{
			id: 5,
			title: 'Infrastructure Development: Building the Foundation for Success',
			excerpt: 'Quality infrastructure is the backbone of sports development. Our comprehensive approach to facility development is creating world-class venues that serve both elite athletes and grassroots development.',
			content: 'Infrastructure development in sports is often overlooked, yet it\'s fundamental to the success of any sports program. Quality facilities not only enhance performance but also inspire the next generation of athletes. In Gujarat, we\'ve taken a comprehensive approach to infrastructure development... (full article)',
			category: 'Infrastructure',
			date: '2023-12-28',
			readTime: '9 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Infrastructure', 'Sports Facilities', 'Development'],
			featured: false,
			image: '/Gallery – Dhanraj Nathwani/imgi_5_WhatsApp-Image-optimize-600x380.jpg',
		},
		{
			id: 6,
			title: 'Community Development Through Cricket: The Rural Outreach Program',
			excerpt: 'Cricket has the power to unite communities and create opportunities where they didn\'t exist before. Our rural outreach program is bringing the sport to villages and discovering hidden talent.',
			content: 'The true potential of cricket lies not just in producing international stars, but in its ability to transform communities. Our rural outreach program has shown us that talent exists everywhere, waiting to be discovered and nurtured... (full article)',
			category: 'Social Impact',
			date: '2023-12-20',
			readTime: '8 min read',
			author: 'Dhanraj Nathwani',
			tags: ['Rural Development', 'Community', 'Social Impact'],
			featured: false,
			image: '/Gallery – Dhanraj Nathwani/imgi_9_social3-600x380.jpg',
		},
	]

	const categories = ['All', 'Digital Innovation', 'Youth Development', 'Leadership', 'Women Cricket', 'Infrastructure', 'Social Impact']

	const filteredPosts = journalPosts.filter(post => 
		(selectedCategory === 'All' || post.category === selectedCategory) &&
		(searchQuery === '' || 
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
		)
	)

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}

	const [modalPost, setModalPost] = useState(null)

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
							Leadership{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Journal
							</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
							Insights, reflections, and thoughts on leadership, sports administration, 
							youth empowerment, and community development.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Featured Post Section */}
			<section className="py-20 bg-white dark:bg-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Featured Insights
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Latest thoughts and reflections on leadership, innovation, and sports development.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{journalPosts.filter(post => post.featured).map((post, index) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gray-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
							>
								{/* Image Placeholder */}
								<img src={post.image} alt={post.title} className="w-full h-48 md:h-64 object-cover" />
								
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full">
											Featured
										</span>
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<Calendar className="w-4 h-4 mr-1" />
											{formatDate(post.date)}
										</div>
									</div>
									
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
										{post.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
										{post.excerpt}
									</p>
									
									<div className="flex items-center justify-between">
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<User className="w-4 h-4 mr-1" />
											{post.author}
										</div>
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<Clock className="w-4 h-4 mr-1" />
											{post.readTime}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Journal Posts Section */}
			<section
				ref={journalRef}
				className="py-20 bg-gray-50 dark:bg-slate-900"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={journalInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							All Articles
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Explore insights and perspectives on leadership, sports administration, and community development.
						</p>
					</motion.div>

					{/* Search and Filters */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={journalInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-12"
					>
						{/* Search Bar */}
						<div className="max-w-md mx-auto mb-8">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
								<input
									type="text"
									placeholder="Search articles..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
							</div>
						</div>

						{/* Category Filters */}
						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-6 py-2 rounded-full transition-all duration-300 border ${
										selectedCategory === category
											? 'bg-purple-600 text-white border-purple-600'
											: 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-purple-600 hover:text-white hover:border-purple-600'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</motion.div>

					{/* Posts Grid */}
					<AnimatePresence mode="wait">
						<motion.div
							key={`${selectedCategory}-${searchQuery}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						>
							{filteredPosts.map((post, index) => (
								<motion.div
									key={post.id}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
								>
									{/* Image Placeholder */}
									<img src={post.image} alt={post.title} className="w-full h-48 md:h-64 object-cover" />
									
									<div className="p-6">
										<div className="flex items-center justify-between mb-3">
											<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full">
												{post.category}
											</span>
											<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
												<Calendar className="w-4 h-4 mr-1" />
												{formatDate(post.date)}
											</div>
										</div>
										
										<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
											{post.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
											{post.excerpt}
										</p>
										
										{/* Tags */}
										<div className="flex flex-wrap gap-2 mb-4">
											{post.tags.slice(0, 2).map((tag) => (
												<span
													key={tag}
													className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
												>
													{tag}
												</span>
											))}
										</div>
										
										<div className="flex items-center justify-between">
											<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
												<Clock className="w-4 h-4 mr-1" />
												{post.readTime}
											</div>
											<button className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300" onClick={() => setModalPost(post)}>
												<span className="text-sm font-medium mr-2">Read More</span>
												<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
											</button>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>

					{/* No Results */}
					{filteredPosts.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-center py-12"
						>
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								No articles found
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Try adjusting your search or filter criteria.
							</p>
						</motion.div>
					)}
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							Stay Updated
						</h2>
						<p className="text-xl text-purple-100 mb-8">
							Get the latest insights on leadership, sports administration, and community development 
							delivered to your inbox.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
							/>
							<button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
								Subscribe
							</button>
						</div>
					</motion.div>
				</div>
			</section>

			<AnimatePresence>
				{modalPost && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg"
						onClick={() => setModalPost(null)}
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className="relative max-w-2xl w-full mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center"
							onClick={e => e.stopPropagation()}
						>
							<img src={modalPost.image} alt={modalPost.title} className="w-full max-h-80 object-cover" />
							<div className="p-6 w-full">
								<h2 className="text-2xl font-bold mb-2 text-violet-700 dark:text-violet-300">{modalPost.title}</h2>
								<div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
									<User className="w-4 h-4 mr-1" />{modalPost.author}
									<Calendar className="w-4 h-4 mx-2" />{formatDate(modalPost.date)}
									<Clock className="w-4 h-4 mx-2" />{modalPost.readTime}
								</div>
								<div className="flex flex-wrap gap-2 mb-4">
									{modalPost.tags.map(tag => (
										<span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">{tag}</span>
									))}
								</div>
								<p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">{modalPost.content}</p>
							</div>
							<button
								onClick={() => setModalPost(null)}
								className="absolute top-2 right-2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow hover:bg-red-200 dark:hover:bg-red-800 transition"
								aria-label="Close"
							>
								<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default LeadershipJournal 