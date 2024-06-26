
let language = "Tiếng Việt"; 

const country = "Việt Nam"; 
const continent = "Châu Á"; 
let population = 98.2;

population = 3.3; 
console.log("Dân số sau khi cập nhật:", population);


//lab15.3
//chia dan so
const dsmm = population / 2;
console.log("Dân số mỗi miền:", dsmm, "triệu người");

//tang dan so
const dstang = population + 2;
population + 2;
console.log("Dân số sau khi tăng:", dstang, "triệu người");

//so sanh voi dan so phan lan
const dspl = 6; 
const sosanh = population > dspl;
console.log("Dân số nhiều hơn Phần Lanz: ", sosanh);

//so sanh voi dan so trung binh
const dstb = 33;
const sosanhtb = population < dstb;
console.log("Dân số ít hơn mức trung bình:", sosanhtb);

//mo ta quoc gia
const description = country + " and its " + population + " million people speak " + language;
console.log("Mô tả quốc gia:", description);

//lab15.4
const description1 = `${country} and its ${population} million people speak ${language}.`;
console.log(description1);
// lab15.5

if (population > dstb) {
    console.log(`${country}'s population is above average`);
  } else {
    const ds = dstb - population;
    console.log(`${country}'s population is ${ds} million below average`);
  }