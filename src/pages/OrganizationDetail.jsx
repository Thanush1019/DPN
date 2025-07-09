import { useParams, Link } from 'react-router-dom'
import { orgs } from '../orgs-data'
import { motion } from 'framer-motion'

function OrganizationDetail() {
  const { slug } = useParams()
  const org = orgs.find(o => o.slug === slug)

  if (!org) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white'>
        <h2 className='text-3xl font-bold mb-4'>Organization Not Found</h2>
        <Link to='/about' className='text-blue-300 underline'>Back to About</Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col items-center pt-24 pb-12 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='w-full max-w-3xl bg-white/90 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center relative'
      >
        <motion.img
          src={org.img}
          alt={org.title}
          className='w-64 h-40 object-cover rounded-2xl shadow-lg border-4 border-blue-300 mb-6 -mt-24 bg-white/80 dark:bg-slate-800/80'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h1
          className='text-3xl sm:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-4 drop-shadow-xl'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {org.title}
        </motion.h1>
        <motion.p
          className='text-lg text-gray-800 dark:text-gray-100 mb-8 leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {org.desc}
        </motion.p>
        <Link to='/about' className='inline-block mt-4 px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors'>
          ← Back to About
        </Link>
      </motion.div>
    </div>
  )
}

export default OrganizationDetail 