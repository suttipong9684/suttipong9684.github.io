// Flash sale time
var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 4);

timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    hours %= 12;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";
  }
}

const product = [
  {
    id: 1,
    image: "img/product-flash-sale/4060msi-ventus.webp",
    title: "MSI GEFORCE RTX 4060 VENTUS 2X BLACK OC - 8GB GDDR6",
    price: 11000,
    pricef: 9900,
    category: "vga",
  },

  {
    id: 1,
    image: "img/product-flash-sale/4060msi-gaming.webp",
    title: "MSI GEFORCE RTX 4060 GAMING X 8G - 8GB GDDR6",
    price: 11400,
    pricef: 9950,
    category: "vga",
  },

  {
    id: 1,
    image: "img/product-flash-sale/GIGABYTE GEFORCE RTX 4060 GAMING OC.webp",
    title: "GIGABYTE GEFORCE RTX 4060 GAMING OC - 8GB GDDR6",
    price: 11900,
    pricef: 9950,
    category: "vga",
  },

  {
    id: 1,
    image:
      "img/product-flash-sale/MSI GEFORCE RTX 4070 VENTUS 2X 12G OC - 12GB GDDR6X.webp",
    title: "MSI GEFORCE RTX 4070 VENTUS 2X 12G OC - 12GB GDDR6X",
    price: 11900,
    pricef: 10000,
    category: "vga",
  },

  {
    id: 2,
    image:
      "img/product-flash-sale/Asus-Notebook-TUF-Gaming-A15-FA506IC-HN011T.webp",
    title: "Asus Notebook TUF Gaming A15 FA506IC HN011T",
    price: 29990,
    pricef: 27990,
    category: "notebook",
  },

  {
    id: 2,
    image:
      "img/product-flash-sale/MSI Notebook Raider GE66 12UGS-073TH Titanium Blue.webp",
    title: "MSI Notebook Raider GE66 12UGS-073TH Titanium Blue",
    price: 81990,
    pricef: 61990,
    category: "notebook",
  },

  {
    id: 2,
    image:
      "img/product-flash-sale/Asus ROG Gaming G743CX-LL058W Off Black Stealth.webp",
    title: "Asus ROG Gaming G743CX-LL058W Off Black Stealth",
    price: 99990,
    pricef: 71990,
    category: "notebook",
  },

  {
    id: 3,
    image:
      "/img/product-flash-sale/ACER MONITOR AOpen 24MV1YPbmiipx (VA 165Hz Speaker).webp",
    title: "ACER 24MV1YPbmiipx (VA 165Hz Speaker)",
    price: 3990,
    pricef: 2000,
    category: "monitor",
  },

  {
    id: 4,
    image: "img/product-flash-sale/HP-All-In-One-Printer-Smart-Tank-720-1.webp",
    title: "HP All In One Printer Smart Tank 720",
    price: 7370,
    pricef: 6500,
    category: "printer",
  },

  {
    id: 4,
    image:
      "img/product-flash-sale/Epson Ink Tank L4260 (All-In-One) Wi-Fi.webp",
    title: "Epson Ink Tank L4260 (All-In-One) Wi-Fi",
    price: 7790,
    pricef: 6500,
    category: "printer",
  },

  {
    id: 5,
    image:
      "img/product-flash-sale/Razer-Gaming-Keyboard-Ornata-V3-X-TH-1-square_medium.webp",
    title: "Razer Gaming Keyboard Ornata V3XTH",
    price: 1490,
    pricef: 1100,
    category: "keyboard",
  },

  {
    id: 6,
    image:
      "img/product-flash-sale/Logitech-Gaming-Mouse-G502-X-PLUS-RGB-Wireless-Black-1-square_medium.webp",
    title: "Logitech G502 X PLUS RGB Wireless Black",
    price: 4850,
    pricef: 3100,
    category: "mouse",
  },
];

    // search bar

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

// category

const btns = [
  {
    id: 1,
    name: "vga",
  },
  {
    id: 2,
    name: "notebook",
  },
  {
    id: 3,
    name: "monitor",
  },
  {
    id: 4,
    name: "printer",
  },
  {
    id: 5,
    name: "keyboard",
  },
  {
    id: 6,
    name: "mouse",
  },
];


const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='dropdown-item' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const filterItems = (a) => {
  const flterCategories = categories.filter(item);
  function item(value) {
    if (value.id == a) {
      return value.id;
    }
  }
  displayItem(flterCategories);
};

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;


const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price ,pricef} = item;
      return( 
        `<div class="card" style="width: 18rem">
        <div class='d-flex justify-content-end mt-3 me-3'>
        <a href="#" onclick="addheart()"><i class="bi bi-suit-heart text-danger" id="addHeart"></i></a>
        </div>
        <img class='img__product' src="${image}" alt="" />
        

        <div class="card-body d-">
        <h6>${title}</h6>
        <div class="col">
        <p class="text-secondary d-inline"><del>฿${price}</del></p>
        <h5 class="text-danger">฿${pricef}</h5>
        </div>
`
        +
        "<button class='btn btn-warning' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`

        )
    }).join("");
};
displayItem(categories);

var cart =[];

function addtocart(a){

    cart.push({...categories[a]});
    displaycart();
  };
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "฿ "+total+".00";
            return(
                `<div class="card d-flex flex-row justify-content-evenly align-items-center my-2">
                
                <img src="${image}" alt="" style="width: 20%;">
                
                <h6 class="col-4">${title}</h6>
                <h4 class="">฿${price}</h4>
                `+

                `<div class='d-flex flex-row align-items-centent gap-2'>
                <a><i class="bi bi-plus-square"></i></a>
                <buttom class='btn btn-close' onclick='delElement("+ (j++) +")'></buttom></div>
                </div>`
            );
        }).join('');
        displayItem();
    }
};

function formconfirm(){
  const modalfooter = document.getElementById('modalfooter');

  const checkclass = modalfooter.classList.contains('form__confirm')
  if(checkclass){
    modalfooter.classList.remove('form__confirm')
  }else{
    modalfooter.classList.add('form__confirm')
  }
}

function addheart(){
  const addHeart = document.getElementById('addHeart');

  const checkheart = addHeart.classList.contains('bi-suit-heart')
  if(checkheart){
    addHeart.classList.remove('bi-suit-heart')
    addHeart.classList.add('bi-suit-heart-fill')
  }else{
    addHeart.classList.remove('bi-suit-heart-fill')
    addHeart.classList.add('bi-suit-heart')
  }
}
