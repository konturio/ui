# Timeline component

## Imperative API

`<Timeline />` Have two parts of api:

- Declarative - usual props (`TimelineProps` interface)
- Imperative - usual props (`TimelineImperativeApi` interface)

fixture/imperativeApi.fixture.tsx show example how to use imperative part

## Implementations

This component widely uses a third-party api.
To facilitate work with it and other potential api, all code that adapting the props component with a specific implementation is placed in the directory with the name of the library used.  
For example `./implementation/vis-timeline` place where located all adapters to `vis-timeline` library
