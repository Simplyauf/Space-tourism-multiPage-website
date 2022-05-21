const MenuLists = document.querySelectorAll(".Menu");
const mainSection = document.querySelector(".Main-section");
let body = document.querySelector("body");

// DIFFERENT PAGES MAIN SECTION

const homePageHtmlContent = `
 	<main class="flex flex-col mt-6 md:flex md:flex-row md:mt-40 md:justify-between md:w-[82%] md:mx-auto md:items-end">
				<article class="md:flex md:flex-col md:items-start md:w-[70%]">
					<h3 class="mx-auto text-center font-Barlow text-[18px] text-primaryColor tracking-[1.75px] md:mx-0 md:tracking-[2px] lg:tracking-[2.75px] lg:text-[24px] md:text-[21px]">SO, YOU WANT TO TRAVEL TO</h3>
					<h1 class="text-[100px] font-Bellefair mb-4 text-center md:mx-0 md:text-[110px] lg:text-[120px] md:mb-0 laptop:text-[150px]">SPACE</h1>
					<p class="w-[80%] mx-auto text-center text-[16px] text-primaryColor font-Barlow leading-[25px] md:mx-0 md:max-w-[365px] md:text-[17px] md:w-[65%] md:text-justify lg:text-[18px] laptop:text-[20px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
				</article>

				<button class="hover:ring-[35px] hover:ring-opacity-50 hover:ring-neutralColor mx-auto mt-12 text-black bg-white w-40 h-40 rounded-[50%] text-[22px] tracking-[1.5px] font-normal lg:w-48 lg:h-48 md:w-42 md:h-42">EXPLORE</button>
			</main>
`;
const destinationPageHtmlContent = `
<main class="lg:flex lg:w-[90%] lg:justify-between lg:mx-auto lg:gap-[5%]">
				<article class="lg:w-[50%]">
					<li class="mt-6 py-1 text-center tablet:text-left tablet:ml-[10%] md:ml-[10%] md:text-left lg:py-4 text-[28px] font-Barlow">
						<span class="opacity-50 text-secondaryColor">01</span>
						<a class="ml-2 text-secondaryColor tracking-[2.75px]" href="#">PICK YOUR DESTINATION</a>
					</li>
					<div class="w-[60%] h-[220px] tablet:h-[250px] mt-4 lg:mt-16 mx-auto">
						<img class="max-w-[100%] max-h-[100%] mx-auto current-tab-img" src="assets/destination/image-moon.png" alt="" />
					</div>
				</article>
				<article class="lg:w-[50%] lg:flex lg:flex-col lg:items-start lg:mt-28">
					<ul class="flex justify-center gap-6 pt-2 mt-4 destination-pages">
						<li class="destination-tab-page" data-id="Moon"><a href="#">MOON</a></li>
						<li class="destination-tab-page" data-id="Mars"><a href="#">MARS</a></li>
						<li class="destination-tab-page" data-id="Europa"><a href="#">EUROPA</a></li>
						<li class="destination-tab-page" data-id="Titan"><a href="#">TITAN</a></li>
					</ul>

					<h1 class="text-center text-[80px] font-Bellefair mt-4 current-tab-title uppercase lg:text-[100px] lg:mt-0">MOON</h1>

					<p class="w-[80%] mx-auto pb-6 border-opacity-50 border-b-2 border-white mb-6 mt-4 text-center text-[16px] leading-[30px] font-Barlow text-primaryColor current-tab-description lg:mt-0 lg:text-left lg:mx-0 lg:text-[18px] tracking-[1px]">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
					<div class="mt-4 tablet:flex tablet:flex-row tablet:justify-center tablet:gap-[5%] lg:flex-row lg:flex laptop:gap-[15%] lg:gap-[10%] lg:w-[100%]">
						<div class="mb-8 text-center">
							<h2 class="text-[14px] font-Barlow tracking-[2.35px] text-primaryColor">AVG. DISTANCE</h2>
							<span class="text-[28px] font-Bellefair current-tab-distance uppercase"> 628 mil. KM </span>
						</div>
						<div class="text-center">
							<h2 class="text-[14px] font-Barlow tracking-[2.35px] text-primaryColor">EST. TRAVEL TIME</h2>
							<span class="text-[28px] font-Bellefair current-tab-travelTime uppercase"> 3 DAYS</span>
						</div>
					</div>
				</article>
			</main>
`;
const crewPageHtmlContent = `
<main class="lg:flex lg:flex-col lg:flex-grow">
				<li class="mt-6 py-1 text-center tablet:text-left tablet:ml-[10%] md:ml-[10%] md:text-left text-[28px] lg:mt-8 font-Barlow">
					<span class="opacity-50 text-secondaryColor">02</span>
					<a class="ml-2 text-secondaryColor tracking-[2.75px]" href="#"> MEET YOUR CREW </a>
				</li>

				<div class="lg:w-[80%] lg:flex items-start lg:justify-self-end lg:flex-grow lg:flex-row-reverse lg:mx-auto">
					<div class="mt-8 mx-auto w-[80%] h-[250px] tablet:h-[300px] border-opacity-50 border-b-2 border-white lg:border-transparent lg:w-[70%] lg:h-[420px] lg:mt-0 lg:self-end">
						<img class="max-w-[100%] h-[100%] mx-auto object-cover crew-img" src="assets/crew/image-victor-glover.png" alt="" />
					</div>

					<article class="lg:w-[70%] mt-8 lg:flex lg:items-start lg:flex-col lg:mt-8 laptop:mt-12 lg:justify-between pb-4">
						<div class="flex items-center justify-center order-2 gap-4 mb-8 lg:mb-0 lg:items-start crewPageTabs-cont lg:mt-12 laptop:mt-20">
							<button class="crew-tabs-btn" data-id="0"></button>
							<button class="crew-tabs-btn" data-id="1"></button>
							<button class="crew-tabs-btn" data-id="2"></button>
							<button class="crew-tabs-btn" data-id="3"></button>
						</div>

						<article class="">
							<div class="text-center lg:text-left">
								<span class="uppercase opacity-50 text-secondaryColor crew-role lg:text-[30px] tracking-[1.15px]"> COMMANDER </span>
								<h2 class="text-[32px] lg:text-[40px] text-white crew-name uppercase">DOUGLAS HURLEY</h2>
							</div>
							<div class="w-[80%] lg:w-[70%] mx-auto mt-4 laptop:mt-[20px] lg:mx-0">
								<p class="text-center lg:text-left text-[16px] lg:text-[18px] laptop:text-[20px] leading-[30px] font-Barlow text-primaryColor crew-bio">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
							</div>
						</article>
					</article>
				</div>
			</main>
  
`;
const technologyPageHtmlContent = `
 <main>
      <li class="mt-6 py-1 lg:text-left lg:ml-[10%]  text-center text-[28px] font-Barlow ">
        <span class="opacity-50 text-secondaryColor">03</span> <a class=" ml-2 text-secondaryColor  tracking-[2.75px]" href="#">SPACE LAUNCH 101</a>
      </li>
          <div class=" lg:flex lg:flex-row-reverse lg:ml-[10%]"> 
    <div class="my-6 lg:w-[200px] w-[100%]  lg:flex-[40%] lg:h-[400px]"> 
        <img class=" object-cover W-[100%] min-w-[100%] h-[100%]  technology-img"
          src="assets/technology/image-launch-vehicle-landscape.jpg"
          alt=""
        />
   </div>
   
<article class="lg:flex-[60%] lg:flex lg:gap-[10%] lg:pt-20 lg:items-start">  
      <div class="flex justify-center gap-8 tabs-container lg:flex-col lg:justify-end">
        <button class="technology-tabs" data-id="1">1</button>
        <button class="technology-tabs" data-id="2">2</button>
        <button class="technology-tabs" data-id="3">3</button>
      </div>

      <article class="flex flex-col gap-6 mt-6 lg:items-start lg:mt-0">
        <div class="text-center lg:text-left">
          <span class="text-primaryColor  tracking-[1.75px] text-[14px] font-Barlow">
            THE TERMINOLOGY...
            <span>
              <h2 class="text-[32px] uppercase font-Bellefair text-secondaryColor lg:text-[56px] technology-name">
               LAUNCH VEHICLE
              </h2>
        </div>
        <div class=" w-[80%]   mx-auto lg:mx-0 lg:w-[75%]">
          <p class=" text-center lg:text-left text-[16px] lg:text-[18px] leading-[30px] tracking-[1px] font-Barlow text-primaryColor technology-description">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
          </p>
        </div>
      </article>
   </article>
       </div>
    </main>
`;

