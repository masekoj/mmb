const MarqueeBar = () => {
  const messages = [
    "Delivered over 750+ projects across South Africa",
    "Trusted by 500+ happy clients nationwide",
    "Building excellence in masonry, timber homes, roofing, painting, and waterproofing since 2013",
    "Expert craftsmanship turning dreams into reality for families and businesses",
    "Committed to quality, licensed, and insured solutions for every project",
  ];

  const marqueeText = messages.join(" • ");
  const repeatedText = `${marqueeText} • ${marqueeText} • ${marqueeText} • `;

  return (
    <div className="bg-secondary/90 text-primary-foreground py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="inline-block text-sm font-medium tracking-wide">
          {repeatedText}
        </span>
        <span className="inline-block text-sm font-medium tracking-wide">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBar;
