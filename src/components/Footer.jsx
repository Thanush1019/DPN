import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

	const footerLinks = {
		'Quick Links': [
			{ name: 'Home', path: '/' },
			{ name: 'About', path: '/about' },
			{ name: 'Initiatives', path: '/initiatives' },
			{ name: 'Media', path: '/media' },
		],
		'Resources': [
			{ name: 'Leadership Journal', path: '/leadership-journal' },
			{ name: 'Contact', path: '/connect' },
			{ name: 'Privacy Policy', path: '#' },
			{ name: 'Terms of Service', path: '#' },
		],
		'Connect': [
			{ name: 'Email', href: 'mailto:dhanraj.nathwani@gca.com' },
			{ name: 'Phone', href: 'tel:+919876543210' },
			{ name: 'Office', href: '#' },
		],
	}

	const socialLinks = [
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Instagram, href: '#', label: 'Instagram' },
	]

  return (
		<footer className="bg-gradient-to-br from-blue-50 via-purple-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
					<div className="lg:col-span-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
								DN
							</div>
							<h3 className="text-xl font-semibold mb-2">Dhanraj Nathwani</h3>
							<p className="text-gray-400 mb-4">
								Vice President, Gujarat Cricket Association
							</p>
							<p className="text-gray-400 text-sm leading-relaxed">
								Leading with vision, building with purpose. Transforming cricket administration 
								and empowering communities through strategic leadership and innovative initiatives.
            </p>
						</motion.div>
          </div>

          {/* Quick Links */}
          <div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
							<ul className="space-y-2">
								{footerLinks['Quick Links'].map((link) => (
									<li key={link.name}>
										<Link
											to={link.path}
											className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
											{link.name}
										</Link>
              </li>
								))}
							</ul>
						</motion.div>
					</div>

					{/* Resources */}
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h4 className="text-lg font-semibold mb-4">Resources</h4>
							<ul className="space-y-2">
								{footerLinks['Resources'].map((link) => (
									<li key={link.name}>
										{link.path === '#' ? (
											<a
												href={link.path}
												className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
												{link.name}
											</a>
										) : (
											<Link
												to={link.path}
												className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
												{link.name}
											</Link>
										)}
              </li>
								))}
            </ul>
						</motion.div>
          </div>

          {/* Contact Info */}
          <div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<h4 className="text-lg font-semibold mb-4">Connect</h4>
							<ul className="space-y-3">
								{footerLinks['Connect'].map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
										>
											{link.name === 'Email' && <Mail className="w-4 h-4 mr-2" />}
											{link.name === 'Phone' && <Phone className="w-4 h-4 mr-2" />}
											{link.name === 'Office' && <MapPin className="w-4 h-4 mr-2" />}
											{link.name}
										</a>
									</li>
								))}
							</ul>

							{/* Social Links */}
							<div className="mt-6">
								<h5 className="text-sm font-semibold mb-3">Follow</h5>
								<div className="flex space-x-4">
									{socialLinks.map((social) => (
										<motion.a
											key={social.label}
											href={social.href}
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.9 }}
											className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300"
											aria-label={social.label}
										>
											<social.icon className="w-5 h-5" />
										</motion.a>
									))}
            </div>
							</div>
						</motion.div>
          </div>
        </div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="border-t border-gray-800 mt-12 pt-8"
				>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© {currentYear} Dhanraj Nathwani. All rights reserved.
						</div>
						<div className="flex space-x-6 text-sm text-gray-400">
							<a href="#" className="hover:text-purple-400 transition-colors duration-300">
								Privacy Policy
            </a>
							<a href="#" className="hover:text-purple-400 transition-colors duration-300">
								Terms of Service
            </a>
							<a href="#" className="hover:text-purple-400 transition-colors duration-300">
								Cookie Policy
            </a>
          </div>
        </div>
				</motion.div>
      </div>
    </footer>
  )
}

export default Footer 