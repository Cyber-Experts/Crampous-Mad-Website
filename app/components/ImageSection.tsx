interface ImageSectionProps {
  imageSrc: string;
  height?: string;
  overlay?: boolean;
}

export default function ImageSection({ 
  imageSrc, 
  height = "h-96", 
  overlay = true 
}: ImageSectionProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <img
        src={imageSrc}
        alt="Restaurant ambiance"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/20" />
      )}
    </section>
  );
}
