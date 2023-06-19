import Step from "./Step";

const Sidebar = () => {
  const steps = [
    {id: 1, number: 1, step: "step 1", title: 'Your info'},
    {id: 2, number: 2, step: "step 2", title: 'Select plan'},
    {id: 3, number: 3, step: "step 3", title: 'Add-ons'},
    {id: 4, number: 4, step: "step 4", title: 'Summary'},
  ]

  const renderSteps = steps.map((step) => {
    return <Step key={step.id} number={step.number} step={step.step} title={step.title} />
  })

  return (
    <nav className="relative w-full h-2/6 md:h-full md:w-md-sidebar-width md:rounded-xl lg:w-lg-sidebar-width p-8
    flex justify-center items-start md:flex-col md:justify-start">
      {renderSteps}
    </nav>
  )
}

export default Sidebar;
