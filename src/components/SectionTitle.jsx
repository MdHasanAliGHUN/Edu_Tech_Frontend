const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-4xl font-extrabold text-white tracking-wide font-playfair">
        {title}
      </h2>
      <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        {subTitle}
      </p>
      {/* underline accent */}
      <div className="w-20 h-[3px] bg-linear-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