// fetching pages data from the JSON File List

let response = fetch("data.json").then((response) => response.json());

function getData() {
	response.then((data) => {
		console.log(data);
		DisplayingDataObjOnThePage(data);
	});
}

getData();

// HAMBURGER AND CLOSE BTN TOGGLE
const Hamburger = document.querySelector(".hamburger");
const ShowNav = document.querySelector(".show-nav");
const img = ["assets/shared/icon-close.svg", "assets/shared/icon-hamburger.svg"];

Hamburger.addEventListener("click", () => {
	ShowNav.classList.toggle("hiding-nav");

	if (Hamburger.getAttribute("src") == img[0]) {
		Hamburger.src = img[1];
	} else if (Hamburger.getAttribute("src") == img[1]) {
		Hamburger.src = img[0];
	}
});

function DisplayingDataObjOnThePage(Menupages) {
	// Toggling pages with their necessary htmlcontent
	MenuLists.forEach((elem) => {
		elem.addEventListener("click", (e) => {
			let menuTitle = e.currentTarget.lastElementChild.dataset.id;
			let pageElems;

			//if the id of the current menuElement clicked is the string,then remove the id attributes from others and assign it solely to that page

			if (menuTitle == "home") {
				body.removeAttribute("id");
				body.id = "homePage";
				pageElems = homePageHtmlContent;
			}
			if (menuTitle == "destinations") {
				body.removeAttribute("id");
				body.id = "destinationsPage";
				pageElems = destinationPageHtmlContent;
			} else if (menuTitle == "crew") {
				body.removeAttribute("id");
				body.id = "crewPage";
				pageElems = crewPageHtmlContent;
			} else if (menuTitle == "technology") {
				body.removeAttribute("id");
				body.id = "technologyPage";
				pageElems = technologyPageHtmlContent;
			}

			mainSection.innerHTML = pageElems;

			navigationThroughtabs(Menupages);
		});
	});
}

