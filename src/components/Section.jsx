export const Section = ({ title, children }) => (
  <section id={title} className="bg-white">
    <div className="container pb-8 px-6 mx-auto">
      <h3
        className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
      >
        {title}
      </h3>

      {children}
    </div>
  </section>
);
