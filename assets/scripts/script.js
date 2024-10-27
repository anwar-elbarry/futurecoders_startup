"use strict";
// navbar functionality
const mynav = document.getElementById("sidenav");
const openbtn = document.getElementById("burger-icon");

openbtn.addEventListener("click", function () {
	mynav.classList.toggle("show");
});

const currentUrlPathname = window.location.pathname;
const products = [
	// PCs
	{
		id: 0,
		category: "Computers",
		imageSrc: "1.webp",
		title: "Gaming Desktop PC",
		price: "$1200",
		description:
			"A high-performance gaming desktop with an Intel Core i7 processor, 16GB RAM, and NVIDIA GTX 3080.",
		size: "L",
	},
	{
		id: 1,
		category: "Computers",
		imageSrc: "2.webp",
		title: "Workstation PC",
		price: "$1500",
		description:
			"Engineered for professionals with AMD Ryzen 9 CPU and 64GB of RAM for 3D rendering and video editing.",
		size: "XL",
	},
	{
		id: 2,
		category: "Computers",
		imageSrc: "3.webp",
		title: "All-in-One PC",
		price: "$1000",
		description:
			"Sleek all-in-one with a 27-inch 4K display and Intel Core i5 processor for home or office use.",
		size: "M",
	},
	{
		id: 3,
		category: "Computers",
		imageSrc: "4.webp",
		title: "Compact Mini PC",
		price: "$600",
		description:
			"Mini PC with 16GB RAM and 512GB SSD, perfect for light gaming and portability.",
		size: "S",
	},
	{
		id: 4,
		category: "Computers",
		imageSrc: "5.webp",
		title: "Budget Desktop PC",
		price: "$500",
		description:
			"Affordable PC with Intel Core i5, 8GB RAM, and 1TB hard drive for students or home users.",
		size: "M",
	},
	{
		id: 5,
		category: "Computers",
		imageSrc: "6.webp",
		title: "High-End Gaming PC",
		price: "$2500",
		description:
			"Features Intel Core i9 and NVIDIA RTX 4090 for ultra-realistic gaming with ray tracing.",
		size: "XL",
	},
	{
		id: 6,
		category: "Computers",
		imageSrc: "7.webp",
		title: "Business Desktop PC",
		price: "$1100",
		description:
			"Intel Core i7 and 32GB RAM for multitasking, with enterprise-level security features.",
		size: "L",
	},
	{
		id: 7,
		category: "Computers",
		imageSrc: "8.webp",
		title: "Home Office PC",
		price: "$908",
		description:
			"Intel Core i5, 16GB RAM, and 1TB SSD for remote work and quiet home office setups.",
		size: "M",
	},

	// Keyboards
	{
		id: 8,
		category: "Keyboards",
		imageSrc: "9.webp",
		title: "Mechanical Gaming Keyboard",
		price: "$100",
		description:
			"RGB backlit mechanical keyboard with customizable macros for gamers.",
		size: "M",
	},
	{
		id: 9,
		category: "Keyboards",
		imageSrc: "10.webp",
		title: "Wireless Ergonomic Keyboard",
		price: "$80",
		description:
			"Ergonomically designed wireless keyboard for long hours of comfortable typing.",
		size: "L",
	},
	{
		id: 10,
		category: "Keyboards",
		imageSrc: "11.webp",
		title: "Compact Keyboard",
		price: "$50",
		description:
			"Compact and portable keyboard ideal for mobile workstations.",
		size: "S",
	},
	{
		id: 11,
		category: "Keyboards",
		imageSrc: "12.webp",
		title: "Bluetooth Keyboard",
		price: "$60",
		description: "Bluetooth-enabled keyboard with multi-device pairing.",
		size: "M",
	},
	{
		id: 12,
		category: "Keyboards",
		imageSrc: "13.webp",
		title: "Mechanical Keyboard with Numpad",
		price: "$90",
		description:
			"Full-sized mechanical keyboard with a dedicated numeric keypad.",
		size: "L",
	},
	{
		id: 13,
		category: "Keyboards",
		imageSrc: "14.webp",
		title: "Waterproof Keyboard",
		price: "$45",
		description: "Durable, waterproof keyboard for everyday use.",
		size: "M",
	},
	{
		id: 14,
		category: "Keyboards",
		imageSrc: "15.webp",
		title: "RGB Mechanical Keyboard",
		price: "$110",
		description:
			"High-quality RGB keyboard with customizable lighting effects.",
		size: "M",
	},
	{
		id: 15,
		category: "Keyboards",
		imageSrc: "16.webp",
		title: "Silent Mechanical Keyboard",
		price: "$85",
		description:
			"A silent mechanical keyboard designed for quiet typing in office environments.",
		size: "M",
	},

	// Headphones
	{
		id: 16,
		category: "Headphones",
		imageSrc: "17.webp",
		title: "Wireless Over-Ear Headphones",
		price: "$150",
		description:
			"Premium wireless headphones with active noise cancellation.",
		size: "L",
	},
	{
		id: 17,
		category: "Headphones",
		imageSrc: "18.webp",
		title: "In-Ear Bluetooth Headphones",
		price: "$80",
		description:
			"Compact Bluetooth headphones with long battery life, ideal for workouts.",
		size: "XS",
	},
	{
		id: 18,
		category: "Headphones",
		imageSrc: "19.webp",
		title: "Gaming Headset",
		price: "$120",
		description:
			"Surround sound gaming headset with a detachable microphone.",
		size: "M",
	},
	{
		id: 19,
		category: "Headphones",
		imageSrc: "20.webp",
		title: "Noise-Cancelling Headphones",
		price: "$200",
		description:
			"Over-ear noise-cancelling headphones with memory foam ear pads.",
		size: "L",
	},
	{
		id: 20,
		category: "Headphones",
		imageSrc: "21.webp",
		title: "Studio Monitor Headphones",
		price: "$250",
		description:
			"High-fidelity studio headphones designed for professional audio mixing.",
		size: "L",
	},
	{
		id: 21,
		category: "Headphones",
		imageSrc: "22.webp",
		title: "Sports Earbuds",
		price: "$60",
		description: "Waterproof sports earbuds with secure fit for workouts.",
		size: "XS",
	},
	{
		id: 22,
		category: "Headphones",
		imageSrc: "23.webp",
		title: "Wireless Earbuds",
		price: "$100",
		description:
			"Truly wireless earbuds with a charging case for on-the-go use.",
		size: "XS",
	},
	{
		id: 23,
		category: "Headphones",
		imageSrc: "24.webp",
		title: "Bud24.webpget Over-Ear Headphones",
		price: "$40",
		description: "Affordable over-ear headphones with clear sound quality.",
		size: "M",
	},

	// Mice
	{
		id: 24,
		category: "Mice",
		imageSrc: "25.webp",
		title: "Wireless Gaming Mouse",
		price: "$60",
		description:
			"Ergonomic wireless gaming mouse with adjustable DPI and RGB lighting.",
		size: "S",
	},
	{
		id: 25,
		category: "Mice",
		imageSrc: "26.webp",
		title: "Wired Optical Mouse",
		price: "$20",
		description:
			"Reliable wired mouse with precise tracking for everyday use.",
		size: "XS",
	},
	{
		id: 26,
		category: "Mice",
		imageSrc: "27.webp",
		title: "Bluetooth Travel Mouse",
		price: "$35",
		description: "Compact Bluetooth mouse for professionals on the go.",
		size: "XS",
	},
	{
		id: 27,
		category: "Mice",
		imageSrc: "28.webp",
		title: "Vertical Ergonomic Mouse",
		price: "$50",
		description:
			"Vertical mouse for wrist comfort during long computer sessions.",
		size: "M",
	},
	{
		id: 28,
		category: "Mice",
		imageSrc: "29.webp",
		title: "RGB Gaming Mouse",
		price: "$70",
		description:
			"Gaming mouse with full RGB lighting and high-precision sensor.",
		size: "S",
	},
	{
		id: 29,
		category: "Mice",
		imageSrc: "30.webp",
		title: "Ambidextrous Mouse",
		price: "$25",
		description:
			"Designed for both left- and right-handed users with smooth tracking.",
		size: "S",
	},
	{
		id: 30,
		category: "Mice",
		imageSrc: "31.webp",
		title: "Silent Click Mouse",
		price: "$30",
		description:
			"Mouse with silent click buttons, perfect for quiet workspaces.",
		size: "S",
	},
	{
		id: 31,
		category: "Mice",
		imageSrc: "32.webp",
		title: "Rechargeable Wireless Mouse",
		price: "$40",
		description:
			"Eco-friendly wireless mouse with rechargeable battery and USB-C charging.",
		size: "S",
	},
];

