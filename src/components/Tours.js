import Cards from "./Cards";

function Tours({tours,removeTour})
{
    return(
        <div className="Tour-container">
            <h1 className="title">Plan With Onkar</h1>

            <div className="card-section">
                {
                    tours.map((tour)=>{
                        return(
                            <Cards key={tour.id} {...tour} removeTour={removeTour}></Cards>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tours;