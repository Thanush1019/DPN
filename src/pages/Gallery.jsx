import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import Navbar from '../components/Navbar' // Removed duplicate Navbar import
// import Footer from '../components/Footer' // Removed duplicate Footer import

const galleryCategories = [
  {
    id: 'personal',
    label: 'Personal',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_3_personal_2-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_2_personal_3-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_4_personal_1-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_22_personal_2.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_23_personal_1.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_21_personal_3.jpg',
    ].filter(Boolean),
  },
  {
    id: 'professional',
    label: 'Professional',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_6_professional1-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_5_WhatsApp-Image-optimize-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_25_professional1.jpg',
    ].filter(Boolean),
  },
  {
    id: 'social-work',
    label: 'Social Work',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_8_social2-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_9_social3-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_10_social14-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_27_social2.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_28_social3.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_29_social14.jpg',
    ].filter(Boolean),
  },
  {
    id: 'sports',
    label: 'Sports',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_11_sport18-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_13_sport20-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_12_sport19-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_30_sport18.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_31_sport19.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_32_sport20.jpg',
    ].filter(Boolean),
  },
  {
    id: 'travel-photography',
    label: 'Travel & Photography',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_16_1-1-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_14_19-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_15_3-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_18_8-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_19_DPN_Sunday-600x380.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_24_WhatsApp-Image-optimize.jpg',
    ].filter(Boolean),
  },
  {
    id: 'nature-wildlife',
    label: 'Nature & Wildlife',
    images: [
      '/Gallery – Dhanraj Nathwani/imgi_35_1-1.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_34_3.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_33_19.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_36_9.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_37_8.jpg',
      '/Gallery – Dhanraj Nathwani/imgi_38_DPN_Sunday.jpg',
    ].filter(Boolean),
  },
]

function Gallery() {
  const [modal, setModal] = useState({ open: false, catIdx: 0, imgIdx: 0 })
  const openModal = (catIdx, imgIdx) => setModal({ open: true, catIdx, imgIdx })
  const closeModal = () => setModal({ ...modal, open: false })
  const showPrev = () => setModal(m => ({ ...m, imgIdx: (m.imgIdx - 1 + galleryCategories[m.catIdx].images.length) % galleryCategories[m.catIdx].images.length }))
  const showNext = () => setModal(m => ({ ...m, imgIdx: (m.imgIdx + 1) % galleryCategories[m.catIdx].images.length }))

  // Keyboard navigation and focus trap
  useEffect(() => {
    if (!modal.open) return
    const handleKey = e => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modal.open])

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* <Navbar /> */} {/* Removed duplicate Navbar usage */}
      {/* Hero Section */}
      <section className="relative py-20 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        {/* Animated Floating Background Shapes */}
        <motion.div
          className="absolute -top-20 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl z-0"
          animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0"
          animate={{ y: [0, -40, 0], x: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 drop-shadow-xl mb-6 z-10"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-xl sm:text-2xl text-blue-700 max-w-2xl mx-auto z-10"
        >
          Explore moments from every facet of life—personal, professional, social, and beyond.
        </motion.p>
      </section>

      {/* Gallery Sections */}
      <div className="flex flex-col gap-24 pb-24">
        {galleryCategories.map((cat, catIdx) => (
          <section key={cat.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white/90 rounded-2xl shadow-xl p-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-extrabold mb-8 text-violet-700 text-left"
            >
              {cat.label}
            </motion.h2>
            {/* Unique Masonry/Staggered Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {cat.images.filter(Boolean).map((img, imgIdx) => (
                <motion.button
                  key={img}
                  className="relative rounded-2xl overflow-hidden shadow-xl group w-full h-64 focus:outline-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: imgIdx * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  onClick={() => openModal(catIdx, imgIdx)}
                  tabIndex={0}
                  aria-label={`View ${cat.label} photo`}
                >
                  <img src={img} alt={cat.label} className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-violet-900/70 to-blue-900/60 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white text-lg font-semibold drop-shadow">{cat.label}</span>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-3xl w-full mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center"
              onClick={e => e.stopPropagation()}
              tabIndex={-1}
            >
              <img
                src={galleryCategories[modal.catIdx].images[modal.imgIdx]}
                alt="Zoomed gallery"
                className="w-full max-h-[70vh] object-contain bg-black"
                style={{ background: 'rgba(0,0,0,0.2)' }}
              />
              {/* Navigation */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow hover:bg-violet-200 dark:hover:bg-violet-800 transition"
                aria-label="Previous photo"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow hover:bg-violet-200 dark:hover:bg-violet-800 transition"
                aria-label="Next photo"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow hover:bg-red-200 dark:hover:bg-red-800 transition"
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Footer /> */} {/* Removed duplicate Footer usage */}
    </div>
  )
}

export default Gallery 