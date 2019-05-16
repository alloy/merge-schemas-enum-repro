## Installation

```
git clone https://github.com/alloy/merge-schemas-enum-repro.git
cd merge-schemas-enum-repro
yarn install
```

## Run

```
$ yarn works
{ data: { notification: { status: 'READ' } } }
```

```
$ yarn breaks
{ errors:
   [ { Error: Expected a value of type "NotificationsFeedItemStatus" but received: "READ"
         at completeLeafValue (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:649:11)
         at completeValue (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:592:12)
         at completeValueCatchingError (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:508:19)
         at resolveField (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:448:10)
         at executeFields (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:294:18)
         at collectAndExecuteSubfields (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:724:10)
         at completeObjectValue (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:714:10)
         at completeValue (/Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:603:12)
         at /Users/eloy/Code/Artsy/merge-schemas-enum-repro/node_modules/graphql/execution/execute.js:505:16
         at process._tickCallback (internal/process/next_tick.js:68:7)
       message:
        'Expected a value of type "NotificationsFeedItemStatus" but received: "READ"',
       locations: [Array],
       path: [Array] } ],
  data: { notification: { status: null } } }
```