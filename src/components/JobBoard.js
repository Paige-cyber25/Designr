import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';
import FilterBar from './FilterBar';

function JobBoard() {
    return (
        <div>
            <TopNavbar activeC="/jobBoard"/>
            <div className="topJobBoardContainer">
                <div className="topJobBoardContentContainer container text-center">
                    <h3 className="container text-left">Find your dream job</h3>
                    <p className="conatiner text-left">Designr is not associated with any of the companies listed below. 
                        We source jobs from all the large job hosting sites.
                         Please do your own due diligence on the companies before applying. 
                    </p>
                    <div className="topJobBoardButtonContainer container text-left">
                         <button type="button" className="container text-center">Browse Jobs</button>
                    </div>
                   
                </div>
                <div className="topJobBoardImageContainer container text-center">
                    <img src="/opportunity.png" alt="" className="container text-center" />
                </div>
            </div>

            <div className="midJobBoardContainer container text-center">
                <div className="midJobBoardImageContainer container text-center">
                    <img src="/midJobBoardImage.png" alt="" className="container text-center"/>
                </div>
            </div>
            <FilterBar />
            <table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
             <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="/jobBoardFirstIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Junior UI/UX Designer  at Tech4less </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Ikeja</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardSecondIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>UX/UI Designer at MediaMath </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Fulltime <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Victoria Island</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardThirdIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Product Design Intern at Tidepool </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Fulltime <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> New York</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="tagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tagged</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardFourthIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
           <td><h4>Motion Designer at Tech4less  </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Abuja</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardFifthIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Senior Product Designer at Reify Health</h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> San Francisco</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/closed" style={{color:'#B32442'}}>Closed</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', color:'#9BA5A7', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p style={{color:'#9BA5A7'}}>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardSixthIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Illustrator at Native Brands </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Abuja</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardSeventhIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Graphics Design Intern  at Triad </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Portsmouth</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardEighthIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>User Experience Designer at Coda Staffing </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Fulltime <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Abeokuta</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardNinethIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
           <td><h4>Design Researcher at Medium</h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> San Francisco</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/closed" style={{color:'#B32442'}}>Closed</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px',color:'#9BA5A7', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p style={{color:'#9BA5A7'}}>Tag to apply later</p></td>
        </tr>
        <tr>
            <td><img src="/jobBoardTenthIcon.png" alt="" style={{width:'40px', height:'40px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><h4>Junior UI/UX Designer  at Tech4less </h4>
            <br />
            <p style={{display:'flex', alignItems:'center'}}>Remote <i className="fas fa-circle" style={{fontSize:'6px', marginRight:'8px', marginLeft:'8px'}}></i> Ikeja</p>
            </td>
            <td><p>Posted Apr 16, 2021</p></td>
            <td><a href="/applyNow" style={{color:'#46849E'}}>Apply Now</a></td>
            <td><img src="unTagged.png" alt="" style={{width:'16px', height:'16px', marginTop:'35px', marginBottom:'35px'}}/></td>
            <td><p>Tag to apply later</p></td>
        </tr>
    </tbody>
</table>
<div className="container text-center">
    <button type="button" className="jobBoardFooterButton">Load more jobs</button>
</div>
            <Footer /> 
        </div>
    );
}

export default JobBoard;