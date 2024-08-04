import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
}