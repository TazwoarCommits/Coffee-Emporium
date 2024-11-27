import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const chef = form.get("chef")
        const supplier = form.get("supplier")
        const taste = form.get("taste")
        const category = form.get("category")
        const details = form.get("details")
        const photo = form.get("photo")
        const name = form.get("name")
         
        const newCoffee = {name , chef , supplier , taste,category , details , photo }
        // e.target.reset();

        console.log(newCoffee);

        fetch("http://localhost:5000/coffees", {
            method : "POST" ,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Succeed!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        
        })
    }

    return (
        <div className="w-11/12 mx-auto mt-28 rounded-xl bg-[#F4F3F0] py-6">
            <h2 className="text-4xl text-center text-amber-950">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className="w-10/12 mx-auto">
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Name</span>
                        </label>
                        <input type="text" placeholder="CoffeName" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Chef</span>
                        </label>
                        <input type="text" placeholder="Chefs Name" name="chef" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Taste</span>
                        </label>
                        <input type="text" placeholder="Taste" name="taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-amber-950">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name="details" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-amber-950">Photo URL</span>
                        </label>
                        <input type="text" placeholder="URL" name="photo" className="input input-bordered" required />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="btn btn-block bg-amber-800 hover:bg-amber-950">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;