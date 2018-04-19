# Changes to scale this app for 100K users or more

1) Introduction of a load balancer to handle server load. this can be accomplished using Nginx. It can be configured using openresty(Nginx Lua framework). 
    Allows to distribute loads around varoius web servers.
    Can also implement caching for better performance

2) Introduction Of caching through nginx and also in Server, can be done through Memoization or equivalent libraries. 
3) migrating from mongodb to postgres db (better read replicas) or sharding/ using replicas of the database as pool.
4) Optimizing react and Server code using bundle tools as Webpack to : 
    1) separate main load from the dependencies
    2) remove unwanted modules
    3) minify the app
    4) separate Developement and Production Dependency
    5) chunking the code.
    6)
5) The server and dashboard will be separated into its own repository using git submodule
6) Developing tests( including stress testing) for QA Analysis
7) Using CDN for static files and resources.
8) Adding centralized logs for the app
9) implementing SSL/TLS
10) One Way it can be scaled is thorugh Clustering for parellel processing.
11)Using React-Redux for better state and Data management
12) Profiling React components for better load
13) Using react-virtualized to virtualize longer list as with 100,000 users.
14) Use immutable data structure as Object, or using immutablejs Library. 
15) Sanitize, 
    secure webpack endpoint connections through encryption, 
    Input validation,
    adding security headers,  