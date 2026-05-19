import React from "react"; 
import Banner from "../component/common/Banner";


export default function Home() {
  return (
    <>
      <Banner />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="p-8 rounded-3xl shadow-xl"
            style={{
              backgroundColor: "var(--white-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Secure Authentication
            </h2>

            <p style={{ color: "var(--text-secondary)" }}>
              Implement JWT authentication with access and refresh tokens
              using Redux Toolkit and Express backend.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-8 rounded-3xl shadow-xl"
            style={{
              backgroundColor: "var(--white-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Modern UI
            </h2>

            <p style={{ color: "var(--text-secondary)" }}>
              Create beautiful responsive interfaces using Tailwind CSS,
              Formik forms, and reusable component architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-8 rounded-3xl shadow-xl"
            style={{
              backgroundColor: "var(--white-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Scalable Structure
            </h2>

            <p style={{ color: "var(--text-secondary)" }}>
              Organize your project with helpers, slices, reducers,
              thunks, layouts, protected routes, and API services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}