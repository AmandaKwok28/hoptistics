
import { createRouter } from "@nanostores/router";
import { BASE_URL } from "../env";

export const $router = createRouter({
  home: `${BASE_URL}`, // Home page 
  info: `${BASE_URL}info`, // Info page (usage)
  feedback: `${BASE_URL}feedback`, // Feedback page
  // classes: `${BASE_URL}classes/:classId`, // Post page with a list of comments
});