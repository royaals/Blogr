import  LandingPage  from '@/components/shared/LandingPage';
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function Component() {
  const user = await currentUser();
  if (user) redirect('/home');
return (

    <div className="flex flex-col min-h-[100dvh]">
     <LandingPage/>
    </div>
  )
}

