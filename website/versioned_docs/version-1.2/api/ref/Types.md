---
title: Types
id: version-1.2-Types
original_id: Types
---

FDC3 API operations make use of several type declarations.

## `Context`

```typescript
type Context = object;
```

The base object that all contexts should extend.

The API specification allows this to be any object, but typically this is supposed to be a context data object adhering to the [Context Data Specification](../../context/spec).

This means that it must at least have a `type` property that indicates what type of data it represents, e.g. `'fdc3.contact'`.

The `type` property of context objects is important for certain FDC3 operations, like [`Channel.getCurrentContext`](Channel#getCurrentContext) and [`DesktopAgent.addContextListener`](DesktopAgent#addContextListener), which allows you to filter contexts by their type.

#### See also
* [`ContextHandler`](#contexthandler)
* [`DesktopAgent.open`](DesktopAgent#open)
* [`DesktopAgent.broadcast`](DesktopAgent#broadcast)
* [`DesktopAgent.addIntentListener`](DesktopAgent#addintentlistener)
* [`DesktopAgent.addContextListener`](DesktopAgent#addcontextlistener)
* [`DesktopAgent.findIntent`](DesktopAgent#findintent)
* [`DesktopAgent.findIntentsByContext`](DesktopAgent#findintentsbycontext)
* [`DesktopAgent.raiseIntent`](DesktopAgent#raiseintent)
* [`DesktopAgent.raiseIntentForContext`](DesktopAgent#raiseIntentForContext)
* [`Channel.broadcast`](Channel#broadcast)
* [`Channel.getCurrentContext`](Channel#getCurrentContext)
* [`Channel.addContextListener`](Channel#addContextListener)

## `ContextHandler`

```typescript
type ContextHandler = (context: Context) => void;
```

Describes a callback that handles a context event.

Used when attaching listeners for context broadcasts and raised intents.

#### See also
* [`Context`](#context)
* [`DesktopAgent.addIntentListener`](DesktopAgent#addintentlistener)
* [`DesktopAgent.addContextListener`](DesktopAgent#addcontextlistener)
* [`Channel.addContextListener`](Channel#addcontextlistener)

## `TargetApp`

```typescript
type TargetApp = string | AppMetadata;
```

Operations that target apps (like `open` or `raiseIntent`) can identify an app just by by its name,
or pass full app metadata, giving the desktop agent more information about the targeted app.

#### See also
* [`AppMetadata`](Metadata#appmetadata)
* [`DesktopAgent.open`](DesktopAgent#open)
* [`DesktopAgent.raiseIntent`](DesktopAgent#raiseintent)
* [`DesktopAgent.raiseIntentForContext`](DesktopAgent#raiseintentforcontext)
* [`IntentResolution`](Metadata#intentresolution)
