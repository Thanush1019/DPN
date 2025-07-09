import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Initiatives from './pages/Initiatives'
import Media from './pages/Media'
import LeadershipJournal from './pages/LeadershipJournal'
import Connect from './pages/Connect'
import OrganizationDetail from './pages/OrganizationDetail'
import Footer from './components/Footer'
import ThemeContext from './context/ThemeContext'
import Gallery from './pages/Gallery'

function App() {
	const [theme, setTheme] = useState('dark')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// Check for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme') || 'dark'
		setTheme(savedTheme)
		
		// Apply theme to document
		document.documentElement.classList.toggle('dark', savedTheme === 'dark')
		
		// Simulate loading time for smooth initial experience
		const timer = setTimeout(() => setIsLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
					<h2 className="text-white text-xl font-light">Dhanraj Nathwani</h2>
					<p className="text-white/60 text-sm mt-2">Loading...</p>
				</motion.div>
			</div>
		)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Router>
				<div className={`min-h-screen transition-colors duration-300 ${
					theme === 'dark' 
						? 'bg-slate-900 text-white' 
						: 'bg-white text-slate-900'
				}`}>
					<Navbar />
					<AnimatePresence mode="wait">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/gallery" element={<Gallery />} />
							<Route path="/initiatives" element={<Initiatives />} />
							<Route path="/media" element={<Media />} />
							<Route path="/leadership-journal" element={<LeadershipJournal />} />
							<Route path="/connect" element={<Connect />} />
							<Route path="/organizations/:slug" element={<OrganizationDetail />} />
						</Routes>
					</AnimatePresence>
					<Footer />
				</div>
			</Router>
		</ThemeContext.Provider>
	)
}

export default App 