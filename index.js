const express = require('express');

const postsRouter = require('./posts/postsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});