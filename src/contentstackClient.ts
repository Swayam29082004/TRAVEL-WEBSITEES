import Contentstack from "contentstack";

const stack = Contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT as string,
});

export default stack;
