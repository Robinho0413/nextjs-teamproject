"use client";

import NavBarLinks from "./NavBarLinks";

export default function NavBar() {

    return (

<nav
  className="flex-no-wrap relative flex h-full w-full items-center justify-between bg-black py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3 "> 
   
    <div className="list-style-none me-auto flex flex-col ps-0  text-white space-x-10 gap-8">
  
        <div className="list-style-none me-auto flex flex-col ps-0 gap-4 text-white">
          <NavBarLinks link="/team/ourTeam" content="Our Team" />
          <NavBarLinks link="/team/ourTeam/sales" content="Sales" />
          <NavBarLinks link="/team/ourTeam/webdesign" content="Webdesign" />
          <NavBarLinks link="/team/ourTeam/development" content="Development" />
        </div>
        <div className="list-style-none me-auto flex flex-col ps-0  text-white space-x-10">
          <NavBarLinks link="/team/buy" content="Buy" />
          <NavBarLinks link="/team/about" content="?" />
        </div>
          
    </div>
    
  </div>
</nav>
    );

}

