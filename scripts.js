

// Get the Modal

const modal = document.getElementById('myModal');

// click on an image and a popup displays with image pic and description to the right side

// const img = document.getElementById('image01')
// let modalImg = document.getElementsByClassName('image')
// const description = document.getElementsByClassName('popupData')
const imageLayout = document.getElementsByClassName('imageLayout')


// Array to hold the modal data - [Image URL, Artwork Title, Artist Name, Year, Description, id - id is for unique identifiers when working with APIs]
let modalData = [
    {
        url: "https://www.artic.edu/iiif/2/25f660ee-f1db-d13b-42a5-56df97c98ba7/full/843,/0/default.jpg",
        title: "Lozenge Composition with Yellow, Black, Blue, Red, and Gray",
        artistName: "Piet Mondrian",
        yearCreated: 1922,
        description:"In Lozenge Composition with Yellow, Black, Blue, Red, and Gray Mondrian rotated a square canvas to create a dynamic relationship between the rectilinear composition and the diagonal lines of the edges of the canvas. Deceptively simple, his works are the result of constant adjustment to achieve absolute balance and harmony, and they reveal an exacting attention to the subtle relations between lines, shapes, and colors. The artist hoped that his paintings would point the way to a utopian future. This goal was first formulated in Holland around 1916–17 by Mondrian and a small group of like-minded artists and architects who collectively referred to their aesthetic as De Stijl (The Style). Their ideas have been extraordinarily influential for all aspects of modern design, from architecture and fashion to household objects.",
        id: "image01"
    },
    {
        url: "https://www.artic.edu/iiif/2/8a4e78cf-d284-f262-6c9d-0ad15bc2d43b/full/843,/0/default.jpg",
        title: "Ready-to-Wear",
        artistName: "Stuart Davis",
        yearCreated: 1955,
        description: "Davis’s art is never totally abstract. Twentieth-century America is reflected in the shapes and colors he chose and in the sheer vitality of his compositions. His style—big, bright, bold, and clear—is completely appropriate to his subject matter. Forms have been reduced to large colored planes; words or numbers are simplified and offered as elements of design. In Ready-to-Wear, the bright, unmixed colors recall those of the French artist Fernand Léger. The way in which they intersect and interrupt one another, however, conveys a mood that is distinctly American: energetic, jazzy, mass produced—all qualities summed up in the title. The planes, reminiscent of overlapping pasted-down paper cutouts, even suggest the garment patterns from which ready-to-wear clothes are assembled.",
        id: "image02"
    },
    {
        url: "https://www.artic.edu/iiif/2/7bc2549a-7c93-cffd-49ad-f93df587102c/full/843,/0/default.jpg",
        title: "Heart of Darkness",
        artistName: "Sean Scully",
        yearCreated: 1982,
        description: "Sean Scullys characteristic stripe paintings have a rugged, inelegant beauty and an intensely physical, almost sculptural, presence. He works on a large scale with colors that cannot be easily characterized, allowing strong underpainting to merge with the surfaces of his works. The wavering edges of his lushly painted bands structure imperfect compositions. This canvass title, Heart of Darkness, refers to the novella first published in 1899 by Polish-born British author Joseph Conrad (1857–1924). Reflecting on the story, which depicts colonial exploitation in the Belgian Congo, Scully said, Conrad writes that the heart of the twentieth century is black.",
        id: "image03"
    },
    {
        url: "https://www.artic.edu/iiif/2/4d152c81-8389-e426-e5f2-e98902d2515a/full/843,/0/default.jpg",
        title: "Untitled (Purple, White, and Red)",
        artistName: "Mark Rothko",
        yearCreated: 1953,
        description: "Untitled (Purple, White, and Red) follows the characteristic format of Mark Rothko’s mature work, in which stacked rectangles of color appear to float within the boundaries of the canvas. By directly staining the canvas with many thin washes of pigment and paying particular attention to the edges where the fields interact, he achieved the effect of light radiating from the image itself. This technique suited Rothko’s metaphysical aims: to offer painting as a doorway into purely spiritual realms, making it as immaterial and evocative as music, and to directly communicate the most essential, raw forms of human emotion.",
        id: "image04"
    },
    {
        url: "https://www.artic.edu/iiif/2/4f7ccf9f-a8ce-2bd8-2d15-a38b2e6caa7a/full/843,/0/default.jpg",
        title: "Portrait of Pablo Picasso",
        artistName: "Juan Gris",
        yearCreated: 1912,
        description: "In 1906 Juan Gris traveled to Paris, where he met Pablo Picasso and Georges Braque and participated in the development of Cubism. Just six years later, Gris too was known as a Cubist and identified by at least one critic as “Picasso’s disciple.” Gris’s style draws upon Analytic Cubism—with its deconstruction and simultaneous viewpoint of objects—but is distinguished by a more systematic geometry and crystalline structure. Here he fractured his sitter’s head, neck, and torso into various planes and simple, geometric shapes but organized them within a regulated, compositional structure of diagonals. The artist further ordered the composition of this portrait by limiting his palette to cool blue, brown, and gray tones that, in juxtaposition, appear luminous and produce a gentle undulating rhythm across the surface of the painting. Gris depicted Picasso as a painter, palette in hand. The inscription, “Hommage à Pablo Picasso,” at the bottom right of the painting demonstrates Gris’s respect for Picasso as a leader of the artistic circles of Paris and as an innovator of Cubism. At the same time, the inscription helped Gris solidify his own place within the Paris art world when he exhibited the portrait at the Salon des Indépendants in the spring of 1912.",
        id: "image05"
    },
    {
        url: "https://www.artic.edu/iiif/2/aebda29e-16b8-4393-6edc-805cdb6ba459/full/843,/0/default.jpg",
        title: "Daniel-Henry Kahnweiler",
        artistName: "Pablo Picasso",
        yearCreated: 1910,
        description: "The subject of this portrait is Daniel-Henry Kahnweiler (1884–1979), a German-born art dealer, writer, and publisher. Kahnweiler opened an art gallery in Paris in 1907 and in 1908 began representing Pablo Picasso, whom he introduced to Georges Braque. Kahnweiler was a great champion of the artists’ revolutionary experiment with Cubism and purchased the majority of their paintings between 1908 and 1915. He also wrote an important book, The Rise of Cubism, in 1920, which offered a theoretical framework for the movement. Kahnweiler sat as many as thirty times for this portrait. No longer seeking to create the illusion of true appearances, Picasso broke down and recombined the forms he saw. He described Kahnweiler with a network of shimmering, semitransparent surfaces that merge with the atmosphere around him. Forms are fractured into various planes and faceted shapes and presented from several points of view. Despite the portrait’s highly abstract character, however, Picasso added attributes to direct the eye and focus the mind: a wave of hair, the knot of a tie, a watch chain. Out of the ﬂickering passages of brown, gray, black, and white emerges a rather traditional portrait pose of a seated man, his hands clasped in his lap.",
        id: "image06"
    },
    {
        url: "https://www.artic.edu/iiif/2/f82f0ffe-ad42-2743-be0b-fb871ac5bfa2/full/843,/0/default.jpg",
        title: "First Theme",
        artistName: "Burgoyne Diller",
        yearCreated: 1962,
        description: "",
        id: "image07"
    },
    {
        url: "https://www.artic.edu/iiif/2/bfb3ce18-337e-b8a5-56a3-6bf725d55c09/full/843,/0/default.jpg",
        title: "Small Worlds IV",
        artistName: "Vasily Kandinsky",
        yearCreated: 1922,
        description: "",
        id: "image08"
    },
    {
        url: "https://www.artic.edu/iiif/2/84346127-0ac3-f514-9fbf-1c2a1be58f03/full/843,/0/default.jpg",
        title: "Quadrangles in Two Planes",
        artistName: "Irene Rice Pereira",
        yearCreated: 1945,
        description: "",
        id: "image09"
    },
    {
        url: "https://www.artic.edu/iiif/2/d8ec86ef-8261-e933-857d-b21c7256bac2/full/843,/0/default.jpg",
        title: "Ocean Park #45",
        artistName: "Richard Diebenkorn",
        yearCreated: 1971,
        description: "A noted painter and printmaker, Richard Diebenkorn was widely recognized for his large-scale, luminous abstractions. The titles of Diebenkorn’s paintings often allude to the places that inspired them or in which they were made. His move to the Los Angeles area in 1966 led to a dramatic change in his work. The artist’s best-known paintings belong to the Ocean Park series—named for the section of Santa Monica where his studio was located—which he began in 1967 and continued for 20 years. The series comprises more than 140 paintings. These iconic works are distinguished by geometric structures, perhaps evoking the idea of a view from the studio window, overlaid with glazes of atmospheric color. In many ways, Diebenkorn sought to distill the emptiness of this landscape: sea and sky, beach and freeway.",
        id: "image10"
    },
    {
        url: "https://www.artic.edu/iiif/2/5c37c31b-e14e-12db-710c-d6b1ce3c9106/full/843,/0/default.jpg",
        title: "Hatra I",
        artistName: "Frank Stella",
        yearCreated: 1967,
        description: "",
        id: "image11"
    },
    {
        url: "https://www.artic.edu/iiif/2/cc7d2ecc-f4ae-393e-7ab0-fe3716f49502/full/843,/0/default.jpg",
        title: "Counter-Composition VIII",
        artistName: "Theo can Doesburg",
        yearCreated: 1924,
        description: "In 1917 Theo van Doesburg founded an art periodical in Leiden called De Stijl (The Style). This name also referred to the artists’ group—including Van Doesburg, Piet Mondrian, and Georges Vantongerloo—associated with the publication. These artists saw abstraction as an almost spiritual vehicle to reconstruct art and society following World War I. Their approach, as exemplified by Counter-Composition VIII, was marked by fundamentals: geometry (squares, rectangles, and straight lines) combined with asymmetry; pure primary colors used along with black and white; and positive and negative elements. In addition to painting, De Stijl had a great impact on architecture and design, and it deeply influenced Germany’s famed Bauhaus.",
        id: "image12"
    },
    {
        url: "https://www.artic.edu/iiif/2/e81e3afd-69a7-915d-d93d-4b1c2ab91bfe/full/843,/0/default.jpg",
        title: "Homage to the Square: Light Passage",
        artistName: "Josef Albers",
        yearCreated: 1956,
        description: "",
        id: "image13"
    },
    {
        url: "https://www.artic.edu/iiif/2/ddf1a4f4-e390-c23a-68b2-37e1a1561a6f/full/843,/0/default.jpg",
        title: "Midday Sorrow",
        artistName: "Angel Planells",
        yearCreated: 1932,
        description: "The Catalan artist Àngel Planells began training in 1917 to become an engraver, but after two and a half years, he turned his attention to painting. He was introduced to Surrealism through Salvador Dalí and René Magritte. In 1936 Planells exhibited three paintings, including Midday Sorrow, in the first International Surrealist Exhibition at the New Burlington Galleries in London, the foremost major exhibition to survey the history of the movement. The first owner of this painting was Roland Penrose, one of the primary organizers of the exhibition; an artist and poet, he was married to the Surrealist muse photographer Lee Miller and was a close friend of many Surrealist artists.",
        id: "image14"
    },
    {
        url: "https://www.artic.edu/iiif/2/254c654f-354a-0f4f-28b5-8eb01a02e95c/full/843,/0/default.jpg",
        title: "Composition (No. 1) Gray-Red",
        artistName: "Piet Mondrian",
        yearCreated: 1935,
        description: "The roots of 20th-century abstract art can be traced to the late 19th century, when artists began to move away from the direct representation of objects toward the communication of emotional states or moods. In doing so, the formal properties of art—such visual elements as line, color, and composition—assumed a primary role in its production. After World War I, many artists, including Piet Mondrian, believed that abstract art could contribute to a more harmonious society by communicating in a universal, visual language. In the wake of the war’s destruction, artists associated with De Stijl (meaning, “the style”) in the Netherlands recognized the need for a break with the past, as well as a new aesthetic language to correspond to their utopian vision of the world. In 1917 Mondrian joined the De Stijl movement and began to develop a purely visual language of verticals and horizontals, restricting his compositions to predominantly off-white grounds divided by black rectilinear lines that framed smaller blocks of primary colors.",
        id: "image15"
    },
    {
        url: "https://www.artic.edu/iiif/2/872371ff-d773-f209-8062-7f88c95f2691/full/843,/0/default.jpg",
        title: "Portrait of Sylvette David",
        artistName: "Pablo Picasso",
        yearCreated: 1954,
        description: "",
        id: "image16"
    },
    {
        url: "https://www.artic.edu/iiif/2/f9932dea-7999-ea96-fcab-965e027051c2/full/843,/0/default.jpg",
        title: "Greyed Rainbow",
        artistName: "Jackson Pollock",
        yearCreated: 1953,
        description: "In the late 1940s Jackson Pollock developed a revolutionary form of Abstract Expressionism by dripping, pouring, and splashing paint onto large-scale canvases. Pollock emphasized the expressive power of the artist’s gestures, materials, and tools, often applying paint with sticks, trowels, and palette knives instead of brushes. He also challenged the concept of easel painting by working on canvases placed either on the floor or fixed to a wall. With no apparent beginning or end, top or bottom, his paintings imply an extension of his art beyond the edges of the canvas, engulfing the viewer. Among the last great purely abstract paintings Pollock made before his untimely death in 1956, Greyed Rainbow is a quintessential example of action painting. The paint application ranges from thick chunks squeezed directly from a tube to thin, meandering lines poured from a container with a small hole or squirted from a baster. The work is predominantly black, white, gray, and silver; in the bottom third of the canvas, however, Pollock thinly concealed orange, yellow, green, blue, and violet. The title of the work presumably refers to these grayed sections of hidden color.",
        id: "image17"
    },
    {
        url: "https://www.artic.edu/iiif/2/524206a7-fb35-70d9-4b37-a0b7ac563be6/full/843,/0/default.jpg",
        title: "The Key",
        artistName: "Jackson Pollock",
        yearCreated: 1946,
        description: "The Key belongs to Jackson Pollock’s Accabonac Creek series, named for a stream near the East Hampton property that he and his wife, the painter Lee Krasner, purchased in late 1945. Marking a crucial moment in his evolution as an artist, this quasi-Surrealist painting was created on the floor of an upstairs bedroom and worked on directly from all sides. Although there is a general suggestion of landscape, here the process of painting became primary, expressing the power of spontaneous action and chance effects. The resulting abstraction, with its expressive, gestural appearance, prefigured the allover compositions of Pollock’s celebrated drip paintings, which debuted the following year.",
        id: "image18"
    },
]

