import { data } from "./data.js";
console.log(data);
const dessertContainer = document.getElementById("dessert-container");
console.log(dessertContainer);

document.addEventListener("DOMContentLoaded", () => {
  dessertContainer.innerHTML = data
    .map((dessert) => {
      return `<div class="flex flex-col item-start">
          <div class="relative w-full">
            <img
              src=${dessert.image.mobile}
              class="rounded-2xl"
              alt=""
            />
            <button
              class="absolute bg-white left-0 right-0 mx-auto w-fit rounded-xl px-5 py-1 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10"
            >
              Add to cart
            </button>
          </div>

          <div class="flex flex-col items-start mt-5">
            <p class="text-xs text-[#5d2418]">${dessert.category}</p>
            <p class="text-[#2e1813] font-semibold">${dessert.name}</p>
            <p class="text-[#b85c06] font-semibold">$${dessert.price}</p>
          </div>
        </div>`;
    })
    .join("");
});
