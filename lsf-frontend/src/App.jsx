// src/App.jsx
import { Providers } from './context'
import AppRoutes from './routes'
import './styles/index.css'

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  )
}