import { generatePage } from "./htmlGenerator.js";
import querystring from "querystring";
import { sendResponse, sanitize } from "./handlers.js";

export const handleRequest = (req, res) => {
  try {
    const { method, url } = req;
    if (method === "GET" && url === "/") {
      const html = generatePage("Home", "Welcome to the Home Page");
      sendResponse(res, 200, html);
    } else if (method === "GET" && url === "/about") {
      const html = generatePage("About", "Learn more about us");
      sendResponse(res, 200, html);
    } else if (method === "GET" && url === "/contact") {
      const html = generatePage("Contact", "Get in touch");
      sendResponse(res, 200, html);
    } else if (method === "POST" && url === "/submit") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();

        if (body.length > 1024 * 1024) {
          res.writeHead(413, { "Content-Type": "text/html" });
          res.end("<h1>Payload Too Large</h1>");
        }
      });

      req.on("end", () => {
        const parsedData = querystring.parse(body);
        const formData = Object.entries(parsedData).reduce(
          (acc, [key, value]) => {
            acc[key.trim()] = value.trim();
            return acc;
          },
          {},
        );
        if (!formData.name || !formData.email) {
          sendResponse(res, 400, generatePage("Error", "Invalid form data"));
          return;
        }

        const safeName = sanitize(formData.name);
        const safeEmail = sanitize(formData.email);

        const html = `
  <h1>Form Submitted</h1>
  <p>Name: ${safeName}</p>
  <p>Email: ${safeEmail}</p>
`;
        sendResponse(res, 200, html);
      });
    } else {
      sendResponse(res, 404, generatePage("Error", "Page Not Found"));
    }
  } catch (error) {
    console.error("Server error:", error);
    sendResponse(res, 500, generatePage("Error", "Server Error"));
  }
};