//This pulls the url from the object and places it in the website 

for (const imageData of modalData) {
    let createdImage = document.createElement("img")
    createdImage.src = imageData.url
    createdImage.classList.add('image', 'square') 
    imageLayout[0].appendChild(createdImage)
    createdImage.setAttribute('id', imageData.id)
}


//all images inside the image modal content class  (below code sample from https://codepen.io/RileyB/pen/XQyaXy?editors=1010)
const artImages = document.querySelectorAll('.imageLayout');

// const modalElement = element =>
//   document.querySelector(`.modalPopup ${element}`);

const body = document.querySelector('body');

// closes modal on clicking anywhere and adds overflow back
document.addEventListener('click', () => {
    body.style.overflow = 'auto';
    modalPopup.style.display = 'none';
  });

const modalPopup = document.querySelector('.popupModal');
const modalImage = document.getElementById('modal-image');
const title = document.getElementById('artTitle');
const artist = document.getElementById('artistName');
const date = document.getElementById('date');
const description = document.getElementById('description');
let index = ""
window.onclick = element => {
    console.log(element.target.id)
}

// function modalRun(picker) {
//     let currentImage = 
// }

// loops over each modal content img and adds click event functionality
// for (let i = 0; i < modalData.length; i++) {
//     artImages[i].addEventListener('click', e => {
//         body.style.overflow = 'hidden';
//         e.stopPropagation();
//         modalPopup.style.display = 'flex';
//         index = i;
//         // modalContent()
//     })
// }

 


// function modalContent() {
//     modalImage.src = modalData[index].url;
//     title.innerHTML = modalData[index].title;
//     artist.innerHTML = modalData[index].artistName;
//     date.innerHTML = modalData[index].yearCreated;
//     description.innerHTML = modalData[index].description;
//     // console.log(modalContent)
//     // console.log(modalImage)
//     // console.log(title)
// }



// artImages.forEach(img => {
//     img.addEventListener('click', e => {
//     //   body.style.overflow = 'hidden';
//     //   e.stopPropagation();
//     //   modalPopup.style.display = 'flex';
//       modalImage.src = modalData.url;
//       title.innerHTML = modalData.title;
//       artist.innerHTML = modalData.artistName;
//       date.innerHTML = modalData.yearCreated;
//       description.innerHTML = modalData.description;
//     });
//   });
  


// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"
}





// Array to hold the following data - [Image URL, Artwork Title, Artist Name, Year]




