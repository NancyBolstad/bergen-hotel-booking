import * as express from 'express';
import { getAllBlog, getOneBlog } from './controllers';

const blog = express();

blog.get('/', getAllBlog);
blog.get('/:id', getOneBlog);

export default blog;