// navigating to tabs and applying the pages data from the JSon file to the  pages

function navigatingThroughTabsInDestinationPage(pagesData) {
	let destinationTabPages = document.querySelectorAll(".destination-tab-page");
	let currentTabTitle = document.querySelector(".current-tab-title");
	let currentTabDescription = document.querySelector(".current-tab-description");
	let currentTabDistance = document.querySelector(".current-tab-distance");
	let currentTabTraveltime = document.querySelector(".current-tab-travelTime");
	let currentTabImg = document.querySelector(".current-tab-img");

	destinationTabPages.forEach((destinationTabPage) => {
		destinationTabPage.addEventListener("click", (e) => {
			pagesData.destinations.forEach((destinationPageData) => {
				if (destinationPageData.name === e.currentTarget.dataset.id) {
					currentTabTitle.innerHTML = destinationPageData.name;
					currentTabDescription.innerHTML = destinationPageData.description;
					currentTabDistance.innerHTML = destinationPageData.distance;
					currentTabTraveltime.innerHTML = destinationPageData.travel;
					currentTabImg.src = destinationPageData.images.png;
				}
			});
		});
	});
}

function navigatingThroughTabsInTechnologyPage(pagesData) {
	let tabsContainer = document.querySelector(".tabs-container");
	let technologyImg = document.querySelector(".technology-img");
	let technologyDescription = document.querySelector(".technology-description");
	let technologyName = document.querySelector(".technology-name");
	console.log(tabsContainer);
	tabsContainer.addEventListener("click", (e) => {
		let tabsId = e.target.dataset.id;
		pagesData.technology.forEach((technologyPage, index) => {
			if (tabsId == index + 1) {
				technologyImg.src = technologyPage.images.landscape;
				technologyDescription.innerHTML = technologyPage.description;
				technologyName.innerHTML = technologyPage.name;
			}
		});
	});
}

function navigatingThroughTabsInCrewPage(pagesData) {
	let crewPageTabsCont = document.querySelector(".crewPageTabs-cont");
	let crewImg = document.querySelector(".crew-img");
	let crewName = document.querySelector(".crew-name");
	let crewRole = document.querySelector(".crew-role");
	let crewBio = document.querySelector(".crew-bio");
	console.log(crewPageTabsCont);

	crewPageTabsCont.addEventListener("click", (e) => {
		let tabsId = e.target.dataset.id;
		console.log(tabsId);
		pagesData.crew.forEach((crewPageData, index) => {
			if (tabsId == index) {
				console.log("yeah");
				crewImg.src = crewPageData.images.png;
				crewName.textContent = crewPageData.name;
				crewBio.innerHTML = crewPageData.bio;
				crewRole.textContent = crewPageData.role;
			}
		});
	});
}

// if the id of the menu tab clicked is correct then display the appropriate  data fetched from the Json file

function navigationThroughtabs(Menupages) {
	if (body.id == "destinationsPage") {
		navigatingThroughTabsInDestinationPage(Menupages);
	}

	if (body.id == "technologyPage") {
		navigatingThroughTabsInTechnologyPage(Menupages);
	}
	if (body.id == "crewPage") {
		navigatingThroughTabsInCrewPage(Menupages);
	}
}
