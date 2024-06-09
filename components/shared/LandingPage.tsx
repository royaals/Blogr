
import Link from "next/link"
import Image from "next/image";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <Image src='/logo.svg' alt='logo' width={34} height={34} />
          <span className="sr-only">Blogr</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
         
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-in">
            login
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-up">
            sign up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-5xl  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Creativity with Blogr
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl ">
                    Blogr is a powerful social media platform that empowers you to create, connect, and engage with a
                    vibrant community. Explore our core features and discover how Blogr can transform your online
                    presence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-950 px-8 text-sm font-medium text-white shadow transition-colors  text-extrabold disabled:pointer-events-none disabled:opacity-50"
                    href="/sign-up"
                  >
                    Get Started
                  </Link>
                  
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/assets/heroimage.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col items-start space-y-4">
                <PencilIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">Content Creation</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Blogr empowers you to create engaging content with our intuitive editor and multimedia tools. Unleash
                  your creativity and share your stories with the world.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <UserIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">User Authentication</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Secure your community with our robust user authentication system. Empower your users to manage their
                  profiles and preferences, ensuring a personalized experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col items-start space-y-4">
                <ContactIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">Multi-Level Comments</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Foster engaging discussions with our advanced commenting system. Empower users to reply, thread, and
                  react to comments, creating a dynamic and interactive community.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <SearchIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">User Search</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Easily find and connect with like-minded individuals in your community. Our powerful search
                  functionality allows users to discover new content, profiles, and conversations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col items-start space-y-4">
                <UsersIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">Community Management</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your community with advanced moderation tools and analytics. Cultivate a thriving ecosystem
                  where users can connect, collaborate, and share their passions.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <UserIcon className="h-10 w-10 text-[#8b5cf6]" />
                <h2 className="text-3xl font-bold tracking-tighter">Profile Management</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Blogr puts users in control of their online presence. Customize profiles, manage content, and engage
                  with your audience in a seamless and intuitive way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2024 Blogr. All rights reserved.</p>
       
      </footer>
    </div>
  )
}
//@ts-ignore
function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}

//@ts-ignore
function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

//@ts-ignore
function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

//@ts-ignore
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

//@ts-ignore
function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

//@ts-ignore
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}