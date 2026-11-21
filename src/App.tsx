import './App.css'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {

  return (
    <><div className='flex justify-center w-full'>
      <div className='w-full max-w-4xl p-2'>
        <section className='mb-8 animate-fade-in'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left'>
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <img className="rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover shrink-0" src="src\assets\BEJEC, DAN ANTON C. - BSIT 1-B.jpg" alt="Dan Bejec" />
            </div>
            <div className='flex-1 w-full flex flex-col items-center sm:items-start'>
              <div className='flex items-center justify-center sm:justify-between gap-2 w-full'>
                <div className='flex items-center gap-2'>
                  <p className='text-lg md:text-2xl font-bold truncate'>Dan Bejec</p>
                </div>
              </div>

              <p className='text-xs md:text-sm text-foreground/70 mt-0.5 flex items-center justify-center sm:justify-start gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <span className='truncate'>Cebu City, Philippines</span>
              </p>
              <div className='flex items-center justify-center sm:justify-start mt-1.5 md:mt-2'>
                <p className="flex items-center gap-2 text-md md:text-base">
                  <span>Graphic Designer</span>
                  <span>\</span>
                  <span>Programmer</span>
                </p>
              </div>

              <div className='space-y-2 mt-2 md:mt-3'>
                <div className='flex gap-2 text-foreground justify-center sm:justify-start'>
                  <a className='text-foreground inline-flex h-7 md:h-8 items-center rounded-md border border-border bg-background px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-3 h-3 md:w-4 md:h-4 lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                    <span className='text-foreground text-left flex-1'>Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-6 gap-2'>
          <Card className='col-span-1 md:col-span-4 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                About
              </CardTitle>
            </CardHeader>
            <CardContent className='text-left text-xs md:text-sm flex flex-col gap-2'>
              <p className='text-xs md:text-sm'>Hi, I'm Dan Bejec, Graphic Designer and Programmer based in Cebu City, Philippines. I specialize in creating visually appealing designs and developing functional applications.</p>
              <p className='text-xs md:text-sm'>Driven by curiosity and a problem-solving mindset, I focus on front-end development, modern web experiences, and learning new technologies to build solutions that make a real impact.</p>
            </CardContent>
          </Card>

          <Card className='col-span-1 md:col-span-2 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className='text-left'>
              <div className='relative space-y-4'>
                <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-foreground transition-colors"></div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <h3 className="text-sm font-semibold text-foreground transition-colors">Cebu Technological University - Main Campus </h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xl bg-background border border-foreground w-fit">2025</span>
                    </div>
                    <p className="text-xs text-foreground">M.J. Cuenco Ave. Corner R. Palma St., Cebu City</p>
                    <p className="text-xs text-foreground">Tertiary</p>
                  </div>
                </div>
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background hover:bg-foreground transition-colors"></div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <h3 className="text-sm font-semibold text-foreground transition-colors">Dalaguete National High School</h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xl bg-background border border-foreground w-fit">2025</span>
                    </div>
                    <p className="text-xs text-foreground">Poblacion, Dalaguete, Cebu </p>
                    <p className="text-xs text-foreground">Secondary</p>
                  </div>
                </div>
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background hover:bg-foreground transition-colors"></div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <h3 className="text-sm font-semibold text-foreground transition-colors">Eager Minds School of Dalaguete</h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xl bg-background border border-foreground w-fit">2025</span>
                    </div>
                    <p className="text-xs text-foreground">Poblacion, Dalaguete, Cebu </p>
                    <p className="text-xs text-foreground">Elementary</p>
                  </div>
                </div>
                <div className="relative pl-6 group/role">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-border bg-background hover:bg-foreground transition-colors"></div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <h3 className="text-sm font-semibold text-foreground transition-colors">Sacsac Elementary School</h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xl bg-background border border-foreground w-fit">2025</span>
                    </div>
                    <p className="text-xs text-foreground">Sacsac, Dalaguete, Cebu</p>
                    <p className="text-xs text-foreground">Elementary</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='col-span-1 md:col-span-4 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent className='text-left'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>Frontend</p>
                  <div className='flex flex-row gap-2 flex-wrap'>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Javascript</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>React</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Tailwind Css</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Typescript</span>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>Backend</p>
                  <div className='flex flex-row gap-2 flex-wrap'>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Python</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>PHP</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Laravel</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>PostgreSQL</span>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>DevOps & Cloud</p>
                  <div className='flex flex-row gap-2 flex-wrap'>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>GitHub Actions</span>
                    <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Firebase Studio</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='col-span-1 md:col-span-2 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-gamepad2-icon lucide-gamepad-2"><line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>
                Beyond Coding
              </CardTitle>
            </CardHeader>
            <CardContent className='text-left text-xs md:text-sm'>
              <p>I also play online RPG games like Genshin Impact and Wuthering Waves, and Valorant. Aside from gaming, I also been fond of editing videos from my gallery and sidequests i've been through.</p>
            </CardContent>
          </Card>

          <Card className='col-span-1 md:col-span-2 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-folder-git2-icon lucide-folder-git-2"><path d="M18 19a5 5 0 0 1-5-5v8" /><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><circle cx="20" cy="19" r="2" /></svg>
                Recent Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <a href="https://coursera.org/share/162f2589201f671e35029ebc2e92c434" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>Create a High-Performing Team</p>
                    <p className="text-xs font-normal">Google</p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://www.credly.com/badges/5283c9af-e31f-402b-b4fa-20d6ae581332" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>Introduction to Cybersecurity</p>
                    <p className="text-xs font-normal">Cisco</p>
                  </CardContent>
                </Card>
              </a>
            </CardContent>
          </Card>

          <Card className='col-span-1 md:col-span-4 group animate-fade-in'>
            <CardHeader>
              <CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-foreground w-4 h-4 md:w-5 md:h-5 lucide lucide-folder-git2-icon lucide-folder-git-2"><path d="M18 19a5 5 0 0 1-5-5v8" /><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><circle cx="20" cy="19" r="2" /></svg>
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <a href="https://frontend-laravel.onrender.com" target="_blank" rel="noopener noreferrer" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>ExamBits</p>
                    <p className="text-xs font-normal line-clamp-3">A web-based platform designed to facilitate the creation of quizzes or mock examinations. With AI , the platform can automatically generate questions based on the content provided by users. This enables educators, trainers, and learners to efficiently transform study materials, documents, or lecture notes into comprehensive assessments, enhancing both the learning and evaluation process. The system prioritizes ease of use while ensuring that generated assessments are relevant, accurate, and tailored to the input content.</p>
                    <div className='flex flex-row gap-2 flex-wrap'>
                      <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Link</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="#" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>AirBnBreeze</p>
                    <p className="text-xs font-normal line-clamp-3">A web-based platform designed to facilitate the vacation rental process by connecting property owners with potential guests. The system streamlines the experience of listing, searching, booking, and managing rental properties. It provides tools for property owners to showcase their spaces with detailed descriptions, photos, and availability, while offering guests a seamless interface to discover, compare, and reserve suitable accommodations. The platform handles inquiries, booking confirmations, secure payments, and transparent reviews to build trust and efficiency within the short-term rental market.</p>
                    <div className='flex flex-row gap-2 flex-wrap'>
                      <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Link</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="#" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>Project 3</p>
                    <p className="text-xs font-normal">About</p>
                    <div className='flex flex-row gap-2 flex-wrap'>
                      <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Link</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="#" className='w-full'>
                <Card className='py-3 px-4'>
                  <CardContent className='text-left gap-2 flex flex-col px-0'>
                    <p className='text-sm font-semibold'>Project 4</p>
                    <p className="text-xs font-normal">About</p>
                    <div className='flex flex-row gap-2 flex-wrap'>
                      <span className='px-2 py-0.5 text-xs rounded-sm bg-foreground/5 border border-foreground/10'>Link</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>

    </>
  )
}

export default App
