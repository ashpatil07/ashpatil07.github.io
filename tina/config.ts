import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        ui: {
            filename: {
              readonly: false,
              slugify: values => {
                const date = new Date();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                let currentDate = `${year}-${month}-${day}`;

                return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
              }
            }
          },
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: false,
          },
          {
            type: "image",
            name: "post_image",
            label: "Post Image",
            required: false,
          },
          {
            type: "string",
            name: "meta_title",
            label: "Meta Title",
            required: false,
          },
          {
            type: "string",
            name: "meta_description",
            label: "Meta Description",
            required: false,
          },
          {
            type: "string",
            name: "slider_post",
            label: "Slider Post",
            required: true,
          },
          {
            type: "string",
            name: "simple_nav",
            label: "Simple Nav",
            required: false,
          },
          {
            type: "string",
            name: "sidebar",
            label: "Sidebar",
            required: false,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
