import TaskData from './TaskData'
// import Taskbox2 from './TaskBox'
const ShowTask1 = () => {
    return(
        <div className='container'>
        <div className="card mt-5 mb-5">
            <div className="card-body">
                <h3>Tasks</h3>
                <div className='d-flex' style={{flexWrap:'wrap'}}>
                  

                    <TaskData/>
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default ShowTask1