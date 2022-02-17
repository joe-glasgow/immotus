import * as fs from 'fs';
import * as path from 'path';
import express, {Request, Response} from "express";

const app = express();

const notFound = (res:Response, filePath: string) => fs.readFile(filePath, 'utf8', (err, _) => {
    if (!err) {
        return res.sendFile(filePath);
    } else {
        // TODO create pretty static page for this
        return res.status(500).end(err.stack);
    }
});
// path.join(__dirname, 'src/pages')
const routes: string[] = fs.readdirSync(path.join(__dirname, 'src/pages'), {withFileTypes: false})
    // @ts-ignore
    .map(item => `/${item.split('.').slice(0, -1).join('.')}`);
// add the home route
routes.push("/");
// gzip compression
app.use(require('compression')());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist/static')));
// In production for a static site, you could use s3 + Cloudfront + Lambda rules for this:
// https://sosnowski.dev/post/static-serverless-site-with-nextjs#lambda---edge-for-routing
// @ts-ignore
if (routes) {
    // @ts-ignore
    routes.map((routePath) => app.get(routePath, (req: Request, res: Response) => {
        const filePath: string = path.join(__dirname + `/dist/static/${routePath === "/" ? "index" : routePath}.html`);
        const notFoundFilePath: string = path.join(__dirname + `/dist/static/404.html`);
        fs.readFile(filePath, 'utf8', (err, _) => {
            // the err variable substitutes for the fs.exists callback function variable
            if (!err) {
                return res.sendFile(filePath);
            } else {
                return notFound(res, notFoundFilePath);
            }
        });
    }))
}

// Handles any requests that don't match the ones above
app.get('*', (req: Request, res: Response) => {
    const {path: reqPath} = req;
    const notFoundFilePath: string = path.join(__dirname + `/dist/static/404.html`);
    if (!routes.includes(reqPath)) {
        return notFound(res, notFoundFilePath);
    }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);