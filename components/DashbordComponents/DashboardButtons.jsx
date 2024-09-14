
import { Button } from "../../components/ui/button";
const DashboardButtons = ({dashboardOptions, open , setOpen}) => {
    const setButton = (set) => {
        if(open === set) {
            setOpen("")
        }else {
            setOpen(set)
        }
      }
  return (
    <div className="grid grid-flow-col  justify-center items-center gap-10 pb-10  w-screen">
    <div >
      {dashboardOptions.map((dashboard) => (
          <Button onClick={ ()=>{setButton(dashboard.name)} } 
          >{dashboard.name}
          </Button> 
      ))}
     </div> 
    </div>
  )
}

export default DashboardButtons