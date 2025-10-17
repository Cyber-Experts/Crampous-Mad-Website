import TopSeparator from "./SectionSeparator";
import BottomSeparator from "./BottomSeparator";

interface ImageWithSeparatorsProps {
  imageSrc: string;
  height?: string;
  minHeight?: string;
  separatorColor?: string;
  className?: string;
}

export default function ImageWithSeparators({ 
  imageSrc, 
  height = "35vh", 
  minHeight = "250px",
  separatorColor = "#ffffff",
  className = ""
}: ImageWithSeparatorsProps) {
  return (
    <section className={`relative w-full overflow-hidden responsive-image-section ${className}`} style={{ height, minHeight }}>
      <div 
        className="absolute inset-0 w-full h-full high-quality-bg"
        style={{ 
          backgroundImage: `url(${imageSrc})`
        }}
      />
      {/* Séparateur en haut de l'image */}
      <TopSeparator color={separatorColor} overlay={true} className="top-separator" />
      {/* Séparateur en bas de l'image */}
      <BottomSeparator color={separatorColor} overlay={true} className="bottom-separator" />
    </section>
  );
}
