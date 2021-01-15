import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ProjectSearchBar from "./ProjectSearchBar";
import Project from "./Project";

export default function Projects({ projects, isDarkMode, language }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl py-4">
      <div className="px-6">
        <ProjectSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
          {projects
            .filter((rec) => {
              const targetString = `${rec.name}`.toLowerCase();
              return searchQuery.length === 0
                ? true
                : targetString.includes(searchQuery.toLocaleLowerCase());
            })
            .map((project) => (
              <Project
                key={project.id}
                {...project}
                isDarkMode={isDarkMode}
                language={language}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export const ConnectedProjects = connect(mapStateToProps)(Projects);
