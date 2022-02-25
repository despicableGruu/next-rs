import CoverPage from "../components/CoverPage";
import Link from "next/link";
import Image from "next/image";
import ExploreMoreButton from "../components/Buttons/ExploreMoreButton";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import Author from "../components/Author";
import {
  getPinnedProjects,
  getPinnedSkills,
  getPinnedCertificates,
} from "../lib/dataFetch";
import Metadata from "../components/MetaData";

export default function Home({
  blogs,
  skills,
  certificates,
  projects,
  followers,
}) {
  return (
    <>
      <Metadata title="Home 🏠" />
      <div className="dark:bg-darkPrimary dark:text-gray-100">
        <CoverPage
          title="Hi There! I am"
          className="flex flex-col justify-center items-center"
          mainHeading="Jatin Sharma"
        ></CoverPage>

        <div className="pb-24">
          {/* About me */}

          <section className="px-5 sm:px-20 sm:mx-20 text-md sm:text-base">
            <HomeHeading title="About Me" />
            <p>
              Hi, welcome! I'm Jatin Sharma and I'm a self-taught React
              Developer 👋 as I am currently perusing my Bachelor Degree in
              Computer Science. I wanted to learn the web development so
              desperately in my High School, then as the time passed I've
              managed to get all the resources i need to start this journey,
              I've watched so many tutorial followed so many articles to learn
              this. I've also some other programming languages such as Python,
              C, C++, etc. In my future, I also want to dive in the Mobile
              Development as well as Backend Development. I am currently
              Learning many things and backend is one on them. In my spare time
              I also write blogs on{" "}
              <Link className="text-blue-500" href="https://dev.to/j471n">
                Dev.to
              </Link>
              about what I am learning or some tutorials as well. If you are
              interested in it the must visit. 👋
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <HomeHeading title="My Top ⚡kills" />

            <div className="home-section-container no-scrollbar m-">
              {skills.map((skill) => {
                return (
                  <div
                    key={skill.id}
                    className="home-content-section bg-gray-200"
                  >
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
                      <p className="text-xs sm:text-base line-clamp-3">
                        {blog.description}
                      </p>
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
                  <div
                    key={certificate.id}
                    className="home-content-section no-scrollbar flex flex-col justify-evenly cursor-auto"
                  >
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
                      className="px-3 py-2  bg-purple-400 text-black text-center font-semibold outline-none w-full mx-auto flex items-center text-xs justify-center space-x-3 rounded-md"
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
                    key={project.id}
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
                    <h1 className="capitalize my-2 mt-4 font-bold text-lg md:text-xl border-purple-600">
                      {project.name}
                    </h1>
                    <p className="text-xs sm:text-base line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                );
              })}
              <ExploreMoreButton link="/projects" />
            </div>
          </section>

          <div className="m-3">
            <Author followers={followers} />
          </div>
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <h1 className="w-full font-bold text-2xl text-center my-2">{title}</h1>
  );
}

export async function getStaticProps() {
  // fetching multiple requests by Promise.all
  const [blogs, skills, certificates, projects, followers] = await Promise.all([
    fetch("https://dev.to/api/articles/me?per_page=5", {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_BLOGS_API,
      },
    }).then((res) => res.json()),
    getPinnedSkills(),
    getPinnedCertificates(),
    getPinnedProjects(),
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
    // updates the page automatically after 1/2 an hour
    revalidate: 30 * 60,
  };
}
