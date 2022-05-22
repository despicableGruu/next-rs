import React from "react";
import { AnimatePresence } from "framer-motion";
import Project from "@components/Project";
import Metadata from "@components/MetaData";
import PageTop from "@components/PageTop";
import { pagePreviewImage } from "@utils/utils";
import { getProjects } from "@lib/dataFetch";

export default function Projects({ projects }) {
  return (
    <>
      <Metadata
        title="Projects -"
        description={` I've been making various types of projects some of them were basics and some of them were complicated. So far I've made ${projects.length} projects.`}
        previewImage={pagePreviewImage.projects}
      />
      <section className="mt-[52px] md:t-[72px] max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl relative mx-auto p-4 mb-10">
        <PageTop pageTitle="Projects">
          I've been making various types of projects some of them were basics
          and some of them were complicated. So far I've made{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projects.length}
          </span>{" "}
          projects.
        </PageTop>

        <section
          className="relative py-5 flex flex-col gap-4 min-h-[50vh]"
        >
          <AnimatePresence>
            {projects &&
              projects.map((project, index) => {
                if (project.name === "" && project.githubURL === "")
                  return null;
                return <Project key={index} project={project} />;
              })}
          </AnimatePresence>
        </section>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}
