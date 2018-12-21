import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import bodyParser from "body-parser";
import React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";
import { StaticRouter, matchPath } from "react-router-dom";
import App from "../shared/App";
import routes from "../shared/routes";
import passportConfig from "./passport-config";
import authRoutes from "./routes/auth";

const app = express();

app.use(express.static("public"));
passportConfig(app);

app.use("/auth", authRoutes);

app.get(["/", "/profile"], (req, res, next) => {
  console.log(".....here....");
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DocTYPE html>
    <html>
      <head>
        <title>My Profile</title>
        <script src="bundle.js" defer></script>
        <script>window.__INITIAL_DATA__=''</script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
