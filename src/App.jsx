import Luxury from "./components/Luxury"
import Sedans from "./components/Sedans"
import Suv from "./components/Suv"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center itens-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans />
        <Suv />
        <Luxury />
      </div>
    </main>
  )
}