import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SelectPath extends Component {
    render(){
        return(
            <React.Fragment>
            <br/>
            <section class="w3l-footer-16 text-center">
				<div class="">
					<img src="assets/images/fav.png" class="text-center bordered" title="Victoria University" width="120" height="120" alt="img"/>
					<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Select Your Path</h3>
					<h6 class="hny-title text-center">Choose your path and jump right in</h6>
				</div>
			</section>
                <section class="w3l-content-6">
	<div class="content-6-mian py-5">
		<div class="container py-lg-5" style={{maxWidth: '100%'}}>
			<div class="content-info-in row mt-md-5 mt-4">
				<div class="col-lg-3 col-md-6 imghrs">
					<div class="justify-content-center pathdots orange">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" href="home"><img src="assets/images/path1.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div class="details text-center hover-team" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Foundation</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer orange_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<div class="justify-content-center pathdots brown">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" href="home"><img src="assets/images/path2.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div class="details text-center hover-team2" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Undergraduate</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer brown_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<div class="justify-content-center pathdots blue">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" href="home"><img src="assets/images/path3.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div class="details text-center hover-team3" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Postgraduate</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer blue_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<div class="justify-content-center pathdots purple">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" href="home"><img src="assets/images/path4.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center hover-team4" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Diploma</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer purple_d"></div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>
            </React.Fragment>
        )
    }
}

export default SelectPath;