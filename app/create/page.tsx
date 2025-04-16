import AnimatedTitle from '@/components/AnimatedTitle';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Page = async () => {
  const { isAuthenticated } = await getKindeServerSession();

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div>
        <AnimatedTitle title='Create Your' subtitle='Lesson Plan' />
        {/* <LessonPlanForm /> */}
      </div>
    </div>
  )
}

export default Page