const NewsSHow = ({ news }) => {
  const { image, headline, newsLink } = news;

  return (
    <div className="w-72 border-2 rounded-xl p-4 ml-4 flex flex-col">
      <div className="flex-grow">
        <img src={image} className="rounded-xl" />
      </div>
      <div className="mt-auto">
        <h1 className="text-lg text-white">{headline}</h1>
        <a href={newsLink} className="text-blue-500">
          Read
        </a>
      </div>
    </div>
  );
};

export default NewsSHow;
