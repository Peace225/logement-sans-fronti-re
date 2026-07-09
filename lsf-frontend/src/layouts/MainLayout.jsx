
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
  
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}