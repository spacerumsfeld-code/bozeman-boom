import type {} from "../.sst/platform/config";

export const secret = {
  WebUrl: new sst.Secret("WebUrl"),
  ServerUrl: new sst.Secret("ServerUrl"),
  MapboxPublicToken: new sst.Secret("MapboxPublicToken"),
  // ClerkSecretKey: new sst.Secret("ClerkSecretKey"),
  // ClerkPublishableKey: new sst.Secret("ClerkPublishableKey"),
  // Environment: new sst.Secret("Environment"),
};

export const allSecrets = Object.values(secret);
