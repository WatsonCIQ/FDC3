---
id: version-1.2-Listener
sidebar_label: Listener
title: Listener
hide_title: true
original_id: Listener
---
# `Listener`

A Listener object is returned when an application subscribes to intents or context broadcasts via the [`addIntentListener`](#addintentlistener) or [`addContextListener`](#addcontextlistener) methods on the [DesktopAgent](DesktopAgent) object.

```typescript
interface Listener {
  unsubscribe(): void;
}
```

## Methods

### `unsubscribe`

```ts
unsubscribe(): void;
```

Allows an application to unsubscribe from listening to intents or context broadcasts.

#### See also
* [`DesktopAgent.addIntentListener`](DestkopAgent#addintentlistener)
* [`DesktopAgent.addContextListener`](DesktopAgent#addcontextlistener)
* [`Channel.addContextListener`](Channel#addcontextlistener)
* [`ContextHandler`](Types#contexthandler)
