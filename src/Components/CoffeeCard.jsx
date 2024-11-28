import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({ coffee }) => {
    const { _id, photo, name, taste, category } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffees/${_id}`,{
                method : "DELETE",

            })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
               if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                  });
               }
            })
          }
        });
    }
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
                <div className="join join-vertical gap-4 ">
                    <button className="btn join-item bg-amber-700 text-white">View</button>
                    <Link to={`/updateCoffee/${_id}`}><button className="btn join-item bg-amber-700 text-white">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)}
                        className="btn join-item bg-amber-700 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;