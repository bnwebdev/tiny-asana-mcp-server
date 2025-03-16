import { z } from "zod";

import { ServerConnector } from "../types";
import { createTextContent } from "../utils/create-text-content";

export const connectGetTasksBySection: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    "get_tasks_by_section",
    "This tool gets tasks from asana by section id",
    {
      section_id: z.string(),
      offset: z.string().optional(),
      limit: z.number().optional().default(10),
    },
    async ({ section_id, offset, limit }) => {
      const response = await asana.tasks.getTasksForSection(section_id, {
        offset,
        limit,
      });

      const { data, next_page } = response._response;

      return {
        content: [createTextContent({ data, next_page })],
      };
    }
  );
};
