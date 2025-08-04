interface GoogleSearchResultProps {
  title: string;
  url: string;
  description: string;
  displayUrl?: string;
}

export default function GoogleSearchResult({ title, url, description, displayUrl }: GoogleSearchResultProps) {
  return (
    <div className="mb-6">
      {/* URL breadcrumb */}
      <div className="mb-1">
        <span className="text-[14px] text-[#202124] leading-[1.3]">{displayUrl || url}</span>
      </div>

      {/* Title */}
      <h3 className="mb-1">
        <a
          href={url}
          className="text-[20px] text-[#1a0dab] hover:underline cursor-pointer leading-[1.3] visited:text-[#681da8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h3>

      {/* Description */}
      <p className="text-[14px] text-[#4d5156] leading-[1.58]">
        {description}
      </p>
    </div>
  );
}
