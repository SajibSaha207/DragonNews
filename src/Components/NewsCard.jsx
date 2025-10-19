import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl overflow-hidden mb-5">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-600">
          <BsBookmark className="cursor-pointer hover:text-primary" />
          <BsShare className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt="news" className="w-full object-cover" />
      </figure>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <div className="px-4 text-sm text-gray-700">
            {details.length > 200 ?(
                <>
                {details.slice(0, 200)}...
                <span className="text-primary font-semibold cursor-pointer hover: underline">
                    Read More
                </span>
                </>
            ) :(
                details
            )}

        </div>

        {/* <p className="text-sm text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p> */}

        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{rating?.number}</span>
          <span className="badge badge-sm badge-warning uppercase">
            {rating?.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
