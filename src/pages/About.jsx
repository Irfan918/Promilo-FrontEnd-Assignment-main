import React from 'react'
import Navbar from '../components/Navbar.jsx'
const About = () => {
  return (
    <>

      <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-[1620px]'>
      <Navbar />

      <div className=" w-fit mx-16 p-6 bg-white shadow-md rounded-md my-20  font-poppins">
        <h1 className="text-3xl font-bold mb-6">About Provision Store E-shop Website</h1>

        {/* Folder Structure Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Folder Structure:</h2>
          <pre className="bg-gray-100 p-4 overflow-x-auto rounded-lg">
            {`
          - /src
            - /components
              - React components
            - /styles
              - Stylesheets for the application
            - /services
              - API services and utilities
            - /assets
              - Images, logos, and other static assets
            - /app
              - Main application components and routing
            - /login
              - Login-related components and functionalities
            - /product-list
              - Components and services related to the product list
            - /about
              - About page components and content
          `}
          </pre>
        </section>

        {/* Development Challenges Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Development Challenges:</h2>
          <p>
            Difficulties I have faced while working on this project is when I
            was making the login page. It was a new experience for sending the
            data in the Form Data fromat.
            </p>
        </section>

        {/* Step-by-Step Project Initialization Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Project Initialization:</h2>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <strong>Clone the Repository:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg">              git clone https://github.com/irfan918/Promilo-FrontEnd-Assignment</pre>
            </li>
            <li className="mb-2">
              <strong>Install Dependencies:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg">
                {`
              cd my-project
              npm install
              `}
              </pre>
            </li>
            <li className="my-2">
              <strong>Run the Application:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg">
                {`
              npm run dev
              `}
              </pre>
              <p className="my-2">The application will be accessible at <code className="bg-gray-100 p-1">http://localhost:5173</code>.</p>
            </li>
          </ol>
          <p className="mb-4"><strong>Note:</strong> Ensure to use the provided login credentials <strong>(email: test45@yopmail.com, password: Test@123)</strong>  when accessing the login page.</p>
        </section>
      
      </div>
      <footer className='absolute font-poppins left-[38%] bg-transparent'>
        Created with 💖 by <strong>Mohammad Irfan</strong> 
      </footer>
      </div>

      
    </>
  )
}

export default About