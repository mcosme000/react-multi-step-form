import Step from "./Step";

const Sidebar = () => {


  return (
    <nav className="relative w-full h-2/6 md:h-full md:w-md-sidebar-width md:rounded-xl lg:w-lg-sidebar-width p-8
    flex justify-center items-start md:flex-col md:justify-start">
      <Step id='1' number='1' step='step1' title='Your info' selected/>
      <Step id='2' number='2' step='step2' title='Select plan'/>
      <Step id='3' number='3' step='step3' title='Add-ons'/>
      <Step id='4' number='4' step='step4' title='Summary'/>
    </nav>
  )
}

export default Sidebar;
