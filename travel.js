const destinations = [
  {
    slug: "bangkok",
    name: "Bangkok",
    flag: "🇹🇭",
    region: "Southeast Asia",
    description: "A lively Thai capital where riverside life, historic temples, street food, and modern neighborhoods meet.",
    highlights: ["Chao Phraya riverside", "Temple architecture", "Street food and markets"],
    cover: "bangkok/1.JPG",
  },
  {
    slug: "yangon",
    name: "Yangon",
    flag: "🇲🇲",
    region: "Southeast Asia",
    description: "Myanmar's largest city pairs landmark pagodas with leafy streets, historic buildings, and busy markets.",
    highlights: ["Shwedagon Pagoda", "Historic downtown", "Local markets"],
    cover: "yangon/1.JPG",
  },
  {
    slug: "kalaymyo",
    name: "Kalaymyo",
    flag: "🇲🇲",
    region: "Southeast Asia",
    description: "A welcoming city in northwestern Myanmar, set among the landscapes and communities of the Kalay Valley.",
    highlights: ["Kalay Valley scenery", "Local markets", "Everyday city life"],
    cover: "kalaymyo/1.JPG",
  },
  {
    slug: "bago",
    name: "Bago",
    flag: "🇲🇲",
    region: "Southeast Asia",
    description: "A historic Myanmar city known for its Buddhist heritage, impressive pagodas, and relaxed local atmosphere.",
    highlights: ["Shwemawdaw Pagoda", "Kyaik Pun Pagoda", "Historic sites"],
    cover: "bago/1.JPG",
  },
  {
    slug: "chiangmai",
    name: "Chiang Mai",
    flag: "🇹🇭",
    region: "Southeast Asia",
    description: "Northern Thailand's cultural center, with a historic old city, temple-lined streets, and mountain scenery nearby.",
    highlights: ["Old City temples", "Northern Thai food", "Mountain day trips"],
    cover: "chiangmai/1.JPG",
  },
  {
    slug: "seoul",
    name: "Seoul",
    flag: "🇰🇷",
    region: "East Asia",
    description: "A dynamic South Korean capital where royal palaces, contemporary design, and lively neighborhood streets share the city.",
    highlights: ["Royal palaces", "Neighborhood food", "City viewpoints"],
    cover: "seoul/1.JPG",
  },
  {
    slug: "narita",
    name: "Narita",
    flag: "🇯🇵",
    region: "East Asia",
    description: "More than an airport stop, Narita is a historic Japanese city with a celebrated temple and traditional approach street.",
    highlights: ["Naritasan Shinshoji Temple", "Omotesando street", "Japanese garden scenery"],
    cover: "narita/1.JPG",
  },
  {
    slug: "nyc",
    name: "New York City",
    flag: "🇺🇸",
    region: "North America",
    description: "An energetic city of distinct neighborhoods, iconic skylines, renowned museums, and green spaces.",
    highlights: ["Neighborhood walks", "Parks and skyline views", "Museums and arts"],
    cover: "nyc/1.JPG",
  },
  {
    slug: "okc",
    name: "Oklahoma City",
    flag: "🇺🇸",
    region: "North America",
    description: "Oklahoma's capital blends a revitalized downtown with public art, local history, and welcoming neighborhoods.",
    highlights: ["Bricktown Canal", "Scissortail Park", "Arts and local history"],
    cover: "okc/2.JPG",
  },
  {
    slug: "dallas",
    name: "Dallas",
    flag: "🇺🇸",
    region: "North America",
    description: "A North Texas city with a broad arts scene, distinctive neighborhoods, and a strong food culture.",
    highlights: ["Arts District", "Neighborhood dining", "Urban parks"],
    cover: "dallas/1.JPG",
  },
  {
    slug: "chicago",
    name: "Chicago",
    flag: "🇺🇸",
    region: "North America",
    description: "A lakefront city celebrated for its architecture, cultural institutions, and vibrant neighborhood character.",
    highlights: ["Architecture and skyline", "Lake Michigan waterfront", "Neighborhood food"],
    cover: "chicago/1.JPG",
  },
  {
    slug: "toronto",
    name: "Toronto",
    flag: "🇨🇦",
    region: "North America",
    description: "Canada's largest city brings together waterfront walks, diverse neighborhoods, and a lively arts and food scene.",
    highlights: ["Lake Ontario waterfront", "Neighborhood exploring", "Museums and arts"],
    cover: "toronto/1.JPG",
  },
];

const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const makeHighlights = (items, className = "flex flex-wrap gap-2") => {
  const list = element("ul", className);
  items.forEach((item) => {
    const entry = element("li", "rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900", item);
    list.append(entry);
  });
  return list;
};