// making this code running just if we are on the products page
const query = new URLSearchParams(window.location.search);
const category = query.get("category");
const id = query.get("id");

if (currentUrlPathname.includes("/pages/products/products.html")) {
	//////// display the list of products ////////

	// get categories
	const categories = [...new Set(products.map((p) => p.category))];

	// select the main container
	const main = document.querySelector("#products-main");
	const productsAsHTML = products.map((product, i) => {
		return {
			category: product.category,
			markup: `<article class="product-card" id="${product.id}">
							<div class="image">
								<img src="../../assets/images/products/${product.imageSrc}" alt="${product.title}" />
							</div>
							<button>
								<i class="fa-solid fa-cart-plus"></i> Add To Cart
							</button>
							<h4 class="title">${product.title}</h4>
							<p class="price">${product.price}</p>
						</article>`,
		};
	});

	const productByCategoryAsHTML = categories.map((category) => {
		// // create a section
		const productsSection = document.createElement("section");
		productsSection.setAttribute("class", "products");
		// // adding a title to section
		const title = document.createElement("h1");
		title.setAttribute("class", "title");
		title.textContent = category;
		productsSection.appendChild(title);
		// // adding a wrapper for the products
		const wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		// adding products filtered by category to the wrapper
		let products = productsAsHTML.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase()
		);
		products = products.map((product) => product.markup).join("");
		wrapper.innerHTML = products;
		// appending the wrapper in the section
		productsSection.appendChild(wrapper);
		return { category: category, markup: productsSection };
	});

	function displayProductsByCategory(category) {
		const sectionProducts = productByCategoryAsHTML.find(
			(section) => section.category.toLowerCase() === category.toLowerCase()
		);

		main.insertAdjacentElement("beforeend", sectionProducts.markup);
	}

	// if category value is "all" display all products
	if (category) {
		if (category === "all")
			categories.forEach((category) => displayProductsByCategory(category));
		else {
			//else display products by category received by query params
			displayProductsByCategory(category);
		}
	}
	const productsCard = document.querySelectorAll(".product-card");
	productsCard.forEach((product) =>
		product.addEventListener("click", function (event) {
			const currentUrl = new URL(window.location.href);
			currentUrl.searchParams.delete("category");
			currentUrl.searchParams.set("id", String(product.id));
			console.log(currentUrl);
			window.location.href = currentUrl.toString();
		})
	);
	// if we have an id in the url query display the product with that id
	if (id) {
		const productDetail = products.find(
			(product) => product.id === Number(id)
		);
		main.innerHTML = `
			<section class="container">
				<div class="image">
					<img
						src="../../assets/images/products/${productDetail.imageSrc}"
						alt="black mouse"
					/>
				</div>
				<div class="details">
					<h1>${productDetail.title}</h1>
					<div class="reviews">
						<div class="stars">
							<i class="fa-solid fa-star fa-2xl"></i>
							<i class="fa-solid fa-star fa-2xl"></i>
							<i class="fa-solid fa-star fa-2xl"></i>
							<i class="fa-solid fa-star fa-2xl"></i>
							<i class="fa-solid fa-star fa-2xl"></i>
						</div>
						<p class="review-txt">
							(150 Reviews) &nbsp;&nbsp;|&nbsp;&nbsp;
							<span class="green-txt">In Stock</span>
						</p>
					</div>
					<div class="price">
						<p>${productDetail.price}.00</p>
					</div>
					<div class="description">
						<p>
						${productDetail.description}
						</p>
					</div>
					<div class="colors">
						<p>Colours:</p>
						<div>
							<ul>
								<li><span></span></li>
								<li><span></span></li>
							</ul>
						</div>
					</div>
					<div class="size">
						<p>Size:</p>
						<div class="size-btns">
							<button ${productDetail.size === "XS" ? 'class="green"' : ""}>XS</button>
							<button ${productDetail.size === "S" ? 'class="green"' : ""}>S</button>
							<button ${productDetail.size === "M" ? 'class="green"' : ""}>M</button>
							<button ${productDetail.size === "L" ? 'class="green"' : ""}>L</button>
							<button ${productDetail.size === "XL" ? 'class="green"' : ""}>XL</button>
						</div>
					</div>
					<div class="quantity">
						<div class="quantity-btns">
							<button>-</button>
							<input type="text" value="2" />
							<button>+</button>
						</div>
						<div class="buy">
							<button>Buy Now</button>
						</div>
					</div>
					<div class="delivery">
						<div class="free-delivery">
							<div class="icon">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
								>
									<path
										d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z"
									/>
								</svg>
							</div>
							<div class="delivery-info">
								<p>Free Delivery</p>
								<p>Enter your postal code for Delivery Availability</p>
							</div>
						</div>
						<div class="return">
							<div class="icon">
								<i class="fa-solid fa-undo fa-2xl"></i>
							</div>
							<div class="return-info">
								<p>Return Delivery</p>
								<p>
									Free 30 Days Delivery Returns. <span>Details</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}

document.body.insertAdjacentHTML(
	"beforeend",
	'<div class="loader-container"><div class="loader"></div></div>'
);
document.body.style.overflow = "hidden";

window.addEventListener("load", function () {
	console.log("loaded");
	setTimeout(() => {
		document.querySelector(".loader-container").remove();
		document.body.style.overflowY = "auto";
	}, 300);
});


// Adding the open-close functionnality to FAQ section

const faqs = document.querySelectorAll(".faq");

      faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
          faqs.forEach((item) => {
            const reponse = item.querySelector(".reponse");
            const icone = item.querySelector("i");

            if (item !== faq) {
              reponse.style.display = "none";
              icone.classList.add("fa-plus");
              icone.classList.remove("fa-minus");
            }
          });

          const reponse = faq.querySelector(".reponse");
          reponse.style.display =
            reponse.style.display === "block" ? "none" : "block";

          const icone = faq.querySelector("i");
          icone.classList.toggle("fa-plus");
          icone.classList.toggle("fa-minus");
        });
      });