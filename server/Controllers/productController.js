const Company = require("../Models/Company");
const Product = require("../Models/Product");

const productData = [
  {
    company: "Astral",
    product_name: "Astral CPVC Pipe",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/6/KL/ST/WW/91623/astral-cpvc-pipe-125x125.jpg",
    description:
      "A durable and versatile CPVC pipe from Astral, perfect for various plumbing applications. Resistant to corrosion and suitable for hot and cold water systems.",
    star_rating: 4.5,
    price: 26,
  },
  {
    company: "Astral",
    product_name: "Astral PVC Pipes",
    image:
      "https://5.imimg.com/data5/OG/PV/ED/GLADMIN-64442/astral-agriculture-pvc-pipes-125x125.jpg",
    description:
      "High-quality PVC pipes by Astral, designed for agricultural use. Strong and reliable, ideal for irrigation and water supply in farms and gardens.",
    star_rating: 4,
    price: 20,
  },
  {
    company: "Astral",
    product_name: "Astral Agricultural Pipes",
    image:
      "https://5.imimg.com/data5/TA/YH/ZD/GLADMIN-73467/astral-agricultural-pipes-125x125.jpg",
    description:
      "Astral's agricultural pipes are engineered for efficiency and durability. Designed to withstand harsh weather conditions, making them ideal for agricultural water distribution.",
    star_rating: 4.2,
    price: 23,
  },
  {
    company: "Finolex",
    product_name: "Finolex CPVC Pipe",
    image:
      "https://5.imimg.com/data5/XE/LV/AR/GLADMIN-64442/finolex-cpvc-pipe-125x125.jpg",
    description:
      "Finolex CPVC pipe known for its excellent performance and longevity. Suitable for both residential and commercial plumbing needs, ensuring a leak-free system.",
    star_rating: 4.7,
    price: 29,
  },
  {
    company: "Finolex",
    product_name: "Finolex PVC Pipes",
    image:
      "https://5.imimg.com/data5/QF/BE/VC/GLADMIN-64442/finolex-pvc-pipes-125x125.png",
    description:
      "Finolex PVC pipes are trusted for their strength and versatility. Used in diverse applications such as drainage systems, cable conduits, and more.",
    star_rating: 4.3,
    price: 22,
  },
  {
    company: "Finolex",
    product_name: "Finolex Agricultural Pipes",
    image:
      "https://5.imimg.com/data5/QF/BE/VC/GLADMIN-64442/finolex-pvc-pipes-125x125.png",
    description:
      "Finolex agricultural pipes offer reliable water distribution solutions for farms and agricultural settings. Built to handle high pressure and deliver consistent performance.",
    star_rating: 4.4,
    price: 24,
  },
  {
    company: "Supreme",
    product_name: "Supreme CPVC Pipes",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/6/SQ/VF/VH/91623/supreme-cpvc-pipe-125x125.jpg",
    description:
      "Supreme CPVC pipes are known for their superior quality and reliability. Ideal for both residential and industrial plumbing, ensuring smooth water flow.",
    star_rating: 4.6,
    price: 28,
  },
  {
    company: "Supreme",
    product_name: "Supreme PVC Pipes",
    image:
      "https://4.imimg.com/data4/OC/DJ/GLADMIN-180915/supreme-pvc-pipes-125x125.jpg",
    description:
      "Supreme PVC pipes are durable and cost-effective solutions for water supply systems. Trusted by professionals for their performance and longevity.",
    star_rating: 4.2,
    price: 21,
  },
  {
    company: "Prince",
    product_name: "Prince PVC Pipes",
    image:
      "https://5.imimg.com/data5/AB/YK/GF/GLADMIN-64442/prince-agriculture-pvc-pipes-125x125.jpg",
    description:
      "Prince PVC pipes are designed for agricultural applications, offering efficient water transportation solutions. Easy to install and maintain, suitable for farms and gardens.",
    star_rating: 4.1,
    price: 19,
  },
  {
    company: "Raksha",
    product_name: "Raksha Agricultural Pipes",
    image:
      "https://5.imimg.com/data5/VH/FW/FT/GLADMIN-73467/raksha-agricultural-pipes-125x125.jpg",
    description:
      "Raksha agricultural pipes are engineered for durability and reliability in farming environments. Ensures consistent water flow for irrigation and agricultural needs.",
    star_rating: 4.3,
    price: 23,
  },
  {
    company: "Ashirvad",
    product_name: "Ashirvad CPVC Pipes",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/6/VH/CJ/NS/91623/ashirvad-cpvc-pipe-125x125.jpg",
    description:
      "Ashirvad CPVC pipes are trusted for their performance and longevity in plumbing systems. Designed to withstand high temperatures and pressure.",
    star_rating: 4.5,
    price: 27,
  },
  {
    company: "Sudhakar",
    product_name: "Sudhakar PVC Pipes",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/6/CR/UE/TF/91623/sudhakar-pvc-pipes-125x125.jpg",
    description:
      "Sudhakar PVC pipes offer a reliable solution for water supply and distribution. Suitable for residential and commercial applications, ensuring leak-free performance.",
    star_rating: 4.4,
    price: 24,
  },
  {
    company: "Jain",
    product_name: "Jain PVC pipes",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/6/BF/KT/LB/91623/jain-pvc-pipes-125x125.jpg",
    description:
      "Jain PVC pipes are versatile and durable, suitable for various plumbing and irrigation needs. Easy to install and maintain, ensuring long-term performance.",
    star_rating: 4,
    price: 20,
  },
];

const getProducts = async (req, res) => {
  const prod = await Product.find();
  console.log(prod);
  return res.status(200).json({
    message: "Login successful",
    products: prod,
  });
};

const updateStock = async (req, res) => {
  const payload = req.body;
  const products = await Product.findOneAndUpdate(
    { product_name: payload.product_name },
    { stock: payload.stock }
  );
  console.log(products);
  return res.status(200).json({
    message: "Updated successfully",
    products: products,
  });
};

const addProduct = async (req, res) => {
  const payload = req.body;
  const product = await Product.insertMany(payload);
  return res.status(200).json({
  message: "Added successfully",
  products: product,
});
};

const getCompanies = async(req, res)=>{
  const companies = await Company.find();
  console.log(companies);
  return res.status(200).json({
    message: "success",
    companies: companies,
  });
}

const addCompany = async(req, res)=>{
console.log(req.body);
const company = await Company.insertMany(req?.body);
  return res.status(200).json({
    message: "success",
  });
}

module.exports = {
  getProducts,
  updateStock,
  addProduct,
  getCompanies,
  addCompany
};
