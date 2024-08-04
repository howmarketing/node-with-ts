import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"
import employeesRouteRegister from "@routes/employees"
import departmentsRouteRegister from "@routes/departments"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
    employeesRouteRegister()
    departmentsRouteRegister()
}