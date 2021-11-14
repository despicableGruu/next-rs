import Head from "next/head";
import CoverPage from "../components/CoverPage";
import Link from "next/link";
import Image from "next/image";
import ExploreMoreButton from "../components/Buttons/ExploreMoreButton";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { motion } from "framer-motion";
import Author from "../components/Author";

export default function Home({
  blogs,
  skills,
  certificates,
  projects,
  followers,
}) {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Jatin Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>

      <div className="">
        <CoverPage
          title="Hi There! I am"
          className="flex flex-col justify-center items-center"
          mainHeading="Jatin Sharma"
          childrenClass="text-[32px] ml-0"
        ></CoverPage>

        <div className="pb-24">
          {/* Skills Section */}
          <section>
            <HomeHeading title="My Top ⚡kills" />

            <div className="home-section-container no-scrollbar">
              {skills.map((skill) => {
                return (
                  <div className="home-content-section bg-gray-200">
                    <Image width={70} height={70} src={`/${skill.icon}`} />
                    <p className="uppercase font-bold text-2xl absolute bottom-4 right-4 border-t-[3px] border-purple-600">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
              <ExploreMoreButton link="/skills" />
            </div>
          </section>

          {/* Blogs Section */}
          <section>
            <HomeHeading title="Recent Blogs 👩‍💻" />
            <div className="home-section-container no-scrollbar">
              {blogs.map((blog) => {
                return (
                  <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                    <div className="home-content-section">
                      <Image
                        className="hidden w-full h-full rounded-xl mb-3 cursor-pointer select-none"
                        src={blog.cover_image}
                        alt={blog.title}
                        width={500}
                        height={207}
                        layout="responsive"
                      />

                      <div className="flex items-center justify-between my-3">
                        <p className="flex items-center space-x-1">
                          <AiOutlineCalendar />
                          <span className="text-xs font-medium">
                            {new Date(Date.parse(blog.published_at))
                              .toDateString()
                              .slice(4)}
                          </span>
                        </p>
                        <p className="flex items-center space-x-1">
                          <BiTime />
                          <span className="text-xs ml-1 font-medium">
                            {blog.reading_time_minutes} mins
                          </span>
                        </p>
                      </div>
                      <h3 className="text-xl mb-1 font-bold">{blog.title}</h3>
                      <p className="text-xs sm:text-base">{blog.description}</p>
                    </div>
                  </Link>
                );
              })}

              <ExploreMoreButton link="/blogs" />
            </div>
          </section>

          {/* Certification Section */}
          <section>
            <HomeHeading title="Certification 📜" />
            <div className="home-section-container no-scrollbar">
              {certificates.map((certificate) => {
                return (
                  <div className="home-content-section no-scrollbar flex flex-col justify-evenly cursor-auto">
                    <Image
                      width={100}
                      height={20}
                      src={certificate.issuedBy.orgLogo}
                      alt={certificate.issuedBy.orgName}
                      layout="responsive"
                      objectFit="contain"
                    />
                    <p className="capitalize my-2 font-bold text-xs sm:text-base border-purple-600">
                      {certificate.title}
                    </p>
                    <button
                      className="px-3 py-2  bg-purple-400 text-center outline-none clickable_button w-full mx-auto flex items-center text-xs font-medium  justify-center space-x-3 rounded-md"
                      onClick={() => window.open(certificate.urls.pdfURL)}
                    >
                      <GrCertificate className="text-xl" />
                      <p>View Certification</p>
                    </button>
                  </div>
                );
              })}
              <ExploreMoreButton link="/certificates" />
            </div>
          </section>

          {/* Project Section */}
          <section>
            <HomeHeading title="Projects 📂" />
            <div className="home-section-container no-scrollbar">
              {projects.map((project) => {
                return (
                  <div
                    className="home-content-section no-scrollbar rounded-lg flex flex-col justify-start"
                    onClick={() => window.open(project.githubURL)}
                  >
                    <Image
                      className="rounded-xl mb-2"
                      width={360}
                      height={200}
                      src={project.coverURL}
                      alt={project.name}
                      layout="responsive"
                      objectFit="contain"
                    />
                    <p className="capitalize my-2 font-bold text-lg md:text-xl border-purple-600">
                      {project.name}
                    </p>

                    <p>{project.description}</p>
                  </div>
                );
              })}
              <ExploreMoreButton link="/projects" />
            </div>
          </section>

          <div className="m-3">
            <Author followers={followers} />
          </div>

          <footer className="w-full p-4 mt-5 font-medium text-xs sm:text-base text-center">
            <p>Made with ❤️ by Jatin Sharma</p>
          </footer>
        </div>
      </div>

      {/* <p>
        Hi, welcome! I'm Rui and I'm a self-taught front-end developer 👋 My
        story starts in Portugal (and so it remains so far) as I am on the verge
        of finishing my Master's Degree in Psychology. I wasn't sure if I wanted
        to practice Psychology but the difficulties associated with practicing
        Psychology in Portugal (it's a very long story) made me think if I
        actually wanted to devote my effort to get into it. During my mental
        debate, in 2018, I found out that it was possible to get a programming
        career without actually needing a Computer Sciences course and,
        suddenly, everything was made clear: I was going to try to become a web
        developer... And so began my adventure in September 2018! At that time I
        wasn't really sure what I could or couldn't do or even what I wanted to
        do but one thing was certain: I wanted to leave my mark in the internet.
        Even if it was on an obscure website that no one would ever visit... I
        would just be happy to know that some part of me, or my work, was out
        there. So I studied and I studied and I followed a lot of tutorials and
        applied to a lot of jobs, just wishing that someone would give me my
        first opportunity within the field. That soon happened within 6 months
        of starting my study, in April 2019, and my first job was as a Web
        Developer/Web Designer for a digital marketing agency. I mostly worked
        with WordPress but I WAS IN. After getting that first job I didn't stop
        and kept studying (specially since I wanted to get into a software
        company) and after a looooooooong time of trial-and-error (with a lot of
        interviews), Coletiv gave me the opportunity, on February 2020, and now
        here I stand! 😎 I can finally say that I am a Front-End Developer and I
        am indeed leaving my mark on the internet! I'm sure that I'll write a
        more in detail description in the blog part of this website (btw, you
        should totally check it out) but, for now, this is pretty much
        everything you may want to know about me. Feel free to keep following
        this blog closely since it's not intended to solely talk about coding. I
        imagine it as a place where I can share my hobbies and passions so
        expect a lot of gaming and music as well! If you want to follow me on
        social media, you can do so on Twitter, YouTube, GitHub and Dribbble 👋
      </p> */}
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <h1 className="w-full font-bold text-2xl text-center my-2">{title}</h1>
  );
}

export async function getServerSideProps() {
  // fetching multiple requests by Promise.all
  const [blogs, skills, certificates, projects, followers] = await Promise.all([
    fetch("https://dev.to/api/articles/me?per_page=5", {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_BLOGS_API,
      },
    }).then((res) => res.json()),
    fetch(process.env.NEXT_PUBLIC_API_URL + "/skills?pinned=true").then((res) =>
      res.json()
    ),
    fetch(process.env.NEXT_PUBLIC_API_URL + "/certificates?pinned=true").then(
      (res) => res.json()
    ),
    fetch(process.env.NEXT_PUBLIC_API_URL + "/project-list?pinned=true").then(
      (res) => res.json()
    ),
    fetch(process.env.NEXT_PUBLIC_PERSONAL_API + "/devto/followers").then(
      (res) => res.json()
    ),
  ]);
  return {
    props: {
      blogs,
      skills,
      certificates,
      projects,
      followers: followers.followers_count,
    },
  };
}
