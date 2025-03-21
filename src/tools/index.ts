import { ServerConnector } from "../types";
import { connectGetTask } from "./get-task";
import { connectGetTasksByProject } from "./get-tasks-by-project";
import { connectGetProjects } from "./get-projects";
import { connectGetTasksBySection } from "./get-tasks-by-section";
import { connectGetSectionsByProject } from "./get-sections-by-project";
import { connectGetTaskStories } from "./get-task-stories";

const toolConnectors: ServerConnector[] = [
  connectGetTask,
  connectGetTasksByProject,
  connectGetProjects,
  connectGetTasksBySection,
  connectGetSectionsByProject,
  connectGetTaskStories,
];

export const connectTools: ServerConnector = (server, context) => {
  toolConnectors.forEach((connector) => connector(server, context));
};
