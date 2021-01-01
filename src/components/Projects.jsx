import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ProjectSearchBar from "./ProjectSearchBar";
import Project from "./Project";

export default function Projects({ projects }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
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
            <Project key={project.id} {...project} />
          ))}
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
