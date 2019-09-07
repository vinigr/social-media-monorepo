import 'isomorphic-fetch';

import Koa, { Request } from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

import graphqlHttp from 'koa-graphql';

import logger from 'koa-logger';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;