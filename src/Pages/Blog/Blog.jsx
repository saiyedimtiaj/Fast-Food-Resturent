import { Helmet } from "react-helmet-async";


const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 my-20 space-y-4">
      <Helmet>
      <title>Cafue | Blog</title>
    </Helmet>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is One way data binding?
        </div>
        <div className="collapse-content">
          <p>One-way data binding is a way to bind data from the component to the view (DOM) or vice versa - from view to the component. It is used to display information to the end-user which automatically stays synchronized with each change of the underlying data.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is NPM in node.js?
        </div>
        <div className="collapse-content">
          <p>
            NPM is a package manager for Node.js packages, or modules if you
            like. www.npmjs.com hosts thousands of free packages to download and
            use. The NPM program is installed on your computer when you install
            Node.js.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Different between Mongodb database vs mySQL database?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are used to store structured data while NoSQL
            databases like MongoDB are used to save unstructured data. MongoDB
            is used to save unstructured data in JSON format.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
