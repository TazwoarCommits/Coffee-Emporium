
const CoffeeCard = ({ coffee }) => {
    const { photo, name, taste, category } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Coffee" />
            </figure>
            <div className="flex justify-between border-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>{taste}</p>
                </div>
                <div>
                    <div className="join join-vertical">
                        <button className="btn join-item">D</button>
                        <button className="btn join-item">U</button>
                        <button className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;