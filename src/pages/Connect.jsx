import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Instagram, MessageCircle, User, Building } from 'lucide-react'

const Connect = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [connectRef, connectInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	// Form validation schema
	const contactSchema = z.object({
		name: z.string().min(2, 'Name must be at least 2 characters'),
		email: z.string().email('Please enter a valid email address'),
		organization: z.string().optional(),
		subject: z.string().min(5, 'Subject must be at least 5 characters'),
		message: z.string().min(10, 'Message must be at least 10 characters'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
	})

	const onSubmit = async (data) => {
		setIsSubmitting(true)
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000))
		setSubmitSuccess(true)
		setIsSubmitting(false)
		reset()
		// Reset success message after 5 seconds
		setTimeout(() => setSubmitSuccess(false), 5000)
	}

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			value: 'dhanraj.nathwani@gca.com',
			description: 'For business inquiries and collaborations',
		},
		{
			icon: Phone,
			title: 'Phone',
			value: '+91 98765 43210',
			description: 'Available during business hours',
		},
		{
			icon: MapPin,
			title: 'Office',
			value: 'Gujarat Cricket Association',
			description: 'Ahmedabad, Gujarat, India',
		},
	]

	const socialLinks = [
		{
			icon: Twitter,
			name: 'Twitter',
			url: '#',
			handle: '@dhanraj_nathwani',
			followers: '25K+',
		},
		{
			icon: Linkedin,
			name: 'LinkedIn',
			url: '#',
			handle: 'dhanraj-nathwani',
			followers: '15K+',
		},
		{
			icon: Instagram,
			name: 'Instagram',
			url: '#',
			handle: '@dhanraj.nathwani',
			followers: '10K+',
		},
	]

	return (
		<div className="min-h-screen pt-20">
			{/* Hero Section with animated background */}
			<section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
				{/* Animated SVG/Blob Backgrounds */}
				<motion.div
					className="absolute inset-0 z-0 pointer-events-none"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<svg className="absolute -top-32 -left-32 w-96 h-96 opacity-30 animate-float-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<radialGradient id="connectGrad1" cx="50%" cy="50%" r="50%">
								<stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
								<stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
							</radialGradient>
						</defs>
						<circle cx="100" cy="100" r="100" fill="url(#connectGrad1)" />
					</svg>
					<svg className="absolute bottom-0 right-0 w-80 h-80 opacity-20 animate-float-slower" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<radialGradient id="connectGrad2" cx="50%" cy="50%" r="50%">
								<stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.1" />
							</radialGradient>
						</defs>
						<ellipse cx="100" cy="100" rx="100" ry="80" fill="url(#connectGrad2)" />
					</svg>
				</motion.div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
							Let's{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
								Connect
							</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
							Ready to collaborate, discuss opportunities, or simply share insights? 
							I'm always open to meaningful conversations about leadership, sports, and community development.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Information Section with glassmorphism and animation */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Get in Touch
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Multiple ways to reach out and start a conversation about collaboration, 
							mentorship, or sports development initiatives.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{contactInfo.map((info, index) => (
							<motion.div
								key={info.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="text-center group bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
							>
								<div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
									<info.icon className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{info.title}
								</h3>
								<p className="text-lg font-medium text-purple-600 mb-2">
									{info.value}
								</p>
								<p className="text-gray-600">
									{info.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section with animation */}
			<section
				ref={connectRef}
				className="py-20 bg-gray-50"
			>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={connectInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Send a Message
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Have a specific inquiry or want to discuss collaboration opportunities? 
							Fill out the form below and I'll get back to you promptly.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={connectInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white rounded-2xl shadow-2xl p-8"
					>
						{submitSuccess && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg shadow"
							>
								Thank you for your message! I'll get back to you soon.
							</motion.div>
						)}

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Name *
									</label>
									<div className="relative">
										<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
										<input
											type="text"
											{...register('name')}
											className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
											placeholder="Your full name"
										/>
									</div>
									{errors.name && (
										<p className="mt-1 text-sm text-red-600">
											{errors.name.message}
										</p>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email *
									</label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
										<input
											type="email"
											{...register('email')}
											className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
											placeholder="your.email@example.com"
										/>
									</div>
									{errors.email && (
										<p className="mt-1 text-sm text-red-600">
											{errors.email.message}
										</p>
									)}
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Organization
								</label>
								<div className="relative">
									<Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									<input
										type="text"
										{...register('organization')}
										className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
										placeholder="Your organization (optional)"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Subject *
								</label>
								<input
									type="text"
									{...register('subject')}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									placeholder="What would you like to discuss?"
								/>
								{errors.subject && (
									<p className="mt-1 text-sm text-red-600">
										{errors.subject.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message *
								</label>
								<div className="relative">
									<MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
									<textarea
										{...register('message')}
										rows={6}
										className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
										placeholder="Tell me more about your inquiry or collaboration idea..."
									/>
								</div>
								{errors.message && (
									<p className="mt-1 text-sm text-red-600">
										{errors.message.message}
									</p>
								)}
							</div>

							<div className="text-center">
								<button
									type="submit"
									disabled={isSubmitting}
									className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSubmitting ? (
										<>
											<div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
											Sending...
										</>
									) : (
										<>
											<Send className="w-5 h-5 mr-2" />
											Send Message
										</>
									)}
								</button>
							</div>
						</form>
					</motion.div>
				</div>
			</section>

			{/* Social Media Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Follow & Connect
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Stay updated with the latest insights, initiatives, and thoughts on leadership 
							and sports development through social media.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{socialLinks.map((social, index) => (
							<motion.div
								key={social.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
							>
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white">
									<social.icon className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{social.name}
								</h3>
								<p className="text-purple-600 font-medium mb-2">
									{social.handle}
								</p>
								<p className="text-gray-600 mb-4">
									{social.followers} followers
								</p>
								<a
									href={social.url}
									className="inline-block px-6 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors duration-300"
								>
									Follow
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							Ready to Make an Impact?
						</h2>
						<p className="text-xl text-purple-100 mb-8">
							Whether you're interested in collaboration, mentorship, or simply want to 
							discuss ideas about leadership and sports development, I'm here to listen and engage.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:dhanraj.nathwani@gca.com"
								className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
							>
								Send Email
							</a>
							<a
								href="tel:+919876543210"
								className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
							>
								Call Now
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default Connect 