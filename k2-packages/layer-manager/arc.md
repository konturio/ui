                           +----------------------------------------------------------Application ------------------------------------------------+
  @k2 logic packages       |                                                                                                                      |
+---------------------+    |                                                                                                                      |             @k2 ui packages
|                     |    |                  +------+ Controllers +------+         +----+ Models  +----+                    +----+ View  +----+  |            +-----------------+
|                     |    |                  |          (sagas)          |         |    (in store)     |                    |     (react)     |  | react component              |
|                     |    |                  |                           |         |                   |                    |                 <---------------+                 |
|                     |    |                  |                           |         |                   |                    |                 |  |            |                 |
|                     |    |                  |  +--------+  put(action)  |         |                   |    react-redux     |                 |  |            |                 |
|                     |    |  +------------+  |  | saga_1 +-------------------+     |                   | connect selectors  |                 |  |            |                 |
|                     +-------> @k2 plugin |<-+  +--------+               |   |     |                  +--------------------->                 |  |            |                 |
|                     |    |  | interface  |  |                           |   |     |                   |                    |                 |  |            |                 |
|                     |    |  +------------+  |                           |   |     |                   |                    |                 |  |            |                 |
|                     |    |                  |                           |   |     |                   |                    |                 |  |            |                 |
|                     |    |                  |                           |   |     |                   |                    |                 |  |            |                 |
|                     |    |                  |                           |   |     |         ^         |                    |                 |  |            |                 |
|                     |    |                  |                           |   |     |         |         |                    |                 |  |            |                 |
|                     |    |                  |                           |   |     +-------------------+                    |                 |  |            |                 |
|                     |    |                  |                           |   |               |                              |                 |  |            |                 |
|                     |    |                  |                           |   |     +---------+---------+    react-redux     |                 |  |            |                 |
|                     |    |                  |                           |   |     |                   |  disaptch actions  |                 |  |            |                 |
|                     |    |                  |              take(action) |   +----->     Reducers      <-----+--------------+                 |  |            |                 |
|                     |    |                  |                           |   |     |                   |     |              |                 |  |            |                 |
+----+----------^-----+    |                  +----------------------^----+   |     +-------------------+     |              +-----------------+  |            +-----------------+
     |          |          |                                         |        |                               |                                   |
     |          |          |                                         |        |     +-------------------+     |                                   |
     |          |          |                                         |        v     |                   |     |                                   |
+----v----------+-----+    |                                         +--------+-----+ redux middlewares <-----+                                   |
|                     |    |                                           redux-saga   |                   |                                         |
|        API          |    |                                           middleware   +-------------------+                                         |
|                     |    |                                                                                                                      |
+---------------------+    +----------------------------------------------------------------------------------------------------------------------+

                           