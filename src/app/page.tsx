import Image from 'next/image';
import Work from '../components/experience/Work';
import codePic from '../../public/code.jpeg';
import wanderPic from '../../public/wander.jpg';
import planePic from '../../public/plane.jpg';
import image1 from '../../public/image-1.webp';
import image3 from '../../public/image-3.webp';
import Education from '@/components/education/Education';

export default function Home() {
  return (
    <div>
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                <div className="relative">
                  <a className="block h-16 w-16 origin-left pointer-events-auto" href="/">
                    {/* <Image alt="My Picture" src={profilePic}
                      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-auto">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    MBA | Computer and Systems & Aerospace Engineer
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I’m Bishoy, a Computer and Systems Engineer based in Munich. I am studying Aerospace Engineering
                    and looking forward to combine both passions to create innovative and impactful solutions for
                    the world using the knowledge I gained from my MBA studies..
                  </p>
                  <div className="mt-6 flex gap-6">
                    <a className="group -m-1 p-1" target='_blank' href="https://www.instagram.com/bishoy.ensoliman/">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path
                          d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                        </path>
                        <path
                          d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
                        </path>
                      </svg>
                    </a>
                    <a className="group -m-1 p-1" target='_blank' href="https://github.com/bishoy-ensoliman">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                        </path>
                      </svg>
                    </a>
                    <a className="group -m-1 p-1" target='_blank' href="https://www.linkedin.com/in/bishoy-soliman">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path
                          d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <Image alt="flying" className="absolute inset-0 h-full w-full object-cover" src={image1} />
            </div>
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <Image alt="coding" className="absolute inset-0 h-full w-full object-cover" src={codePic} />
            </div>
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <Image alt="desk" className="absolute inset-0 h-full w-full object-cover" src={image3} />
            </div>
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <Image alt="wander" className="absolute inset-0 h-full w-full object-cover" src={wanderPic} />
            </div>
            <div
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <Image alt="plane" className="absolute inset-0 h-full w-full object-cover" src={planePic} />
            </div>
          </div>
        </div>
        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16">
                    <Education />
                    {/* <article className="group relative flex flex-col items-start">
                      <h2
                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div
                          className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                        </div><a
                          href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                              className="relative z-10">Crafting a design system for a
                            multiplanetary future</span></a>
                      </h2><time
                        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                        dateTime="2022-09-05"><span
                          className="absolute inset-y-0 left-0 flex items-center"
                          aria-hidden="true"><span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>September
                        5, 2022</time>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Most
                        companies try to stay ahead of the curve when it comes to visual design,
                        but for Planetaria we needed to create a brand that would still inspire
                        us 100 years from now when humanity has spread across our entire solar
                        system.</p>
                      <div aria-hidden="true"
                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        Read article<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></div>
                    </article>
                    <article className="group relative flex flex-col items-start">
                      <h2
                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div
                          className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                        </div><a href="/articles/introducing-animaginary"><span
                          className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                            className="relative z-10">Introducing Animaginary: High performance
                            web animations</span></a>
                      </h2><time
                        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                        dateTime="2022-09-02"><span
                          className="absolute inset-y-0 left-0 flex items-center"><span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>September
                        2, 2022</time>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">When
                        you’re building a website for a company as ambitious as Planetaria, you
                        need to make an impression. I wanted people to visit our website and see
                        animations that looked more realistic than reality itself.</p>
                      <div
                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        Read article<svg viewBox="0 0 16 16" fill="none"
                          className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></div>
                    </article>
                    <article className="group relative flex flex-col items-start">
                      <h2
                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div
                          className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                        </div><a href="/articles/rewriting-the-cosmos-kernel-in-rust"><span
                          className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                            className="relative z-10">Rewriting the cosmOS kernel in
                            Rust</span></a>
                      </h2><time
                        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                        dateTime="2022-07-14"><span
                          className="absolute inset-y-0 left-0 flex items-center"><span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>July
                        14, 2022</time>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">When
                        we released the first version of cosmOS last year, it was written in Go.
                        Go is a wonderful programming language, but it’s been a while since I’ve
                        seen an article on the front page of Hacker News about rewriting some
                        important tool in Go and I see articles on there about rewriting things
                        in Rust every single week.</p>
                      <div
                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        Read article<svg viewBox="0 0 16 16" fill="none"
                          className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></div>
                    </article> */}
                  </div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <Work />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
