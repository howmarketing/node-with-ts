import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"
import employeesRouteRegister from "@routes/employees"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
    employeesRouteRegister()
}