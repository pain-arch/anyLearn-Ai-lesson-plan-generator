import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"
import prisma from "@/lib/prisma"
import Dashboard from "@/components/Dashboard"

const Page = async () => {
    
    const { getUser } = await getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/")
    }

    const userData = await prisma.user.findUnique({
        where: {
            id: user?.id
        },
        select: {
            lessonplans: true
        }
    })

    if (!userData) {
        redirect("/")
    }

  return (
      <MaxWidthWrapper>
          <div className="py-8 md:py-20">
            <Dashboard lessonPlans={userData.lessonplans} />
          </div>
          
    </MaxWidthWrapper>
  )
}

export default Page