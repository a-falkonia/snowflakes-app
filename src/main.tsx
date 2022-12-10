import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import './index.css'
import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <h1 className='text-white text-2xl'>Christmas</h1>
    </Layout>
  </React.StrictMode>
)
