export const Section = ({ title, children }) => (
  <section id={title}>
    <div className="max-w-6xl pb-8 px-5 xl:px-0 bg-black text-white mx-auto">
      <h3
        className="uppercase tracking-wide no-underline hover:no-underline font-bold text-3xl mb-8"
      >
        {title}
      </h3>

      {children}
    </div>
  </section>
);
