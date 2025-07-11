import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Gallery', path: '/gallery' },
		{ name: 'Initiatives', path: '/initiatives' },
		{ name: 'Media', path: '/media' },
		{ name: 'Leadership Journal', path: '/leadership-journal' },
		{ name: 'Connect', path: '/connect' },
	]

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		setIsOpen(false)
	}, [location])

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-24 bg-transparent pointer-events-none"
			style={{ WebkitBackdropFilter: 'none', backdropFilter: 'none' }}
		>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
				<div className="flex items-center justify-between h-16">
					<div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl px-10 py-2 pointer-events-auto min-h-[64px]">
						{/* Logo */}
						<Link to="/" className="flex items-center space-x-2 mr-8 sm:mr-10 lg:mr-14">
							<motion.div
								whileHover={{ scale: 1.08 }}
								className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow"
							>
								DPN
							</motion.div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center gap-x-10">
							{navItems.map((item) => (
								<Link
									key={item.name}
									to={item.path}
									className={`relative px-4 py-2 text-base font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${
										location.pathname === item.path
											? 'text-blue-600 bg-white/30'
											: 'text-gray-900 hover:text-blue-600'
									}`}
								>
									<span>{item.name}</span>
									{location.pathname === item.path && (
										<motion.span
											layoutId="navbar-underline"
											className="absolute left-2 right-2 -bottom-1 h-0.5 bg-blue-500 rounded-full"
											transition={{ type: 'spring', stiffness: 400, damping: 30 }}
										/>
									)}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden flex items-center">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors duration-200"
							>
								{isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
							</motion.button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Drawer */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className="fixed top-4 right-2 w-[95vw] max-w-sm h-[90vh] bg-white/20 backdrop-blur-2xl shadow-2xl z-50 flex flex-col p-8 gap-7 rounded-3xl border border-white/30 pointer-events-auto"
					>
						<div className="flex justify-between items-center mb-8">
							<div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">DPN</div>
							<button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
								<X className="w-7 h-7 text-gray-900" />
							</button>
						</div>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`block py-3 px-2 text-lg font-medium rounded-full transition-colors duration-200 mb-1 ${
									location.pathname === item.path
										? 'text-blue-600 bg-white/30'
										: 'text-gray-900 hover:bg-blue-100'
								}`}
							>
								{item.name}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	)
}

export default Navbar 