
const CoffeeCard = ({ coffee }) => {
    const { photo, name, taste, category } = coffee;
    return (
        <div className="flex justify-around items-center mx-8 border-2 border-amber-600">
            <div className="flex justify-between items-center bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Coffee" />
                </figure>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>{taste}</p>
                </div>
            </div>
            <div>
                <div className="join join-vertical">
                    <button className="btn join-item">View</button>
                    <button className="btn join-item">Edit</button>
                    <button className="btn join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;