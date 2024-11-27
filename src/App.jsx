import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData()
  console.log(coffees);
  return (
    <div>
      <h1 className='text-4xl text-center text-amber-900'>Coffee Emporium</h1>
      <div className="my-8">
           <div className="text-center">
            <h3 className="text-2xl mb-6">Available Coffees</h3>
           </div>
           <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-6">
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
           </div>
      </div>
    </div>
  )
}

export default App
