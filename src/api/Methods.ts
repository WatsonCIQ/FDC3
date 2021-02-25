import {
  AppIntent,
  Channel,
  Context,
  ContextHandler,
  IntentResolution,
  Listener,
} from '..';
import { TargetApp } from './Types';

const unavailableError = new Error(
  'FDC3 DesktopAgent not available at `window.fdc3`.'
);

const rejectIfNoGlobal = (f: () => Promise<any>) => {
  return window.fdc3 ? f() : Promise.reject(unavailableError);
};

const throwIfNoGlobal = (f: () => any) => {
  if (!window.fdc3) {
    throw unavailableError;
  }
  return f();
};

export const open: (app: TargetApp, context?: Context) => Promise<void> = (
  app,
  context
) => {
  return rejectIfNoGlobal(() => window.fdc3.open(app, context));
};

export const findIntent: (
  intent: string,
  context?: Context
) => Promise<AppIntent> = (intent, context) => {
  return rejectIfNoGlobal(() => window.fdc3.findIntent(intent, context));
};

export const findIntentsByContext: (
  context: Context
) => Promise<Array<AppIntent>> = context => {
  return rejectIfNoGlobal(() => window.fdc3.findIntentsByContext(context));
};

export const broadcast: (context: Context) => void = context => {
  throwIfNoGlobal(() => window.fdc3.broadcast(context));
};

export const raiseIntent: (
  intent: string,
  context: Context,
  app?: TargetApp
) => Promise<IntentResolution> = (intent, context, app) => {
  return rejectIfNoGlobal(() => window.fdc3.raiseIntent(intent, context, app));
};

export const raiseIntentForContext: (
  context: Context,
  app?: TargetApp
) => Promise<IntentResolution> = (context, app) => {
  return rejectIfNoGlobal(() =>
    window.fdc3.raiseIntentForContext(context, app)
  );
};

export const addIntentListener: (
  intent: string,
  handler: ContextHandler
) => Listener = (intent, handler) => {
  return throwIfNoGlobal(() => window.fdc3.addIntentListener(intent, handler));
};

export const addContextListener: (
  contextTypeOrHandler: string | ContextHandler,
  handler?: ContextHandler
) => Listener = (a, b) => {
  if (typeof a !== 'function') {
    return throwIfNoGlobal(() =>
      window.fdc3.addContextListener(a as string, b as ContextHandler)
    );
  } else {
    return throwIfNoGlobal(() =>
      window.fdc3.addContextListener(a as ContextHandler)
    );
  }
};

export const getSystemChannels: () => Promise<Array<Channel>> = () => {
  return rejectIfNoGlobal(() => window.fdc3.getSystemChannels());
};

export const joinChannel: (channelId: string) => Promise<void> = channelId => {
  return rejectIfNoGlobal(() => window.fdc3.joinChannel(channelId));
};

export const getOrCreateChannel: (
  channelId: string
) => Promise<Channel> = channelId => {
  return rejectIfNoGlobal(() => window.fdc3.getOrCreateChannel(channelId));
};

export const getCurrentChannel: () => Promise<Channel | null> = () => {
  return rejectIfNoGlobal(() => window.fdc3.getCurrentChannel());
};

export const leaveCurrentChannel: () => Promise<void> = () => {
  return rejectIfNoGlobal(() => window.fdc3.leaveCurrentChannel());
};
