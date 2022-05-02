import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 blog-box">
          <div className="row">
            <div className="col-lg-4 blog-q">
              Difference between javascript and nodejs?
            </div>
            <div className="col-lg-8">
              Javascript is a Scripting language and NodeJsis a Javascript
              runtime environment that allows javascript to be run on the
              server-side. Through Nodejs Javascript can run outside the
              browser. Because JS itself is used on the cliet-side, and can play
              around with DOM and and add html tags wich is not possible by
              using NodeJs
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
      <div className="row my-4">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 blog-box">
          <div className="row">
            <div className="col-lg-4 blog-q">
              When should you use nodejs and when should you use mongodb?
            </div>
            <div className="col-lg-8">
              NodeJs and MongoDb is two different technologies. Where, NodeJs is
              used to build servers that can respond to web requests. It helps
              to compile and interpret code. Whereas, MongoDb is used to store
              data. And later on to work with data such as, update, delete etc.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 blog-box">
          <div className="row">
            <div className="col-lg-4 blog-q">
              Differences between sql and nosql databases. ?
            </div>
            <div className="col-lg-8">
              SQL is a relational database and NoSQL is a non-relational
              database. SQL databases are table-based, while NoSQL databases are
              document, key-value based. SQl has predifined queries whereas,
              NoSQL provides more like a dynamic shemas
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
      <div className="row my-4">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 blog-box">
          <div className="row">
            <div className="col-lg-4 blog-q">
              What is the purpose of jwt and how does it work?
            </div>
            <div className="col-lg-8">
              JWT is used for security concern between the client and the
              server. A JWT is a string made up of three parts, separated by
              dots (.), and serialized using base64. Once it is decoded we get
              three parts, header, payload and a signature. Header defines the
              type of token Payload confirms that the user has permission to
              perform the action they are requesting. The signature come with a
              seciruty measurement that the token is not altered. When a token
              is received the receiver confirms that the header and the payload
              matches the signature.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