const enhanceGallery = (destination) => {
  document.title = `${destination.name} | My Travels`;
  const gallery = document.querySelector("main");
  if (gallery) {
    gallery.classList.remove("px-4", "py-10", "gap-6");
    gallery.classList.add("px-2", "py-6", "gap-2");
    gallery.querySelectorAll(":scope > div").forEach((card) => {
      card.classList.remove("h-64", "sm:h-72", "lg:h-80", "rounded-lg");
      card.classList.add("h-96", "sm:h-[30rem]", "lg:h-[36rem]", "rounded-xl");
    });
  }

  const header = document.querySelector("header");
  if (header) {
    const heading = header.querySelector("h1");
    const subtitle = header.querySelector("p");
    if (heading) heading.textContent = destination.name;
    if (subtitle) subtitle.textContent = "A collection of travel photos and videos";

    const navigation = element("nav", "container mx-auto px-4 pt-5");
    navigation.setAttribute("aria-label", "Page navigation");
    const homeLink = element("a", "inline-flex rounded-md px-3 py-2 font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600", "← All destinations");
    homeLink.href = "index.html#destinations";
    navigation.append(homeLink);
    header.after(navigation);

    const intro = element("section", "container mx-auto px-4 pb-8 pt-5");
    intro.setAttribute("aria-labelledby", "destination-intro-heading");
    const label = element("p", "text-sm font-semibold uppercase tracking-widest text-blue-700", "Destination notes");
    const introHeading = element("h2", "mt-2 text-2xl font-bold text-gray-900", `${destination.flag} ${destination.name}`);
    introHeading.id = "destination-intro-heading";
    const description = element("p", "mt-3 max-w-3xl leading-relaxed text-gray-600", destination.description);
    const highlightsHeading = element("h3", "mt-5 text-sm font-semibold uppercase tracking-wide text-gray-700", "Highlights to explore");
    intro.append(label, introHeading, description, highlightsHeading, makeHighlights(destination.highlights));
    navigation.after(intro);
  }

  document.querySelectorAll("img").forEach((image, index) => {
    image.loading = "lazy";
    image.decoding = "async";
    if (!image.alt || image.alt === "...") {
      image.alt = `Photo ${index + 1} from the ${destination.name} travel collection`;
    }
  });

  const videos = [...document.querySelectorAll("video")];
  const playbackObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.autoplay = true;
          video.play().catch((error) => {
            video.autoplay = false;
            video.controls = true;
            console.error(`Autoplay failed for ${video.currentSrc || video.src}`, error);
          });
        } else {
          video.autoplay = false;
          video.pause();
        }
      });
    }, { threshold: 0.5 })
    : null;

  videos.forEach((video, index) => {
    video.removeAttribute("autoplay");
    video.removeAttribute("controls");
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.controls = !playbackObserver;
    video.preload = "none";
    video.playsInline = true;
    video.setAttribute("aria-label", `Autoplaying travel video ${index + 1} from ${destination.name}.`);
    if (playbackObserver) playbackObserver.observe(video);
  });
};

const makeDestinationCard = (destination) => {
  const card = element("article", "group relative min-h-[28rem] overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[34rem]");
  const link = document.createElement("a");
  link.href = `${destination.slug}.html`;
  link.className = "absolute inset-0 block rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500";
  link.setAttribute("aria-label", `Explore ${destination.name}: ${destination.description}`);
  const image = document.createElement("img");
  image.src = destination.cover;
  image.alt = `Photo from the ${destination.name} travel collection`;
  image.loading = "lazy";
  image.decoding = "async";
  image.className = "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105";
  image.setAttribute("aria-hidden", "true");
  const shade = element("span", "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10");
  shade.setAttribute("aria-hidden", "true");
  const content = element("div", "absolute inset-x-0 bottom-0 p-6 text-white sm:p-7");
  const region = element("p", "text-xs font-semibold uppercase tracking-[0.2em] text-white/80", destination.region);
  const title = element("h3", "mt-2 text-2xl font-bold sm:text-3xl", `${destination.flag} ${destination.name}`);
  const description = element("p", "mt-3 line-clamp-3 text-sm leading-relaxed text-white/90 sm:text-base", destination.description);
  const prompt = element("span", "mt-5 inline-flex items-center rounded-full border border-white/70 px-4 py-2 text-sm font-semibold transition group-hover:bg-white group-hover:text-gray-900", "View collection →");
  content.append(region, title, description, makeHighlights(destination.highlights, "mt-4 flex flex-wrap gap-2"), prompt);
  link.append(image, shade, content);
  card.append(link);
  return card;
};

const renderHome = () => {
  const regions = document.querySelector("#destination-regions");
  const regionNames = [...new Set(destinations.map((destination) => destination.region))];
  regionNames.forEach((region) => {
    const section = element("section", "");
    const heading = element("h3", "mb-5 text-2xl font-bold text-gray-900", region);
    const cards = element("div", "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3");
    destinations.filter((destination) => destination.region === region)
      .forEach((destination) => cards.append(makeDestinationCard(destination)));
    section.append(heading, cards);
    regions.append(section);
  });
};

const currentSlug = window.location.pathname.split("/").pop().replace(/\.html$/, "");
if (currentSlug === "" || currentSlug === "index") {
  renderHome();
} else {
  const currentDestination = destinations.find((destination) => destination.slug === currentSlug);
  if (currentDestination) enhanceGallery(currentDestination);
}
