/**
 * PreviousEventsGallery Component
 *
 * Mobile: Horizontal image slider with dot navigation
 * Desktop: Grid layout (3 rows x 4 columns)
 */

import { asset } from "../config.js";

export class PreviousEventsGallery {
  constructor() {
    // Image data organized in rows (desktop layout)
    this.rows = [
      [
        { url: asset("/images/photos/photo_row_1_1.jpg"), alt: "Event 1" },
        { url: asset("/images/photos/photo_row_1_2.jpg"), alt: "Event 2" },
        { url: asset("/images/photos/photo_row_1_3.jpg"), alt: "Event 3" },
        { url: asset("/images/photos/photo_row_1_4.jpg"), alt: "Event 4" },
      ],
      [
        { url: asset("/images/photos/photo_row_2_1.jpg"), alt: "Event 5" },
        { url: asset("/images/photos/photo_row_2_2.jpg"), alt: "Event 6" },
        { url: asset("/images/photos/photo_row_2_3.jpg"), alt: "Event 7" },
        { url: asset("/images/photos/photo_row_2_4.jpg"), alt: "Event 8" },
      ],
      [
        { url: asset("/images/photos/photo_row_3_1.jpg"), alt: "Event 9" },
        { url: asset("/images/photos/photo_row_3_2.jpg"), alt: "Event 10" },
        { url: asset("/images/photos/photo_row_3_3.jpg"), alt: "Event 11" },
        { url: asset("/images/photos/photo_row_3_4.jpg"), alt: "Event 12" },
      ],
    ];

    // Flat array for mobile slider
    this.allImages = this.rows.flat();

    // State
    this.currentSlide = 0;
    this.sliderRef = null;
    this.container = null;
  }

  handleScroll = () => {
    if (this.sliderRef) {
      const scrollLeft = this.sliderRef.scrollLeft;
      const slideWidth = this.sliderRef.clientWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);

      if (newSlide !== this.currentSlide) {
        this.currentSlide = newSlide;
        this.updateDots();
      }
    }
  };

  goToSlide(index) {
    if (this.sliderRef) {
      const slideWidth = this.sliderRef.clientWidth;
      this.sliderRef.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  }

  updateDots() {
    const dots = this.container.querySelectorAll("[data-dot]");
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.style.backgroundColor = "#47c552";
      } else {
        dot.style.backgroundColor = "#333";
      }
    });
  }

  renderMobileSlider() {
    const slidesHtml = this.allImages
      .map(
        (image) => `
      <div class="w-full shrink-0 snap-center h-full">
        <div
          class="w-full h-full"
          style="background-image: url('${image.url}'); background-size: cover; background-position: center;"
        ></div>
      </div>
    `
      )
      .join("");

    const dotsHtml = this.allImages
      .map(
        (image, index) => `
      <button
        type="button"
        data-dot="${index}"
        class="w-2 h-2 rounded-full transition-colors duration-200"
        style="background-color: ${index === 0 ? "#47c552" : "#333"};"
        aria-label="Go to slide ${index + 1}"
      ></button>
    `
      )
      .join("");

    return `
      <div class="tablet:hidden bg-black relative h-[400px]">
        <!-- Slider Container -->
        <div
          data-slider
          class="flex h-full overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
          style="-webkit-overflow-scrolling: touch; touch-action: pan-x pan-y;"
        >
          ${slidesHtml}
        </div>

        <!-- Gradient Overlay -->
        <div class="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

        <!-- Navigation Dots -->
        <div class="flex absolute bottom-7 z-20 justify-center items-center gap-3 w-full">
          ${dotsHtml}
        </div>
      </div>
    `;
  }

  renderDesktopGrid() {
    const rowsHtml = this.rows
      .map((row) => {
        const imagesHtml = row
          .map(
            (image) => `
        <div
          class="w-1/4 aspect-4/3 overflow-hidden bg-center bg-no-repeat bg-cover"
          style="background-image: url('${image.url}')"
        ></div>
      `
          )
          .join("");

        return `<div class="flex flex-row">${imagesHtml}</div>`;
      })
      .join("");

    return `
      <div class="hidden tablet:block">
        ${rowsHtml}
      </div>
    `;
  }

  render() {
    return `
      <section class="w-full bg-bg-dark px-2 tablet:px-0">
        <!-- Gallery Container with border -->
        <div class="border border-primary-green-muted tablet:border-0 rounded-4xl tablet:rounded-none overflow-hidden relative">
          ${this.renderMobileSlider()}
          ${this.renderDesktopGrid()}
        </div>
      </section>
    `;
  }

  attachEventListeners() {
    this.sliderRef = this.container.querySelector("[data-slider]");

    if (this.sliderRef) {
      this.sliderRef.addEventListener("scroll", this.handleScroll);
    }

    const dots = this.container.querySelectorAll("[data-dot]");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });
  }

  mount(container) {
    if (!container) {
      console.error("PreviousEventsGallery: Container element not found");
      return;
    }

    this.container = container;
    container.innerHTML = this.render();
    this.attachEventListeners();
  }

  destroy() {
    if (this.sliderRef) {
      this.sliderRef.removeEventListener("scroll", this.handleScroll);
    }
  }
}
