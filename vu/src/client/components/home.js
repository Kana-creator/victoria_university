import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import BannerHome from './bannerHome';
import NewsHub from './newshub';
import Events from './events';
import Testimonies from './testimonies';
import Footer from './footer';
import Chat from './chat';

class Home extends Component{
    render(){
        return(
    <React.Fragment>
		<BreadNavBar />
		<NavBar />
		<BannerHome />
<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="container py-lg-5">
			<div class="row title-content">
			</div>
			<div class="counter-main-sec">
				<div class="">
					<h3 class="hny-title text-center howvu" style={{color: '#fff'}}>HOW VU WORKS<span class="triangle-down text-center"></span></h3>
					<br/>
					<h4 class="hny-title text-center" style={{color: '#002c44'}}>Victoria University</h4>
					<div class="text-center longdash"></div>
				</div>
				<br/>
				<br/>
				<div class="row">
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Beyond Expectations</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="97" data-Speed="4000">0</span><span>%</span>
							</h6>
						</div>
						<p>of employers say VU grads meet or exceed their expectations</p>
					</div>
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Prepared For The Jobs</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="97" data-Speed="4000">0</span><span>%</span>
							</h6>
						</div>
						<p>said VU graduates were well prepared for their jobs</p>
					</div>
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Top Candidates</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="96" data-Speed="4000">0</span><span>%</span>
							</h6>
						</div>
						<p>said they would hire another VU graduate</p>
					</div>
				</div>
				<br/><br/>
				<div class="text-center">
					<a class="logo-2" href="home.php">
                        <h3 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;What Makes VU Unique</h3>
					</a>
                           
				</div>
			</div>
			{/* Start of close */}
		</div>
	</div>
</section>
<section class="w3l-content-5">
	<div class="content-5-main">
		<div class="container">
			<div class="content-info-in row">
				<div class="content-gd col-lg-6">
						<h3 class="hny-title two" style={{fontSize: '100px'}}>DISCOVER</h3>
				</div>
			</div>
			<div class="content-info-in row">
			</div>
		</div>
	</div>
</section>
        <section class="w3l-content-6">
	            <div class="content-6-mian py-5">
		            <div class="container py-lg-5">

			{/* <div class="row title-content">
				<div class="col-lg-4 title-left">
					<h3 class="hny-title" style={{color:'#0077b5'}}>Welcome To VU</h3>
				</div>
				<div class="col-lg-8 title-info">
					<p>Victoria University is one of the leading universities in Uganda and stands out as a center for academic excellence. We offer a wide variety of courses and our qualifications are designed to meet the needs of the market place.</p>
				</div>
			</div> */}
		            </div>
			<section class="w3l-footer-16 text-center">
				<div class="">
					<img src="assets/images/fav.png" class="text-center bordered" title="Victoria University" width="120" height="120" alt="img"/>
					<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Select Your Path</h3>
					<h6 class="hny-title text-center">Choose your path and jump right in</h6>
				</div>
			</section>
			<div class="content-info-in row mt-md-5 mt-4 justify-content-center" style={{marginLeft: 0, marginRight:0}}>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<span class="justify-content-center pathdots orange">&nbsp;</span>
					<span class="justify-content-center pathdots_round">&nbsp;</span>
					<a class="imghr hover-team" href="home">
						<img src="assets/images/path1.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<span class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</span>
							<br/>
							<span class="title">Foundation</span><br/>
							<div style={{top: '17%', position: 'relative'}}>
								<span class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</span>
								<span class="fa fa-angle-right path_pointer orange_d"></span>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<span class="justify-content-center pathdots brown">&nbsp;</span>
					<span class="justify-content-center pathdots_round">&nbsp;</span>
					<a class="imghr hover-team2" href="home">
						<img src="assets/images/path3.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<span class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</span>
							<br/>
							<span class="title">Undergraduate</span><br/>
							<div style={{top: '17%', position: 'relative'}}>
								<span class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</span>
								<span class="fa fa-angle-right path_pointer brown_d"></span>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<span class="justify-content-center pathdots blue">&nbsp;</span>
					<span class="justify-content-center pathdots_round">&nbsp;</span>
					<a class="imghr hover-team3" href="home">
						<img src="assets/images/path2.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<span class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</span>
							<br/>
							<span class="title">Postgraduate</span><br/>
							<div style={{top: '17%', position: 'relative'}}>
								<span class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</span>
								<span class="fa fa-angle-right path_pointer blue_d"></span>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<span class="justify-content-center pathdots purple">&nbsp;</span>
					<span class="justify-content-center pathdots_round">&nbsp;</span>
					<a class="imghr hover-team4" href="home">
						<img src="assets/images/path4.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<span class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</span>
							<br/>
							<span class="title">Diploma</span><br/>
							<div style={{top: '17%', position: 'relative'}}>
								<span class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</span>
								<span class="fa fa-angle-right path_pointer purple_d"></span>
							</div>
						</div>
					</a>
				</div>

			</div>

	            </div>
        </section>
		<div className="marginize"></div>
		<div className="marginize2"></div>
		<Testimonies />
		<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="">
			<br/>
			<br/>
			<br/>
			<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Maximize</h3>
			<h4 class="hny-title text-center">Take Advantage Of VU's Offerings</h4>
			<h4>&nbsp;</h4>
			<div class="text-center dashunder"></div>
		</div>
		<br/>
		<br/>
		<br/>
		<section class="w3l-footer-16">
			<div class="col-md-8 mt-md-0 text-center justify-content-center dotcontrol">	
				<ul class="social d-flex dotcontrol">
					<li><a href="home" style={{backgroundColor: '#e6a329', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#9b6a6a', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#0077b5', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#b951ce', height: '20px', width: '20px'}}>&nbsp;</a></li>
				</ul>
			</div>
		</section>
		<div class="container py-lg-5">
			<div class="row title-content">
			</div>
			<div class="row grids-innf my-lg-5">
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-graduation-cap circler circle1 orange_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="home">Online Education</a></h6>
						<span class="dot orange"></span>
						<p>Flexible Scheduling</p>
						<p>How VU Works</p>
					</div>
					<div style={{border: '#000 1px solid;'}}></div>
					<div class="text-center smalldash orange_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-user circler circle2 brown_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="home">Admissions</a></h6>
						<span class="dot brown"></span>
						<p>Requirements</p>
						<p>Date &amp; Deadlines</p>
					</div>
					<div class="text-center smalldash brown_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-book circler circle3 blue_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="home">Transfer Credit</a></h6>
						<span class="dot blue"></span>
						<p>Transfer to a VU program</p>
						<p>Courses for other tuitions</p>
					</div>
					<div  class="text-center smalldash blue_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-money circler circle3 purple_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="home">Tution &amp; Fees</a></h6>
						<span class="dot purple"></span>
						<p>Calculate Fees</p>
						<p>Financial Aid</p>
					</div>
					<div class="text-center smalldash purple_d"></div>
				</div>
			</div>
			{/* First close */}
			</div>
	</div>
</section>
<hr class="text-center" style={{color:'#000', width: '90%'}}></hr>
<NewsHub />
<Events />
<div className="marginize"></div>
<div className="marginize2"></div>
<Chat />
<Footer />
    </React.Fragment>
        );
    }
}

export default Home;