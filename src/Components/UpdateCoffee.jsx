import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div>
            <h2 className="text-4xl">coffee{coffee.name}</h2>
        </div>
    );
};

export default UpdateCoffee;