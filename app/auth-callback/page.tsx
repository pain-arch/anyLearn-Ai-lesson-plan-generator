import { redirect } from "next/navigation"
import { CreateUserIfNull } from "./action";


const Page = async () => {
    const { success } = await CreateUserIfNull();
    if (!success) {
        return <div>Failed to create user</div>
    }
    redirect("/dashboard")
}

export default Page;