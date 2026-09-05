"use client"; 
 
import Image from "next/image"; 
import Link from "next/link"; 
import { useRef, useState } from "react"; 
 
import styles from "./PopularDestinations.module.css"; 
 
const destinations = [ 
  { 
    id: 1, 
    title: "Aurora Borealis", 
    subtitle: "Northern Lights", 
    image: "/images/destinations/Aurora Borealis.png", 
    href: "/destinations/northern-lights", 
  }, 
  { 
    id: 2, 
    title: "Snaefellsnes", 
    subtitle: "Iceland’s most stunning place", 
    image: "/images/destinations/Snaefellsnes.png", 
    href: "/destinations/snaefellsnes", 
  }, 
  { 
    id: 3, 
    title: "Golden circle", 
    subtitle: "For Wonderers", 
    image: "/images/destinations/Golden Circle v1.png", 
    href: "/destinations/golden-circle", 
  }, 
  { 
    id: 4, 
    title: "Thorsmörk", 
    subtitle: "Nature excel here", 
    image: "/images/destinations/Thorsmörk.png", 
    href: "/destinations/thorsmork", 
  }, 
  { 
    id: 5, 
    title: "Landmannalaugar", 
    subtitle: "Northern Lights", 
    image: "/images/destinations/Landmannalaugar.png", 
    href: "/destinations/landmannalaugar", 
  }, 
]; 
 
const PopularDestinations = () => { 
  const sliderRef = useRef<HTMLDivElement>(null); 
 
  const [isDragging, setIsDragging] = useState(false); 
 
  const dragStartX = useRef(0); 
  const scrollStart = useRef(0); 
 
  /* ========================================= 
     ARROW SLIDER
  ========================================= */ 
 
  const scrollLeft = () => { 
    if (!sliderRef.current) return; 
 
    sliderRef.current.scrollBy({ 
      left: -396, 
      behavior: "smooth", 
    }); 
  }; 
 
  const scrollRight = () => { 
    if (!sliderRef.current) return; 
 
    sliderRef.current.scrollBy({ 
      left: 396, 
      behavior: "smooth", 
    }); 
  }; 
 
  /* ========================================= 
     MOUSE DRAG SLIDER
  ========================================= */ 
 
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => { 
    if (!sliderRef.current) return; 
 
    setIsDragging(true); 
 
    dragStartX.current = event.clientX; 
    scrollStart.current = sliderRef.current.scrollLeft; 
 
    sliderRef.current.style.scrollBehavior = "auto"; 
  }; 
 
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => { 
    if (!isDragging || !sliderRef.current) return; 
 
    event.preventDefault(); 
 
    const distance = event.clientX - dragStartX.current; 
 
    sliderRef.current.scrollLeft = scrollStart.current - distance; 
  }; 
 
  const stopDragging = () => { 
    if (!sliderRef.current) return; 
 
    setIsDragging(false); 
 
    sliderRef.current.style.scrollBehavior = "smooth"; 
  }; 
 
  return ( 
    <section className={styles.section}> 
      {/* ========================================= 
          HEADER
      ========================================= */} 
 
      <div className={styles.sectionHeader}> 
        <div className={styles.headingWrapper}> 
          <p className={styles.eyebrow}> 
            Popular road routes in Iceland 
          </p> 
 
          <h2 className={styles.title}> 
            Popular Destinations 
          </h2> 
        </div> 
 
        {/* ========================================= 
            HEADER ACTIONS
        ========================================= */} 
 
        <div className={styles.headerActions}> 
         <Link
  href="/destinations"
  className={styles.viewButton}
  aria-label="View all destinations"
  style={{ textDecoration: "none" }}
>
  <span>View all Destinations</span>

  <span className={styles.viewArrow}>
    <svg
      className={styles.viewArrowIcon}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 13.5L13.5 4.5M5.5 4.5H13.5V12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</Link>
           
 
          <div className={styles.sliderButtons}> 
            <button 
              type="button" 
              className={styles.sliderButton} 
              onClick={scrollLeft} 
              aria-label="Previous destinations" 
            > 
              <span className={styles.leftArrow}> 
                ‹ 
              </span> 
            </button> 
 
            <button 
              type="button" 
              className={styles.sliderButton} 
              onClick={scrollRight} 
              aria-label="Next destinations" 
            > 
              <span className={styles.rightArrow}> 
                › 
              </span> 
            </button> 
          </div> 
        </div> 
      </div> 
 
      {/* ========================================= 
          DESTINATION SLIDER
      ========================================= */} 
 
      <div 
        ref={sliderRef} 
        id="destination-slider" 
        className={`${styles.slider} ${ 
          isDragging ? styles.dragging : "" 
        }`} 
        role="region" 
        aria-label="Popular destinations" 
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove} 
        onMouseUp={stopDragging} 
        onMouseLeave={stopDragging} 
      > 
        {destinations.map((destination) => ( 
          <Link 
            href={destination.href} 
            className={styles.card} 
            key={destination.id} 
            aria-label={`View ${destination.title}`} 
            draggable={false} 
          > 
            <Image 
              src={destination.image} 
              alt={destination.title} 
              fill 
              sizes="372px" 
              draggable={false} 
              className={styles.cardImage} 
            /> 
 
            <div className={styles.cardOverlay} /> 
 
            <div className={styles.cardContent}> 
              <p className={styles.cardSubtitle}> 
                {destination.subtitle} 
              </p> 
 
              <h3 className={styles.cardTitle}> 
                {destination.title} 
              </h3> 
            </div> 
          </Link> 
        ))} 
      </div> 
    </section> 
  ); 
}; 
 
export default PopularDestinations;