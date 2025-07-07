import { secret } from "./secret";
import { server } from "./server";

new sst.aws.React("Web", {
  environment: {
    SERVER_URL: server.url,
    VITE_WEB_URL: secret.WebUrl.value,
    VITE_MAPBOX_PUBLIC_TOKEN: secret.MapboxPublicToken.value,
    // VITE_CLERK_PUBLISHABLE_KEY: secret.ClerkPublishableKey.value,
    // CLERK_SECRET_KEY: secret.ClerkSecretKey.value,
  },
});
