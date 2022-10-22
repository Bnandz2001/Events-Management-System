import Temptaskdata from './Temptaskdata'

const Temptask = () => {
    return(
        <div className='container'>
        <div className="card mt-5 mb-5">
            <div className="card-body">
                <h3>Tasks</h3>
                <div className='d-flex' style={{flexWrap:'wrap'}}>
                    <Temptaskdata/>
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default Temptask;