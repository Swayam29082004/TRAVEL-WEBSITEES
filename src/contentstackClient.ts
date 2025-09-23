import Contentstack from "contentstack";

const stack = Contentstack.Stack({
  api_key: "CONTENTSTACK_API_KEY",       // from Contentstack
  delivery_token: "CONTENTSTACK_DELIVERY_TOKEN", // from Contentstack
  environment: "CONTENTSTACK_ENVIRONMENT",    // your environment
});

export default stack;
