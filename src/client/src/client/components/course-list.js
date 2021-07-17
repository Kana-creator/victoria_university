import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
    return(
        <React.Fragment>
            {props.courses.map((item) => (
                <div className="prog_results" key={item.id}>
                    <div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
                            <h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;{item.program}</h6>
                        </div>
                        <div className="col-md-7" style={{}}>
                            <p className="my-4" style={{fontSize: '14px'}}>{item.short_desc}</p>
                            <p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> {item.credit}</p>
                        </div>
                        <div className="col-md-2 text-right" style={{display: 'flex', alignItems: 'center'}}>
                            <Link to="/view-program"><p className="text-left view-program">View Program</p></Link>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default CourseList