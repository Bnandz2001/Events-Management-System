import Event from './Event'

const ShowEvents = () => {
    return(
        <div className='container'>
        <div className="card mt-5 mb-5">
            <div className="card-body">
                <h3>Events</h3>
                <div className='d-flex' style={{flexWrap:'wrap'}}>
                    <Event/>
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default ShowEvents